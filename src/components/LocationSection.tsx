import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Car, DoorOpen } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export const LocationSection: React.FC = () => {
  const todayDayIndex = new Date().getDay();

  return (
    <section id="location" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
              Visit Our Surgery
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
              Find Us at Westgate Mall
            </h2>
            <p className="text-base text-[#525A62] dark:text-[#A5B0BC]">
              Conveniently located on Ontdekkers Road in Roodepoort with secure mall
              parking and direct access through Entrance 1.
            </p>
          </div>

          <a
            href={PRACTICE_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start lg:self-auto px-6 py-3.5 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions in Google Maps</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-[2rem] overflow-hidden border border-black/[0.08] dark:border-white/[0.1] shadow-lg bg-[#F5EFEA] dark:bg-[#161B20] min-h-[380px] sm:min-h-[460px] relative"
          >
            <iframe
              title="Dr Letsoalo Surgery — Westgate Regional Shopping Centre, Roodepoort"
              src={PRACTICE_INFO.mapsEmbedUrl}
              className="map-embed-frame w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Wayfinding & Operating Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Address & Entrance Card */}
            <div className="p-7 rounded-[2rem] bg-white dark:bg-[#161B20] border border-black/[0.07] dark:border-white/[0.09] shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F6D8CC]/60 dark:bg-[#C86D51]/20 flex items-center justify-center text-[#B35437] dark:text-[#E08B6F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-[#171A1C] dark:text-[#F3F5F7]">
                    Practice Address
                  </h3>
                  <p className="text-sm text-[#525A62] dark:text-[#A5B0BC] mt-1 leading-relaxed">
                    {PRACTICE_INFO.addressFull}
                    <br />
                    {PRACTICE_INFO.province}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B]">
                  <DoorOpen className="w-4 h-4 text-[#1F5C52] dark:text-[#38A392] shrink-0" />
                  <span className="text-xs font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                    {PRACTICE_INFO.entranceNote}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B]">
                  <Car className="w-4 h-4 text-[#C86D51] dark:text-[#E08B6F] shrink-0" />
                  <span className="text-xs font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                    Convenient Mall Parking
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-7 rounded-[2rem] bg-white dark:bg-[#161B20] border border-black/[0.07] dark:border-white/[0.09] shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#1F5C52]/10 dark:bg-[#38A392]/15 flex items-center justify-center text-[#1F5C52] dark:text-[#38A392]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-[#171A1C] dark:text-[#F3F5F7]">
                    Operating Times
                  </h3>
                  <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0]">
                    South African Standard Time (SAST)
                  </p>
                </div>
              </div>

              <ul className="space-y-2">
                {PRACTICE_INFO.hours.map((row) => {
                  const isToday = row.dayIndex === todayDayIndex;
                  return (
                    <li
                      key={row.day}
                      className={`flex items-center justify-between text-sm px-3 py-2 rounded-xl ${
                        isToday
                          ? 'bg-[#1F5C52]/10 dark:bg-[#38A392]/15 font-semibold text-[#1F5C52] dark:text-[#38A392]'
                          : 'text-[#4A525A] dark:text-[#A9B2BC]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {row.day}
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1F5C52] dark:bg-[#38A392] text-white dark:text-[#0B1211]">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={!row.open ? 'text-[#C86D51] dark:text-[#E08B6F]' : ''}>
                        {row.time}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
