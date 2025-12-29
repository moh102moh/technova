'use client';

import { useState, useEffect, useCallback } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PortfolioSection from './components/PortfolioSection';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  }, []);

  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection('contact');
      setIsMobileMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <main className="relative bg-background-dark text-white">
      {/* ===== Decorative shapes (CLIPPED so they don't extend page height) ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80vh] h-[80vh] rounded-full bg-primary-400/10 blur-3xl transform" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70vh] h-[70vh] rounded-full bg-primary-400/5 blur-3xl transform" />
      </div>

      {/* ===== Header (unchanged behavior) ===== */}
      <header className="relative z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="w-40 sm:w-48 md:w-60 lg:w-64">
            <img
              src="/images/image3.png"
              alt="Logo"
              className="w-full h-auto cursor-pointer"
              width={400}
              height={100}
              loading="eager"
              onClick={() => handleNavClick('hero')}
            />
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              onClick={() => handleNavClick('hero')}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')}
              className={`transition duration-300 ${
                activeSection === 'hero'
                  ? 'text-primary-400 font-semibold'
                  : 'text-primary-50 hover:text-primary-400'
              }`}
              aria-label="Go to Home section"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('about')}
              className={`transition duration-300 ${
                activeSection === 'about'
                  ? 'text-primary-400 font-semibold'
                  : 'text-primary-50 hover:text-primary-400'
              }`}
              aria-label="Go to About Us section"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('services')}
              className={`transition duration-300 ${
                activeSection === 'services'
                  ? 'text-primary-400 font-semibold'
                  : 'text-primary-50 hover:text-primary-400'
              }`}
              aria-label="Go to Services section"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('portfolio')}
              className={`transition duration-300 ${
                activeSection === 'portfolio'
                  ? 'text-primary-400 font-semibold'
                  : 'text-primary-50 hover:text-primary-400'
              }`}
              aria-label="Go to Portfolio section"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick('why')}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('why')}
              className={`transition duration-300 ${
                activeSection === 'why'
                  ? 'text-primary-400 font-semibold'
                  : 'text-primary-50 hover:text-primary-400'
              }`}
              aria-label="Go to Why Us section"
            >
              Why Us
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              onKeyDown={(e) => e.key === 'Enter' && handleContactClick()}
              className="hidden md:inline-block bg-primary-400 text-primary-50 font-bold px-4 sm:px-6 py-2 rounded-full hover:bg-primary-600 transition-all duration-300 text-sm sm:text-base shadow-[0px_1px_3px_0px_#6BACCC1A] hover:shadow-[0px_12px_7px_0px_#6BACCC0D] active:shadow-[0px_5px_5px_0px_#6BACCC17] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50"
              aria-label="Contact us"
            >
              Contact us
            </button>

            <button
              className="md:hidden text-primary-50 p-2 rounded-lg hover:bg-gray-800 transition"
              onClick={toggleMobileMenu}
              onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background-dark/95 backdrop-blur-md border-t border-gray-800 animate-fadeIn" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <button onClick={() => handleNavClick('hero')} onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')} className={`py-3 text-left transition duration-300 ${activeSection === 'hero' ? 'text-primary-400 font-semibold border-l-4 border-primary-400 pl-4' : 'text-primary-50 hover:text-primary-400 hover:pl-4 hover:border-l-2 hover:border-primary-400'}`} aria-label="Go to Home section">Home</button>

              <button onClick={() => handleNavClick('about')} onKeyDown={(e) => e.key === 'Enter' && handleNavClick('about')} className={`py-3 text-left transition duration-300 ${activeSection === 'about' ? 'text-primary-400 font-semibold border-l-4 border-primary-400 pl-4' : 'text-primary-50 hover:text-primary-400 hover:pl-4 hover:border-l-2 hover:border-primary-400'}`} aria-label="Go to About Us section">About Us</button>

              <button onClick={() => handleNavClick('services')} onKeyDown={(e) => e.key === 'Enter' && handleNavClick('services')} className={`py-3 text-left transition duration-300 ${activeSection === 'services' ? 'text-primary-400 font-semibold border-l-4 border-primary-400 pl-4' : 'text-primary-50 hover:text-primary-400 hover:pl-4 hover:border-l-2 hover:border-primary-400'}`} aria-label="Go to Services section">Services</button>

              <button onClick={() => handleNavClick('portfolio')} onKeyDown={(e) => e.key === 'Enter' && handleNavClick('portfolio')} className={`py-3 text-left transition duration-300 ${activeSection === 'portfolio' ? 'text-primary-400 font-semibold border-l-4 border-primary-400 pl-4' : 'text-primary-50 hover:text-primary-400 hover:pl-4 hover:border-l-2 hover:border-primary-400'}`} aria-label="Go to Portfolio section">Portfolio</button>

              <button onClick={() => handleNavClick('why')} onKeyDown={(e) => e.key === 'Enter' && handleNavClick('why')} className={`py-3 text-left transition duration-300 ${activeSection === 'why' ? 'text-primary-400 font-semibold border-l-4 border-primary-400 pl-4' : 'text-primary-50 hover:text-primary-400 hover:pl-4 hover:border-l-2 hover:border-primary-400'}`} aria-label="Go to Why Us section">Why Us</button>

              <button onClick={handleContactClick} onKeyDown={(e) => e.key === 'Enter' && handleContactClick()} className="mt-4 bg-primary-400 text-primary-50 font-bold px-6 py-3 rounded-full hover:bg-primary-600 transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50" aria-label="Contact us">Contact us</button>
            </div>
          </div>
        )}
      </header>


      <div>
        <section id="hero" aria-label="Hero section"><HeroSection /></section>
        <section id="about" aria-label="About us section"><AboutSection /></section>
        <section id="services" aria-label="Services section"><ServicesSection /></section>
        <section id="why" aria-label="Why us section"><WhyUsSection /></section>
        <section id="portfolio" aria-label="Portfolio section"><PortfolioSection /></section>
        <section id="contact" aria-label="Contact section"><ContactSection /></section>
      </div>


      <Footer />
    </main>
  );
}
