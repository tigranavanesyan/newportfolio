'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (mq.matches) setIsMenuOpen(false);
    };
    mq.addEventListener('change', closeOnDesktop);
    return () => mq.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    const ids = navItems.map((item) => item.id);

    const syncFromScroll = () => {
      const header = document.querySelector('header');
      const marker = (header?.getBoundingClientRect().bottom ?? 64) + 8;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }
      setActive(current);
    };

    const syncFromHash = () => {
      const id = window.location.hash.slice(1);
      if (ids.includes(id)) setActive(id);
    };

    syncFromHash();
    syncFromScroll();
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('scroll', syncFromScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      if (wasOpen.current) {
        menuButtonRef.current?.focus({ preventScroll: true });
      }
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousOverscroll = html.style.overscrollBehavior;

    html.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';
    body.style.overflow = 'hidden';

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('wheel', preventScroll, { passive: false });

    const menu = menuRef.current;
    const firstLink = menu?.querySelector<HTMLElement>('a[href]');
    queueMicrotask(() => firstLink?.focus({ preventScroll: true }));

    const getFocusable = () => {
      const inMenu = menu
        ? Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE))
        : [];
      return [menuButtonRef.current, ...inMenu].filter(
        (el): el is HTMLElement => Boolean(el)
      );
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = previousHtmlOverflow;
      html.style.overscrollBehavior = previousOverscroll;
      body.style.overflow = previousBodyOverflow;
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeLabel =
    mounted && theme === 'dark'
      ? 'Switch to light theme'
      : 'Switch to dark theme';

  return (
    <>
    {isMenuOpen ? (
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        className="fixed inset-0 z-40 bg-background/55 backdrop-blur-md md:hidden"
        onClick={() => setIsMenuOpen(false)}
      />
    ) : null}
    <header
      className={`site-header fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-300 ${
        isMenuOpen
          ? 'border-border bg-background'
          : scrolled
            ? 'border-border bg-background/85 backdrop-blur-md'
            : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            aria-label="Home"
            className="font-heading inline-flex min-h-11 items-center leading-none text-sm font-semibold tracking-tight text-foreground sm:text-base"
          >
            Tigran Avanesyan
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => setActive(item.id)}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-sm text-foreground transition-colors hover:text-accent"
              aria-label={themeLabel}
            >
              {mounted && theme === 'dark' ? (
                <Sun size={18} aria-hidden />
              ) : (
                <Moon size={18} aria-hidden />
              )}
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-sm text-foreground md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          id="mobile-nav"
          role={isMenuOpen ? 'dialog' : undefined}
          aria-modal={isMenuOpen || undefined}
          aria-label={isMenuOpen ? 'Menu' : undefined}
          inert={!isMenuOpen}
          className={`grid overflow-hidden border-border transition-[grid-template-rows] duration-200 md:hidden ${
            isMenuOpen
              ? 'grid-rows-[1fr] border-t'
              : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => {
                    setActive(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full rounded-sm px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-muted ${
                    active === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
