import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Heart, ClipboardList, Smile } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';

const VISIT_STEPS = [
  {
    step: '01',
    icon: Smile,
    title: 'Warm Reception at Entrance 1',
    description:
      'Easy access from the Woolworths Entrance at Westgate Mall with friendly, quick check-in for both cash and medical aid patients.',
  },
  {
    step: '02',
    icon: Heart,
    title: 'Unhurried Consultation',
    description:
      'Dr Letsoalo listens attentively and explains every step of your assessment, test, or sonar in plain, reassuring language.',
  },
  {
    step: '03',
    icon: ClipboardList,
    title: 'Clear, Informed Care Plan',
    description:
      'Leave with full understanding of your health, your prescription or chronic plan, and clear follow-up guidance.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        kicker="Our Practice & Community"
        title="Compassionate Healthcare in Roodepoort"
        description="Get to know the values, warmth, and patient-first philosophy that guide Dr Letsoalo Surgery at Westgate Regional Shopping Centre."
      />

      <AboutSection />

      {/* What to Expect Section */}
      <section className="py-20 bg-[#F5EFEA]/70 dark:bg-[#12161B] border-y border-black/[0.05] dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
              Patient Experience
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
              What to Expect at Your Visit
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VISIT_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="p-7 rounded-3xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] shadow-xs"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#1F5C52]/10 dark:bg-[#38A392]/15 text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-editorial text-2xl font-bold text-[#C86D51]/45 dark:text-[#E08B6F]/45">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white dark:bg-[#161B20] border border-black/[0.08] dark:border-white/[0.1] text-[#171A1C] dark:text-[#F3F5F7] font-semibold text-sm"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
