import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Download,
  Mail,
  CreditCard,
  Banknote,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { MEDICAL_SERVICES, PRACTICE_INFO } from '../data/practiceData';

interface BookingWizardProps {
  preselectedServiceId?: string | null;
}

type PaymentType = 'cash' | 'medical-aid';

interface OpenDateOption {
  iso: string;
  dayShort: string;
  dateNum: string;
  monthShort: string;
  fullLabel: string;
  isSaturday: boolean;
}

function getUpcomingOpenDates(count = 10): OpenDateOption[] {
  const results: OpenDateOption[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  while (results.length < count) {
    const dayOfWeek = cursor.getDay(); // 0 = Sun, 6 = Sat
    if (dayOfWeek !== 0) {
      const iso = cursor.toISOString().split('T')[0];
      results.push({
        iso,
        dayShort: cursor.toLocaleDateString('en-ZA', { weekday: 'short' }),
        dateNum: String(cursor.getDate()),
        monthShort: cursor.toLocaleDateString('en-ZA', { month: 'short' }),
        fullLabel: cursor.toLocaleDateString('en-ZA', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        isSaturday: dayOfWeek === 6,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return results;
}

const WEEKDAY_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
];

const SATURDAY_SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];

const STEPS = [
  { id: 1, label: 'Service & Billing', icon: Sparkles },
  { id: 2, label: 'Date & Time', icon: Calendar },
  { id: 3, label: 'Your Details', icon: User },
  { id: 4, label: 'Confirmation', icon: CheckCircle2 },
];

export const BookingWizard: React.FC<BookingWizardProps> = ({
  preselectedServiceId,
}) => {
  const openDates = useMemo(() => getUpcomingOpenDates(10), []);

  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);

  const [serviceId, setServiceId] = useState<string>(
    preselectedServiceId || MEDICAL_SERVICES[0].id
  );
  const [paymentType, setPaymentType] = useState<PaymentType>('cash');
  const [medicalAidName, setMedicalAidName] = useState<string>('');

  const [selectedDateIso, setSelectedDateIso] = useState<string>(openDates[0].iso);
  const [selectedTime, setSelectedTime] = useState<string>('09:30');

  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [patientType, setPatientType] = useState<'new' | 'returning'>('new');
  const [notes, setNotes] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
      setStep(1);
    }
  }, [preselectedServiceId]);

  const selectedService =
    MEDICAL_SERVICES.find((s) => s.id === serviceId) ?? MEDICAL_SERVICES[0];
  const selectedDateObj =
    openDates.find((d) => d.iso === selectedDateIso) ?? openDates[0];
  const availableSlots = selectedDateObj.isSaturday ? SATURDAY_SLOTS : WEEKDAY_SLOTS;

  useEffect(() => {
    if (!availableSlots.includes(selectedTime)) {
      setSelectedTime(availableSlots[0]);
    }
  }, [selectedDateIso, availableSlots, selectedTime]);

  const goNext = () => {
    setErrorMsg('');
    if (step === 3) {
      if (!fullName.trim() || !phone.trim()) {
        setErrorMsg('Please enter your full name and contact phone number.');
        return;
      }
      const ref = `DLS-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
    }
    setDirection(1);
    setStep((s) => Math.min(4, s + 1));
  };

  const goBack = () => {
    setErrorMsg('');
    setDirection(-1);
    setStep((s) => Math.max(1, s - 1));
  };

  const resetWizard = () => {
    setDirection(-1);
    setStep(1);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setMedicalAidName('');
    setErrorMsg('');
  };

  const handleDownloadIcs = () => {
    const [year, month, day] = selectedDateIso.split('-').map(Number);
    const [hour, minute] = selectedTime.split(':').map(Number);

    const pad = (n: number) => String(n).padStart(2, '0');
    const startStr = `${year}${pad(month)}${pad(day)}T${pad(hour)}${pad(minute)}00`;
    const endMinutes = hour * 60 + minute + 30;
    const endHour = Math.floor(endMinutes / 60);
    const endMin = endMinutes % 60;
    const endStr = `${year}${pad(month)}${pad(day)}T${pad(endHour)}${pad(endMin)}00`;

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Dr Letsoalo Surgery//Appointment//EN',
      'BEGIN:VEVENT',
      `UID:${bookingRef || 'DLS'}@drletsoalo.co.za`,
      `DTSTART;TZID=Africa/Johannesburg:${startStr}`,
      `DTEND;TZID=Africa/Johannesburg:${endStr}`,
      `SUMMARY:Appointment — ${selectedService.title} (Dr Letsoalo Surgery)`,
      `LOCATION:${PRACTICE_INFO.addressFull} (${PRACTICE_INFO.entranceNote})`,
      `DESCRIPTION:Booking Ref: ${bookingRef}\\nPatient: ${fullName}\\nPhone: ${phone}\\nBilling: ${
        paymentType === 'cash'
          ? 'Cash (R650)'
          : `Medical Aid${medicalAidName ? ` (${medicalAidName})` : ''}`
      }\\nSurgery Tel: ${PRACTICE_INFO.phone}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dr-letsoalo-appointment-${selectedDateIso}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const mailtoUrl = useMemo(() => {
    const subject = encodeURIComponent(
      `Appointment Request [${bookingRef}] — ${selectedService.title} (${selectedDateObj.fullLabel} at ${selectedTime})`
    );
    const body = encodeURIComponent(
      [
        `Hello Dr Letsoalo Surgery,`,
        ``,
        `I would like to confirm my appointment request:`,
        `- Reference: ${bookingRef}`,
        `- Service: ${selectedService.title}`,
        `- Preferred Date: ${selectedDateObj.fullLabel}`,
        `- Preferred Time: ${selectedTime}`,
        `- Billing: ${
          paymentType === 'cash'
            ? 'Private / Cash (R650)'
            : `Medical Aid${medicalAidName ? ` (${medicalAidName})` : ''}`
        }`,
        `- Patient Name: ${fullName}`,
        `- Patient Type: ${patientType === 'new' ? 'New Patient' : 'Returning Patient'}`,
        `- Phone: ${phone}`,
        email ? `- Email: ${email}` : '',
        notes ? `- Notes: ${notes}` : '',
        ``,
        `Thank you!`,
      ]
        .filter(Boolean)
        .join('\n')
    );
    return `mailto:${PRACTICE_INFO.email}?subject=${subject}&body=${body}`;
  }, [
    bookingRef,
    selectedService,
    selectedDateObj,
    selectedTime,
    paymentType,
    medicalAidName,
    fullName,
    patientType,
    phone,
    email,
    notes,
  ]);

  return (
    <section
      id="booking"
      className="py-20 sm:py-28 bg-[#F5EFEA]/70 dark:bg-[#12161B] border-y border-black/[0.05] dark:border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
            Online Appointment Wizard
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
            Book Your Visit in Minutes
          </h2>
          <p className="text-base text-[#525A62] dark:text-[#A5B0BC]">
            Choose your service, pick an open weekday or Saturday morning slot, and
            receive an instant booking summary and calendar invite.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="rounded-[2rem] bg-white dark:bg-[#161B20] border border-black/[0.07] dark:border-white/[0.09] shadow-xl overflow-hidden">
          {/* Stepper Header */}
          <div className="px-6 sm:px-10 py-6 bg-[#FAF8F5] dark:bg-[#1A2026] border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {STEPS.map((s) => {
                const Icon = s.icon;
                const active = step === s.id;
                const completed = step > s.id;
                return (
                  <div key={s.id} className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        active
                          ? 'bg-[#1F5C52] dark:bg-[#38A392] text-white dark:text-[#0B1211] shadow-md'
                          : completed
                          ? 'bg-[#1F5C52]/15 dark:bg-[#38A392]/20 text-[#1F5C52] dark:text-[#38A392]'
                          : 'bg-black/[0.05] dark:bg-white/[0.07] text-[#7A828A] dark:text-[#7E8894]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="hidden sm:block leading-tight">
                      <span className="block text-[10px] uppercase tracking-wider text-[#7A828A] dark:text-[#7E8894] font-semibold">
                        Step {s.id}
                      </span>
                      <span
                        className={`block text-xs font-semibold ${
                          active || completed
                            ? 'text-[#171A1C] dark:text-[#F3F5F7]'
                            : 'text-[#7A828A] dark:text-[#7E8894]'
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Body */}
          <div className="p-6 sm:p-10 min-h-[430px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-7"
                >
                  <div>
                    <h3 className="font-editorial text-2xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-1">
                      1. Select a Service
                    </h3>
                    <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0]">
                      Choose the primary reason for your visit.
                    </p>

                    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {MEDICAL_SERVICES.map((svc) => {
                        const selected = svc.id === serviceId;
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            onClick={() => setServiceId(svc.id)}
                            className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                              selected
                                ? 'bg-[#1F5C52]/8 dark:bg-[#38A392]/12 border-[#1F5C52] dark:border-[#38A392] ring-1 ring-[#1F5C52] dark:ring-[#38A392]'
                                : 'bg-[#FAF8F5] dark:bg-[#1E242B] border-black/[0.06] dark:border-white/[0.07] hover:border-[#1F5C52]/40 dark:hover:border-[#38A392]/40'
                            }`}
                          >
                            <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                              {svc.shortTitle}
                            </p>
                            <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0] mt-1">
                              {svc.duration} · {svc.category}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Billing Option */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-3">
                      Preferred Billing Method
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentType('cash')}
                        className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          paymentType === 'cash'
                            ? 'bg-[#F6D8CC]/45 dark:bg-[#C86D51]/15 border-[#C86D51] dark:border-[#E08B6F]'
                            : 'bg-[#FAF8F5] dark:bg-[#1E242B] border-black/[0.06] dark:border-white/[0.08]'
                        }`}
                      >
                        <Banknote className="w-5 h-5 text-[#C86D51] dark:text-[#E08B6F] shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                            Private / Cash ({PRACTICE_INFO.cashPrice})
                          </p>
                          <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0]">
                            Additionals charged separately
                          </p>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentType('medical-aid')}
                        className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          paymentType === 'medical-aid'
                            ? 'bg-[#1F5C52]/10 dark:bg-[#38A392]/15 border-[#1F5C52] dark:border-[#38A392]'
                            : 'bg-[#FAF8F5] dark:bg-[#1E242B] border-black/[0.06] dark:border-white/[0.08]'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 text-[#1F5C52] dark:text-[#38A392] shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                            Medical Aid
                          </p>
                          <p className="text-xs text-[#5A626A] dark:text-[#9CA5B0]">
                            Major SA medical aids accepted
                          </p>
                        </div>
                      </button>
                    </div>

                    {paymentType === 'medical-aid' && (
                      <div className="mt-3">
                        <input
                          type="text"
                          value={medicalAidName}
                          onChange={(e) => setMedicalAidName(e.target.value)}
                          placeholder="Medical Aid Scheme (e.g. Discovery, Bonitas, Gems, Momentum) — optional"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-7"
                >
                  <div>
                    <h3 className="font-editorial text-2xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-1">
                      2. Pick a Date &amp; Time
                    </h3>
                    <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0]">
                      Mon–Fri: 09:00–16:00 · Sat: 09:00–12:00 (Sundays closed).
                    </p>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {openDates.map((d) => {
                        const active = d.iso === selectedDateIso;
                        return (
                          <button
                            key={d.iso}
                            type="button"
                            onClick={() => setSelectedDateIso(d.iso)}
                            className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                              active
                                ? 'bg-[#1F5C52] dark:bg-[#38A392] text-white dark:text-[#0B1211] border-transparent shadow-md'
                                : 'bg-[#FAF8F5] dark:bg-[#1E242B] border-black/[0.06] dark:border-white/[0.08] text-[#171A1C] dark:text-[#F3F5F7] hover:border-[#1F5C52]/50'
                            }`}
                          >
                            <span className="block text-[11px] uppercase tracking-wider opacity-80 font-semibold">
                              {d.dayShort}
                            </span>
                            <span className="block font-editorial text-2xl font-bold leading-tight my-0.5">
                              {d.dateNum}
                            </span>
                            <span className="block text-xs opacity-80">{d.monthShort}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-[#C86D51] dark:text-[#E08B6F]" />
                      <h4 className="text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                        Available Slots for {selectedDateObj.fullLabel}
                      </h4>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2.5">
                      {availableSlots.map((slot) => {
                        const active = slot === selectedTime;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 px-3 rounded-xl text-sm font-semibold border cursor-pointer transition-all ${
                              active
                                ? 'bg-[#C86D51] text-white border-transparent shadow-sm'
                                : 'bg-[#FAF8F5] dark:bg-[#1E242B] border-black/[0.06] dark:border-white/[0.08] text-[#171A1C] dark:text-[#F3F5F7] hover:border-[#C86D51]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-editorial text-2xl font-semibold text-[#171A1C] dark:text-[#F3F5F7] mb-1">
                      3. Patient Information
                    </h3>
                    <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0]">
                      We&apos;ll use these details to confirm your slot for{' '}
                      <strong className="text-[#171A1C] dark:text-[#F3F5F7]">
                        {selectedService.shortTitle}
                      </strong>{' '}
                      on {selectedDateObj.fullLabel} at {selectedTime}.
                    </p>
                  </div>

                  {/* New vs Returning */}
                  <div className="inline-flex p-1 rounded-full bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.06] dark:border-white/[0.08]">
                    {(['new', 'returning'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPatientType(type)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                          patientType === type
                            ? 'bg-[#1F5C52] dark:bg-[#38A392] text-white dark:text-[#0B1211]'
                            : 'text-[#5A626A] dark:text-[#9CA5B0]'
                        }`}
                      >
                        {type === 'new' ? 'New Patient' : 'Returning Patient'}
                      </button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Thabo Mokoena / Sarah van der Merwe"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 082 555 0199"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A626A] dark:text-[#9CA5B0] mb-1.5">
                      Email Address (Optional)
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
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any symptoms, forms to bring, or questions for Dr Letsoalo..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.09] dark:border-white/[0.1] text-sm text-[#171A1C] dark:text-[#F3F5F7] placeholder:text-[#8A929A] focus:outline-none focus:border-[#1F5C52] dark:focus:border-[#38A392] resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {errorMsg}
                    </p>
                  )}
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-center max-w-xl mx-auto py-4 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1F5C52]/12 dark:bg-[#38A392]/20 text-[#1F5C52] dark:text-[#38A392] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#F6D8CC]/60 dark:bg-[#C86D51]/20 text-[#9B4C33] dark:text-[#E8A58E] text-xs font-bold tracking-wider uppercase mb-2">
                      Reference: {bookingRef}
                    </span>
                    <h3 className="font-editorial text-3xl font-semibold text-[#171A1C] dark:text-[#F3F5F7]">
                      Appointment Request Ready!
                    </h3>
                    <p className="text-sm text-[#5A626A] dark:text-[#9CA5B0] mt-2">
                      Thank you, <strong>{fullName}</strong>. Send your request directly to
                      reception via email or call <strong>{PRACTICE_INFO.phone}</strong>{' '}
                      with your reference number.
                    </p>
                  </div>

                  <div className="text-left p-5 rounded-2xl bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.06] dark:border-white/[0.08] space-y-2.5 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-[#5A626A] dark:text-[#9CA5B0]">Service</span>
                      <span className="font-semibold text-[#171A1C] dark:text-[#F3F5F7] text-right">
                        {selectedService.title}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#5A626A] dark:text-[#9CA5B0]">Date &amp; Time</span>
                      <span className="font-semibold text-[#171A1C] dark:text-[#F3F5F7] text-right">
                        {selectedDateObj.fullLabel} · {selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#5A626A] dark:text-[#9CA5B0]">Billing</span>
                      <span className="font-semibold text-[#171A1C] dark:text-[#F3F5F7] text-right">
                        {paymentType === 'cash'
                          ? `Private / Cash (${PRACTICE_INFO.cashPrice})`
                          : `Medical Aid${medicalAidName ? ` (${medicalAidName})` : ''}`}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#5A626A] dark:text-[#9CA5B0]">Location</span>
                      <span className="font-semibold text-[#171A1C] dark:text-[#F3F5F7] text-right">
                        Westgate Mall · {PRACTICE_INFO.entranceNote}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] font-semibold text-sm shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Request to Surgery</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleDownloadIcs}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF8F5] dark:bg-[#1E242B] border border-black/[0.1] dark:border-white/[0.12] text-[#171A1C] dark:text-[#F3F5F7] hover:border-[#1F5C52] font-semibold text-sm cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Add to Calendar (.ics)</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={resetWizard}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A626A] dark:text-[#9CA5B0] hover:text-[#1F5C52] dark:hover:text-[#38A392] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Book another appointment</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Wizard Navigation Footer */}
            {step < 4 && (
              <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/[0.1] dark:border-white/[0.12] text-sm font-semibold text-[#171A1C] dark:text-[#F3F5F7] hover:bg-[#FAF8F5] dark:hover:bg-[#1E242B] cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <p className="text-xs text-[#7A828A] dark:text-[#7E8894]">
                    Selected: <strong className="text-[#171A1C] dark:text-[#F3F5F7]">{selectedService.shortTitle}</strong>
                  </p>
                )}

                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1F5C52] hover:bg-[#174840] dark:bg-[#38A392] dark:hover:bg-[#2F8D7E] text-white dark:text-[#0B1211] text-sm font-semibold shadow-md cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  <span>{step === 3 ? 'Confirm Booking Request' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
