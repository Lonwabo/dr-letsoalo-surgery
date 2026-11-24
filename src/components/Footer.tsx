import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121619] dark:bg-[#090B0D] text-[#E6EAEF] pt-16 pb-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <BrandLogo variant="footer" />
            </Link>
            <p className="text-sm text-[#9CA5B0] leading-relaxed">
              &ldquo;{PRACTICE_INFO.tagline}&rdquo; — Compassionate, modern family
              healthcare, chronic management, pregnancy care, and medical aesthetics at
              Westgate Regional Shopping Centre.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#E08B6F]">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-[#A9B2BC]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Location &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Times */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#E08B6F]">
              Operating Times
            </h4>
            <ul className="space-y-2 text-sm text-[#A9B2BC]">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">09:00 – 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">09:00 – 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sun &amp; Public Holidays</span>
                <span className="text-[#E08B6F]">Closed</span>
              </li>
            </ul>
            <p className="text-xs text-[#7E8894] pt-2">
              {PRACTICE_INFO.cashNote} {PRACTICE_INFO.medicalAidNote}.
            </p>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#E08B6F]">
              Contact &amp; Visit
            </h4>
            <div className="space-y-2.5 text-sm text-[#A9B2BC]">
              <a
                href={PRACTICE_INFO.phoneHref}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#38A392] shrink-0" />
                <span>{PRACTICE_INFO.phone}</span>
              </a>
              <a
                href={PRACTICE_INFO.emailHref}
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#38A392] shrink-0" />
                <span>{PRACTICE_INFO.email}</span>
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E08B6F] shrink-0 mt-0.5" />
                <span>
                  {PRACTICE_INFO.addressFull}. {PRACTICE_INFO.entranceNote}.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8894]">
          <p>
            © {new Date().getFullYear()} {PRACTICE_INFO.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#A9B2BC] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
