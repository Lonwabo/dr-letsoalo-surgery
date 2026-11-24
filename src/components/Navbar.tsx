import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Moon, Sun, Menu, X, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PRACTICE_INFO, getClinicStatus } from '../data/practiceData';
import { BrandLogo } from './BrandLogo';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services & Fees', to: '/services' },
  { label: 'Location & Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const status = getClinicStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 dark:bg-[#0E1114]/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] py-3 shadow-sm'
          : 'bg-[#FAF8F5]/75 dark:bg-[#0E1114]/75 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <Link to="/" className="focus:outline-none">
          <BrandLogo variant="navbar" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#C86D51] dark:after:bg-[#E08B6F] after:transition-all ${
                  isActive
                    ? 'text-[#1F5C52] dark:text-[#38A392] font-semibold after:w-full'
                    : 'text-[#4A525A] dark:text-[#A9B2BC] hover:text-[#1F5C52] dark:hover:text-[#38A392] after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Utilities */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Live Status Pill (Desktop) */}
          <div
            className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#161B20]/90 border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium text-[#3D454D] dark:text-[#C5CDD6]"
            title={status.detail}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-[#C86D51]'
              }`}
            />
            <span>{status.label}</span>
          </div>

          {/* Click to Call (md+) */}
          <a
            href={PRACTICE_INFO.phoneHref}
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7] hover:text-[#1F5C52] dark:hover:text-[#38A392] px-2.5 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C86D51] dark:text-[#E08B6F]" />
            <span>{PRACTICE_INFO.phone}</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#161B20] border border-black/[0.08] dark:border-white/[0.1] text-[#171A1C] dark:text-[#F3F5F7] hover:border-[#1F5C52] dark:hover:border-[#38A392] shadow-xs cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-[18px] h-[18px] text-amber-400" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-[18px] h-[18px] text-[#1F5C52]" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Book Now CTA */}
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] text-sm font-semibold shadow-md shadow-[#1F5C52]/20 transition-all hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Visit</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#161B20] border border-black/[0.08] dark:border-white/[0.1] text-[#171A1C] dark:text-[#F3F5F7] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#FAF8F5] dark:bg-[#12161B] border-b border-black/[0.08] dark:border-white/[0.08]"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#5A626A] dark:text-[#9CA5B0]">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-[#C86D51]'
                    }`}
                  />
                  <span>
                    {status.label} · {status.detail}
                  </span>
                </div>
              </div>

              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-2 text-base font-medium ${
                      isActive
                        ? 'text-[#1F5C52] dark:text-[#38A392] font-semibold'
                        : 'text-[#171A1C] dark:text-[#F3F5F7] hover:text-[#1F5C52] dark:hover:text-[#38A392]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1F5C52] dark:bg-[#38A392] text-white dark:text-[#0B1211] font-semibold text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
                <a
                  href={PRACTICE_INFO.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-black/10 dark:border-white/15 font-semibold text-sm text-[#171A1C] dark:text-[#F3F5F7]"
                >
                  <Phone className="w-4 h-4 text-[#C86D51]" />
                  Call {PRACTICE_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
