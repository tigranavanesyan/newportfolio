import type { IconType } from 'react-icons';
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiSass,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { Code2, Layers, PanelTop, Terminal, type LucideIcon } from 'lucide-react';

const SKILL_ICONS: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  'SASS/SCSS': SiSass,
  Redux: SiRedux,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Vercel: SiVercel,
  Figma: SiFigma,
  Postman: SiPostman,
  Supabase: SiSupabase,
  Stripe: SiStripe,
  'Framer Motion': SiFramer,
};

const LUCIDE_OVERRIDES: Record<string, LucideIcon> = {
  'REST API': Layers,
  Cursor: Terminal,
  'VS Code': PanelTop,
};

export function getSkillIcon(name: string): IconType | LucideIcon {
  if (LUCIDE_OVERRIDES[name]) {
    return LUCIDE_OVERRIDES[name];
  }
  return SKILL_ICONS[name] ?? Code2;
}
