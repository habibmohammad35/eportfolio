import { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohammad-habib-617404185/',
      color: 'hover:text-blue-600',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/habibmohammad35',
      color: 'hover:text-gray-900',
    },
    {
      id: 'gmail',
      icon: Mail,
      label: 'Gmail',
      url: 'mailto:habibmohammad35@gmail.com',
      color: 'hover:text-red-600',
    },
  ];

  return (
    <footer id="footer" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left space-y-2"
          >
            <h3
              className="text-2xl lg:text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let's build something great.
            </h3>
            <p
              className="text-gray-600"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Click on the icon links to get in touch
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-100 text-gray-700 transition-all ${link.color}`}
                aria-label={link.label}
                onMouseEnter={() => setHoveredIcon(link.id)}
                onMouseLeave={() => setHoveredIcon(null)}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8 pt-8 border-t border-gray-200"
        >
          <p
            className="text-sm text-gray-500"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            © 2026 Mohammad Habib. Made with love & care.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}