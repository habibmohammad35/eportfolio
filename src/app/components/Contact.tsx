import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '64px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"
          />

          {/* Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Be it an idea, work opportunities or just reaching out to learn more. Let's connect to bring your vision to life.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
