import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ChevronDown,
  MapPin,
} from 'lucide-react';
import { FAQS, PRACTICE_INFO } from '../data/practiceData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || (!phone.trim() && !email.trim()) || !message.trim()) {
      setError('Please fill in your name, a phone or email address, and your message.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#F5EFEA]/70 dark:bg-[#12161B] border-t border-black/[0.05] dark:border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact + FAQs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
                Get in Touch
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                We&apos;re Here to Help
              </h2>
              <p className="text-base text-[#525A62] dark:text-[#A5B0BC]">
                Have a question about medical aid coverage, pregnancy sonars, or aesthetic
                treatments? Reach out directly or send us a quick message.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={PRACTICE_INFO.phoneHref}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#1F5C52] dark:hover:border-[#38A392] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1F5C52]/10 dark:bg-[#38A392]/15 text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7A828A] dark:text-[#8A94A0]">
                    Telephone
                  </p>
                  <p className="text-base font-bold text-[#171A1C] dark:text-[#F3F5F7]">
                    {PRACTICE_INFO.phone}
                  </p>
                </div>
              </a>

              <a
                href={PRACTICE_INFO.emailHref}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#C86D51] dark:hover:border-[#E08B6F] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F6D8CC]/60 dark:bg-[#C86D51]/20 text-[#B35437] dark:text-[#E08B6F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7A828A] dark:text-[#8A94A0]">
                    Email
                  </p>
                  <p className="text-base font-bold text-[#171A1C] dark:text-[#F3F5F7] break-all">
                    {PRACTICE_INFO.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7A828A] dark:text-[#8A94A0]">
                    Surgery Location
                  </p>
                  <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                    Westgate Mall · {PRACTICE_INFO.entranceNote}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="pt-2">
              <h3 className="font-editorial text-xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-3">
                Frequently Asked Questions
              </h3>
              <div className="space-y-2.5">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-2xl bg-white dark:bg-[#161B20] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#5A626A] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1F5C52] dark:text-[#38A392]' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-4 text-sm text-[#5A626A] dark:text-[#9CA5B0] leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-7 sm:p-10 rounded-[2rem] bg-white dark:bg-[#161B20] border border-black/[0.07] dark:border-white/[0.09] shadow-xl"
          >
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#1F5C52]/12 dark:bg-[#38A392]/20 text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                  Message Received
                </h3>
                <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0] max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. You can also send this directly via
                  your email client or call our reception on{' '}
                  <strong>{PRACTICE_INFO.phone}</strong>.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${PRACTICE_INFO.email}?subject=${encodeURIComponent(
                      `Website Enquiry: ${subject}`
                    )}&body=${encodeURIComponent(
                      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F5C52] dark:bg-[#38A392] text-white dark:text-[#0B1211] text-sm font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-3 rounded-full border border-black/[0.1] dark:border-white/[0.12] text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0] mt-1">
                    Our reception desk will respond promptly during operating hours.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="082 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                      Topic
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                    >
                      <option>General Enquiry</option>
                      <option>Medical Aid &amp; Cash Fees</option>
                      <option>Pregnancy Sonar / Women&apos;s Health</option>
                      <option>Chronic Medication &amp; Scripts</option>
                      <option>Chemical Peels &amp; LED Therapy</option>
                      <option>Medical Forms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we assist you today?"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] font-semibold text-sm shadow-lg shadow-[#1F5C52]/20 cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
