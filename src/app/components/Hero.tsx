import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';

export function Hero() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '64px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            />

            {/* Headline */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Name
                </p>
                <h1
                  className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Your Name Here
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Title
                </p>
                <h2
                  className="text-2xl lg:text-3xl text-gray-700"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Full Stack Engineer & Data Specialist
                </h2>
              </motion.div>
            </div>

            {/* About Me */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <p className="text-xs uppercase tracking-wider text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
                About me
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button
                onClick={scrollToFooter}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get in touch
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Portrait frame */}
            <div className="relative">
              {/* Portrait */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Favicon badge */}
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  MH
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}