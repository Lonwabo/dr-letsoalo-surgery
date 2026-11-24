import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Scan,
  Stethoscope,
  Sparkles,
  Calendar,
  MapPin,
  Phone,
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { PRACTICE_INFO } from '../data/practiceData';

const FEATURED_SERVICES = [
  {
    id: 'chronic-illness',
    title: 'Chronic Illness Management',
    subtitle: 'Diabetes · Asthma · Hypertension',
    description:
      'Ongoing, personalized monitoring and treatment plans so you stay confident and in control of your long-term health.',
    icon: HeartPulse,
  },
  {
    id: 'pregnancy-sonar',
    title: 'Pregnancy Testing & Sonar',
    subtitle: 'In-Practice Ultrasound',
    description:
      'Reassuring in-room pregnancy scans and confidential antenatal guidance in a calm, supportive setting.',
    icon: Scan,
  },
  {
    id: 'check-ups',
    title: 'Family Check-ups & Scripts',
    subtitle: 'All Ages Welcome',
    description:
      'Thorough routine screenings, acute consultations, medical forms, and safe prescription renewals.',
    icon: Stethoscope,
  },
  {
    id: 'aesthetics',
    title: 'Chemical Peels & LED Therapy',
    subtitle: 'Doctor-Led Aesthetics',
    description:
      'Gentle clinical skin rejuvenation and restorative LED light therapy tailored for radiant, healthy skin.',
    icon: Sparkles,
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />

      {/* Community Preview Strip */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5 space-y-5"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
                Roodepoort Family Care
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold leading-tight text-[#171A1C] dark:text-[#F3F5F7]">
                Warmth, Integrity &amp; Open Communication
              </h2>
              <p className="text-base text-[#525A62] dark:text-[#A5B0BC] leading-relaxed">
                {PRACTICE_INFO.welcomeCopy}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5C52] dark:text-[#38A392] hover:text-[#C86D51] dark:hover:text-[#E08B6F] transition-colors pt-1"
              >
                <span>More about our practice &amp; patient care</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-black/[0.06] dark:border-white/[0.08] aspect-[4/3.4]"
              >
                <img
                  src="/images/care-black-family.jpg"
                  alt="Smiling Black South African mother and daughter at Dr Letsoalo Surgery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-black/[0.06] dark:border-white/[0.08] aspect-[4/3.4]"
              >
                <img
                  src="/images/care-white-couple.jpg"
                  alt="Smiling White South African couple visiting Dr Letsoalo Surgery in Roodepoort"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 sm:py-24 bg-[#F5EFEA]/70 dark:bg-[#12161B] border-y border-black/[0.05] dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2.5">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
                What We Offer
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                Comprehensive Medical &amp; Aesthetic Care
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#161B20] border border-black/[0.08] dark:border-white/[0.1] text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7] hover:border-[#1F5C52] dark:hover:border-[#38A392] transition-colors self-start sm:self-auto"
            >
              <span>View All 9 Services &amp; Fees</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#F6D8CC]/55 dark:bg-[#C86D51]/15 text-[#B35437] dark:text-[#E08B6F] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1F5C52] dark:text-[#38A392] mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="font-editorial text-xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to={`/book?service=${item.id}`}
                    className="mt-5 pt-4 border-t border-black/[0.05] dark:border-white/[0.06] inline-flex items-center gap-1 text-sm font-semibold text-[#1F5C52] dark:text-[#38A392] hover:text-[#C86D51] dark:hover:text-[#E08B6F]"
                  >
                    <span>Book now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.25rem] p-8 sm:p-12 lg:p-14 bg-[#1F5C52] dark:bg-[#143B35] text-white relative overflow-hidden shadow-xl"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F6D8CC]">
                  Westgate Regional Shopping Centre · Entrance 1
                </p>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold leading-tight">
                  Ready to Schedule Your Visit?
                </h2>
                <p className="text-sm sm:text-base text-white/85 max-w-xl">
                  Cash consultations are <strong>{PRACTICE_INFO.cashPrice}</strong>{' '}
                  (additionals charged separately), and{' '}
                  <strong>{PRACTICE_INFO.medicalAidNote}</strong>. Book online in under 2
                  minutes or call our reception desk.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#F6D8CC] text-[#171A1C] font-semibold text-sm shadow-lg transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/12 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Directions &amp; Map</span>
                </Link>
                <a
                  href={PRACTICE_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-black/20 hover:bg-black/30 text-white font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F6D8CC]" />
                  <span>{PRACTICE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
