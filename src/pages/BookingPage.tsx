import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Phone, Clock, MapPin } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { BookingWizard } from '../components/BookingWizard';
import { PRACTICE_INFO } from '../data/practiceData';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedServiceId = searchParams.get('service');

  return (
    <>
      <PageHeader
        breadcrumb="Book Appointment"
        kicker="Online Scheduling"
        title="Book Your Doctor Visit"
        description="Complete the 4-step wizard below to select your service, choose an open weekday or Saturday morning slot, and receive a confirmation summary and calendar invite."
      />

      <BookingWizard preselectedServiceId={preselectedServiceId} />

      {/* Helpful Walk-in & Phone Strip */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
            <a
              href={PRACTICE_INFO.phoneHref}
              className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#FAF8F5] dark:hover:bg-[#1E242B] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1F5C52]/10 dark:bg-[#38A392]/15 text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A828A] dark:text-[#8A94A0]">
                  Need Same-Day Care?
                </p>
                <p className="text-sm font-bold text-[#171A1C] dark:text-[#F3F5F7]">
                  Call {PRACTICE_INFO.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-10 h-10 rounded-xl bg-[#F6D8CC]/60 dark:bg-[#C86D51]/20 text-[#B35437] dark:text-[#E08B6F] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A828A] dark:text-[#8A94A0]">
                  Operating Times
                </p>
                <p className="text-sm font-bold text-[#171A1C] dark:text-[#F3F5F7]">
                  Mon–Fri 09–16 · Sat 09–12
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-[#FAF8F5] dark:hover:bg-[#1E242B] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1F5C52]/10 dark:bg-[#38A392]/15 text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A828A] dark:text-[#8A94A0]">
                  Directions &amp; Map
                </p>
                <p className="text-sm font-bold text-[#171A1C] dark:text-[#F3F5F7]">
                  Westgate · Entrance 1 →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
