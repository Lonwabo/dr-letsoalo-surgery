import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Banknote, CreditCard, Check, Info } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
            Transparent Billing
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
            Clear Fees &amp; Medical Aid
          </h2>
          <p className="text-base text-[#525A62] dark:text-[#A5B0BC]">
            No hidden costs. Whether you are visiting privately or claiming through your
            medical aid, we keep billing straightforward and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Private / Cash Consultation Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative p-8 sm:p-10 rounded-[2rem] bg-white dark:bg-[#161B20] border border-black/[0.07] dark:border-white/[0.09] shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F6D8CC]/60 dark:bg-[#C86D51]/20 flex items-center justify-center text-[#B35437] dark:text-[#E08B6F]">
                  <Banknote className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5EFEA] dark:bg-[#1E242B] text-[#9B4C33] dark:text-[#E8A58E]">
                  Private / Cash
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                Cash Consultation
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-editorial text-5xl font-bold text-[#1F5C52] dark:text-[#38A392]">
                  {PRACTICE_INFO.cashPrice}
                </span>
                <span className="text-sm text-[#5A626A] dark:text-[#9CA5B0]">
                  / standard GP visit
                </span>
              </div>

              <p className="mt-4 text-sm text-[#525A62] dark:text-[#A5B0BC] leading-relaxed">
                Ideal for self-paying patients seeking unhurried, thorough medical advice
                and clear treatment guidance.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-[#3D454D] dark:text-[#C5CDD6]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1F5C52] dark:text-[#38A392] shrink-0 mt-0.5" />
                  <span>Full consultation with Dr Letsoalo</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1F5C52] dark:text-[#38A392] shrink-0 mt-0.5" />
                  <span>Prescription / script writing included where clinically indicated</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#C86D51] dark:text-[#E08B6F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Note:</strong> Additionals (sonars, tests, forms, or
                    aesthetics) are charged separately.
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="/book"
              className="mt-8 inline-flex items-center justify-center w-full py-3.5 rounded-full bg-[#FAF8F5] dark:bg-[#1E242B] hover:bg-[#1F5C52] hover:text-white dark:hover:bg-[#38A392] dark:hover:text-[#0B1211] border border-black/[0.08] dark:border-white/[0.1] text-[#171A1C] dark:text-[#F3F5F7] font-semibold text-sm transition-colors"
            >
              Book a Cash Visit
            </Link>
          </motion.div>

          {/* Medical Aid Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative p-8 sm:p-10 rounded-[2rem] bg-[#1F5C52] dark:bg-[#143B35] text-white shadow-xl shadow-[#1F5C52]/20 flex flex-col justify-between overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 text-white">
                  Medical Aid
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold">
                {PRACTICE_INFO.medicalAidNote}
              </h3>

              <p className="mt-4 text-sm text-white/85 leading-relaxed">
                We welcome members from major South African medical aid schemes and assist
                with smooth claims processing right at reception.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F6D8CC] shrink-0 mt-0.5" />
                  <span>Direct submission to major SA medical schemes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F6D8CC] shrink-0 mt-0.5" />
                  <span>Chronic illness PMB &amp; script support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#F6D8CC] shrink-0 mt-0.5" />
                  <span>
                    Please bring your <strong>ID</strong> and{' '}
                    <strong>Medical Aid card</strong> to your visit
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="/book"
              className="relative mt-8 inline-flex items-center justify-center w-full py-3.5 rounded-full bg-white hover:bg-[#F6D8CC] text-[#171A1C] font-semibold text-sm transition-colors"
            >
              Book with Medical Aid
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
