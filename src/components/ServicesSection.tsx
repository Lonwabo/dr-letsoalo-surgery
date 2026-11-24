import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  ShieldCheck,
  Baby,
  Scan,
  Users,
  Pill,
  Stethoscope,
  FileText,
  Sparkles,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import {
  MEDICAL_SERVICES,
  SERVICE_CATEGORIES,
  type MedicalService,
  type ServiceCategory,
} from '../data/practiceData';

const ICON_MAP: Record<MedicalService['icon'], React.ElementType> = {
  'heart-pulse': HeartPulse,
  'shield-check': ShieldCheck,
  baby: Baby,
  scan: Scan,
  users: Users,
  pill: Pill,
  stethoscope: Stethoscope,
  'file-text': FileText,
  sparkles: Sparkles,
};

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');

  const filteredServices =
    activeCategory === 'All'
      ? MEDICAL_SERVICES
      : MEDICAL_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#F5EFEA]/70 dark:bg-[#12161B] border-y border-black/[0.05] dark:border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
              Comprehensive Care
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
              Services Offered
            </h2>
            <p className="text-base text-[#525A62] dark:text-[#A5B0BC]">
              From preventative family medicine and chronic care to pregnancy sonars and
              medical aesthetics — select any service below to pre-fill your booking.
            </p>
          </div>

          {/* Animated Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white dark:text-[#0B1211]'
                      : 'text-[#4A525A] dark:text-[#A9B2BC] bg-white/80 dark:bg-[#161B20] hover:text-[#1F5C52] dark:hover:text-[#38A392] border border-black/[0.06] dark:border-white/[0.08]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeServiceFilter"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#1F5C52] dark:bg-[#38A392]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#1F5C52]/35 dark:hover:border-[#38A392]/40 shadow-xs hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-black/30 transition-shadow"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#F6D8CC]/55 dark:bg-[#C86D51]/15 text-[#B35437] dark:text-[#E08B6F] group-hover:bg-[#1F5C52] group-hover:text-white dark:group-hover:bg-[#38A392] dark:group-hover:text-[#0B1211] flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF8F5] dark:bg-[#1E242B] text-[#5A626A] dark:text-[#9CA5B0] border border-black/[0.05] dark:border-white/[0.06]">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    </div>

                    {service.highlight && (
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F5C52] dark:text-[#38A392] mb-1.5">
                        {service.highlight}
                      </p>
                    )}

                    <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#5A626A] dark:text-[#9CA5B0]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-medium text-[#7A828A] dark:text-[#7E8894]">
                      {service.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service.id)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#1F5C52] dark:text-[#38A392] hover:text-[#C86D51] dark:hover:text-[#E08B6F] cursor-pointer transition-colors"
                    >
                      <span>Book this</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Spotlight Banner: Chemical Peels & LED Therapy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-[2rem] overflow-hidden bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] shadow-lg grid lg:grid-cols-12"
        >
          <div className="lg:col-span-5 aspect-[16/11] lg:aspect-auto relative overflow-hidden">
            <img
              src="/images/care-aesthetics.jpg?v=2"
              alt="Gentle doctor-led chemical peel and clinical skincare treatment at Dr Letsoalo Surgery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#C86D51] dark:text-[#E08B6F]">
              <Sparkles className="w-4 h-4" />
              Featured Medical Aesthetics
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
              Chemical Peels &amp; Restorative LED Therapy
            </h3>
            <p className="text-sm sm:text-base text-[#525A62] dark:text-[#A5B0BC] leading-relaxed">
              Experience safe, doctor-supervised skin rejuvenation tailored for all South
              African skin tones. Whether targeting hyperpigmentation, acne, dullness, or
              fine lines, our gentle clinical peels and LED light therapy restore healthy
              radiance with minimal downtime.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectServiceForBooking('aesthetics')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C86D51] hover:bg-[#B25A3F] text-white text-sm font-semibold shadow-md shadow-[#C86D51]/25 cursor-pointer transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Aesthetics Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
