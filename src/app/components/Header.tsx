import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex items-center">
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Mohammad Habib
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('accomplishments')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Accomplishments
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contact
            </button>
          </nav>

          {/* Favicon - More Iconic */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <span className="text-white text-base font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                MH
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}