import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#F6D8CC]/45 dark:bg-[#C86D51]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-[#1F5C52]/10 dark:bg-[#38A392]/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFEA] dark:bg-[#161B20] border border-[#C86D51]/25 dark:border-[#E08B6F]/25 text-xs sm:text-sm font-medium text-[#9B4C33] dark:text-[#E8A58E]"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Westgate Regional Shopping Centre · Entrance 1 (Woolworths)</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-editorial text-4xl sm:text-5xl lg:text-[3.65rem] font-semibold leading-[1.08] tracking-tight text-[#171A1C] dark:text-[#F3F5F7]"
            >
              Look Forward to Your{' '}
              <span className="italic text-[#1F5C52] dark:text-[#38A392]">
                Doctor Visits
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="text-base sm:text-lg leading-relaxed text-[#525A62] dark:text-[#A5B0BC] max-w-xl"
            >
              Warm, unhurried family healthcare in the heart of Roodepoort.{' '}
              <strong className="font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                {PRACTICE_INFO.name}
              </strong>{' '}
              combines clinical integrity, open communication, and modern care — from
              chronic illness management and pregnancy sonars to doctor-led skin aesthetics.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Link
                to="/book"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] font-semibold text-sm sm:text-base shadow-lg shadow-[#1F5C52]/25 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-[#161B20] hover:bg-[#F5EFEA] dark:hover:bg-[#1E242B] border border-black/[0.08] dark:border-white/[0.1] text-[#171A1C] dark:text-[#F3F5F7] font-semibold text-sm sm:text-base transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-black/[0.08] dark:border-white/[0.08]"
            >
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                  {PRACTICE_INFO.cashPrice}
                </p>
                <p className="text-xs sm:text-sm text-[#5A626A] dark:text-[#9CA5B0] mt-0.5">
                  Cash Consultation
                </p>
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1F5C52] dark:text-[#38A392]">
                  All Major
                </p>
                <p className="text-xs sm:text-sm text-[#5A626A] dark:text-[#9CA5B0] mt-0.5">
                  Medical Aids Accepted
                </p>
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-semibold text-[#C86D51] dark:text-[#E08B6F]">
                  Mon–Sat
                </p>
                <p className="text-xs sm:text-sm text-[#5A626A] dark:text-[#9CA5B0] mt-0.5">
                  Convenient Mall Hours
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Editorial Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Decorative Frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/50 border border-black/[0.06] dark:border-white/[0.1] bg-[#F5EFEA] dark:bg-[#161B20] aspect-[4/3.6]">
              <img
                src="/images/hero-clinic.jpg"
                alt="Dr Letsoalo warmly consulting with a patient in a bright, sunlit Roodepoort consultation room"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Bottom Left Badge inside Photo */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/92 dark:bg-[#161B20]/92 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#F6D8CC]/70 dark:bg-[#C86D51]/20 flex items-center justify-center text-[#B35437] dark:text-[#E08B6F] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1F5C52] dark:text-[#38A392]">
                    Trusted Roodepoort GP
                  </p>
                  <p className="text-sm font-medium text-[#171A1C] dark:text-[#F3F5F7]">
                    Warmth, Integrity &amp; Open Communication
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Operating Hours Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-3.5 absolute -top-5 -right-4 lg:-right-6 px-4 py-3.5 rounded-2xl bg-white dark:bg-[#1E242B] border border-black/[0.06] dark:border-white/[0.1] shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#1F5C52]/10 dark:bg-[#38A392]/15 flex items-center justify-center text-[#1F5C52] dark:text-[#38A392]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs leading-snug">
                <p className="font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                  Operating Times
                </p>
                <p className="text-[#5A626A] dark:text-[#9CA5B0]">
                  Mon–Fri: 09:00 – 16:00
                </p>
                <p className="text-[#5A626A] dark:text-[#9CA5B0]">
                  Sat: 09:00 – 12:00
                </p>
              </div>
            </motion.div>

            {/* Floating Quick Call Pill */}
            <motion.a
              href={PRACTICE_INFO.phoneHref}
              whileHover={{ scale: 1.03 }}
              className="hidden sm:inline-flex items-center gap-2.5 absolute -bottom-5 right-8 px-4 py-2.5 rounded-full bg-[#C86D51] hover:bg-[#B25A3F] text-white text-xs font-semibold shadow-lg shadow-[#C86D51]/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call {PRACTICE_INFO.phone}</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Subtle Bottom Feature Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-20 grid sm:grid-cols-3 gap-4 p-4 sm:p-5 rounded-3xl bg-white/80 dark:bg-[#161B20]/90 border border-black/[0.06] dark:border-white/[0.08] shadow-xs"
        >
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-11 h-11 rounded-2xl bg-[#F5EFEA] dark:bg-[#1E242B] flex items-center justify-center text-[#1F5C52] dark:text-[#38A392] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                Family &amp; Aesthetics Under One Roof
              </p>
              <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0]">
                GP care, sonars, chronic scripts &amp; LED skin therapy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-11 h-11 rounded-2xl bg-[#F5EFEA] dark:bg-[#1E242B] flex items-center justify-center text-[#C86D51] dark:text-[#E08B6F] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                Easy Westgate Mall Access
              </p>
              <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0]">
                120 Ontdekkers Rd · Entrance 1 (Woolworths)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-11 h-11 rounded-2xl bg-[#F5EFEA] dark:bg-[#1E242B] flex items-center justify-center text-[#1F5C52] dark:text-[#38A392] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                Patient-First Understanding
              </p>
              <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0]">
                Clear explanations so you make informed decisions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
