'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:web.tigranavanesyan@gmail.com',
      text: 'web.tigranavanesyan@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/tigranavanesyan',
      text: 'github.com/tigranavanesyan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tigran-avanesyan/',
      text: 'linkedin.com/in/tigran-avanesyan/',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Let's work together on your next project
          </p>
          <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
            >
              <link.icon className="w-8 h-8 mx-auto mb-4 text-gray-900 dark:text-white" />
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {link.label}
              </div>
              <div className="text-gray-900 dark:text-white font-semibold">
                {link.text}
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          onSubmit={async (e) => {
            e.preventDefault();
            setErrorMessage('');
            setStatus('sending');
            const form = e.currentTarget;
            const formData = new FormData(form);
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const message = formData.get('message') as string;
            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
              });
              const data = await res.json().catch(() => ({}));
              if (!res.ok) {
                setStatus('error');
                setErrorMessage(data.error ?? 'Something went wrong');
                return;
              }
              setStatus('success');
              form.reset();
            } catch {
              setStatus('error');
              setErrorMessage('Failed to send message');
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
              required
            ></textarea>
          </div>
          {status === 'success' && (
            <p className="mb-4 text-sm text-green-600 dark:text-green-400">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mb-4 text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          )}
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={status !== 'sending' ? { scale: 1.05 } : undefined}
            whileTap={status !== 'sending' ? { scale: 0.95 } : undefined}
            className="w-full md:w-auto px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
