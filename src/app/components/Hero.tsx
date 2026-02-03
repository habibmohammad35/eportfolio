import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import portraitImage from '@/assets/selfpotrait.png';

export function Hero() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12 pt-12">
      <div className="max-w-7xl mx-auto w-full py-8">
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
                  Hi, I am
                </p>
                <h1
                  className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Mohammad Habib
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  I am an
                </p>
                <h2
                  className="text-2xl lg:text-3xl text-gray-700"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  AI & Data Engineer | Full-Stack Developer
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
              <div className="space-y-4 max-w-xl">
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  AI and Data Engineer focused on building clean, scalable end-to-end products. Fast learner, hackathon winner, and comfortable taking ideas from concept to production.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  I care about building with purpose, enjoy contributing to the community, and actively take part in co-curricular activities beyond just coding.
                </p>
              </div>

              <p className="text-xs uppercase tracking-wider text-gray-500 mt-6" style={{ fontFamily: 'var(--font-body)' }}>Whilst studying at Nanyang Polytechnic</p>
              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>18</span>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Achieved As or higher</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>1</span>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Director’s List</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>1</span>
                  <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>Hackathon Won</span>
                </div>
              </div>
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
                <img
                  src={portraitImage}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Favicon badge */}
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-white">
                <img src="/favicon.svg" alt="MH" className="w-16 h-16" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}