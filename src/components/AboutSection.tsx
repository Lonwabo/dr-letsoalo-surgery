import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, MessageCircleHeart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

const PILLARS = [
  {
    icon: HeartHandshake,
    title: 'Genuine Warmth',
    description:
      'Every patient — from toddlers to grandparents — is greeted with kindness, patience, and dignity.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Integrity',
    description:
      'Evidence-based medical care, strict confidentiality, and transparent pricing with zero surprises.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Open Communication',
    description:
      'We take time to explain your diagnosis and options clearly so you feel empowered about your health.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Diverse Community Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="col-span-7 rounded-3xl overflow-hidden shadow-lg border border-black/[0.06] dark:border-white/[0.08] aspect-[4/4.6] bg-[#F5EFEA] dark:bg-[#161B20]"
            >
              <img
                src="/images/care-black-family.jpg"
                alt="Smiling Black South African mother and young daughter at Dr Letsoalo Surgery in Roodepoort"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <div className="col-span-5 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-black/[0.06] dark:border-white/[0.08] aspect-[4/3.6] bg-[#F5EFEA] dark:bg-[#161B20]"
              >
                <img
                  src="/images/care-white-couple.jpg"
                  alt="Warm smiling White South African couple visiting the Roodepoort clinic for a wellness check"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-black/[0.06] dark:border-white/[0.08] aspect-[4/3.3] bg-[#F5EFEA] dark:bg-[#161B20]"
              >
                <img
                  src="/images/care-maternity.jpg"
                  alt="Happy expectant South African couple during a supportive maternity consultation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Philosophy Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
              Our Community &amp; Philosophy
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-[#171A1C] dark:text-[#F3F5F7]">
              {PRACTICE_INFO.welcomeHeading}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#525A62] dark:text-[#A5B0BC]">
              {PRACTICE_INFO.welcomeCopy}
            </p>

            <div className="space-y-4 pt-2">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] shadow-xs"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F5EFEA] dark:bg-[#1E242B] flex items-center justify-center text-[#1F5C52] dark:text-[#38A392] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0] mt-0.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#1F5C52] dark:text-[#38A392]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Serving Roodepoort &amp; West Rand Families
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Walk-ins &amp; Scheduled Visits
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
