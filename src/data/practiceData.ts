export type ServiceCategory =
  | 'All'
  | 'General & Chronic'
  | "Women's & Family"
  | 'Diagnostics & Forms'
  | 'Aesthetics';

export interface MedicalService {
  id: string;
  title: string;
  shortTitle: string;
  category: Exclude<ServiceCategory, 'All'>;
  description: string;
  duration: string;
  icon:
    | 'heart-pulse'
    | 'shield-check'
    | 'baby'
    | 'scan'
    | 'users'
    | 'pill'
    | 'stethoscope'
    | 'file-text'
    | 'sparkles';
  highlight?: string;
}

export const PRACTICE_INFO = {
  name: 'Dr Letsoalo Surgery',
  subtitle: 'Medical Doctor',
  doctorDisplay: 'Dr L. Letsoalo',
  tagline: 'Look Forward to Your Doctor Visits',
  welcomeHeading: 'Welcome to our Practice',
  welcomeCopy:
    'As an experienced Surgery based in Roodepoort, our patients appreciate the warmth, professional integrity, and open communication that define us as a medical practice. We are determined to help our patients understand their own health so that they can be well informed when making important health decisions.',
  phone: '011 762 9088',
  phoneHref: 'tel:+27117629088',
  email: 'drlletsoalo@gmail.com',
  emailHref: 'mailto:drlletsoalo@gmail.com',
  addressShort: 'Westgate Regional Shopping Centre, Roodepoort',
  addressFull:
    'Westgate Regional Shopping Centre, 120 Ontdekkers Road, Roodepoort, 1724',
  entranceNote: 'Entrance 1 (Woolworths Entrance)',
  province: 'Gauteng, South Africa',
  cashPrice: 'R650',
  cashNote: 'Cash Price R650. Additionals are charged separately.',
  medicalAidNote: 'Major Medical Aids Accepted',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Westgate+Regional+Shopping+Centre,+120+Ontdekkers+Road,+Roodepoort,+1724&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Westgate+Regional+Shopping+Centre,+120+Ontdekkers+Road,+Roodepoort,+1724,+South+Africa',
  hours: [
    { day: 'Monday', time: '09:00 – 16:00', open: true, dayIndex: 1 },
    { day: 'Tuesday', time: '09:00 – 16:00', open: true, dayIndex: 2 },
    { day: 'Wednesday', time: '09:00 – 16:00', open: true, dayIndex: 3 },
    { day: 'Thursday', time: '09:00 – 16:00', open: true, dayIndex: 4 },
    { day: 'Friday', time: '09:00 – 16:00', open: true, dayIndex: 5 },
    { day: 'Saturday', time: '09:00 – 12:00', open: true, dayIndex: 6 },
    { day: 'Sunday & Public Holidays', time: 'Closed', open: false, dayIndex: 0 },
  ],
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'All',
  'General & Chronic',
  "Women's & Family",
  'Diagnostics & Forms',
  'Aesthetics',
];

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'chronic-illness',
    title: 'Chronic Illness Management',
    shortTitle: 'Chronic Illness Care',
    category: 'General & Chronic',
    description:
      'Ongoing, personalized monitoring and treatment plans for diabetes, asthma, hypertension, and long-term conditions so you stay confident and in control.',
    duration: '30 mins',
    icon: 'heart-pulse',
    highlight: 'Diabetes · Asthma · Hypertension',
  },
  {
    id: 'check-ups',
    title: 'General Medical Check-ups',
    shortTitle: 'General Check-ups',
    category: 'General & Chronic',
    description:
      'Thorough routine health screenings, blood pressure checks, preventative wellness reviews, and acute illness consultations for children, adults, and seniors.',
    duration: '20–30 mins',
    icon: 'stethoscope',
    highlight: 'All Ages Welcome',
  },
  {
    id: 'prescriptions',
    title: 'Prescription Services',
    shortTitle: 'Scripts & Renewals',
    category: 'General & Chronic',
    description:
      'Accurate clinical assessment, writing of acute and chronic scripts, and safe medication reviews tailored to your treatment plan.',
    duration: '15–20 mins',
    icon: 'pill',
    highlight: 'Acute & Chronic Scripts',
  },
  {
    id: 'pregnancy-sonar',
    title: 'Pregnancy Sonar',
    shortTitle: 'Pregnancy Sonar',
    category: "Women's & Family",
    description:
      'Reassuring in-room ultrasound scans in a calm, supportive environment to monitor your pregnancy milestones with clear, compassionate explanations.',
    duration: '30 mins',
    icon: 'scan',
    highlight: 'In-Practice Ultrasound',
  },
  {
    id: 'pregnancy-testing',
    title: 'Pregnancy Testing',
    shortTitle: 'Pregnancy Testing',
    category: "Women's & Family",
    description:
      'Confidential, reliable clinical pregnancy testing with immediate guidance, early antenatal advice, and clear next steps.',
    duration: '15–20 mins',
    icon: 'baby',
    highlight: 'Fast & Confidential',
  },
  {
    id: 'family-planning',
    title: 'Family Planning Services',
    shortTitle: 'Family Planning',
    category: "Women's & Family",
    description:
      'Thoughtful, judgement-free birth control consultations covering oral contraceptives, injections, and personalized reproductive wellness options.',
    duration: '20 mins',
    icon: 'users',
    highlight: 'Birth Control & Guidance',
  },
  {
    id: 'hiv-care',
    title: 'HIV Testing, Diagnosis & Treatment',
    shortTitle: 'HIV Testing & Care',
    category: 'Diagnostics & Forms',
    description:
      'Private, empathetic HIV counselling, rapid testing, diagnosis, and holistic ongoing antiretroviral care in a strictly confidential setting.',
    duration: '30 mins',
    icon: 'shield-check',
    highlight: '100% Confidential',
  },
  {
    id: 'medical-forms',
    title: 'Filling in of Medical Forms',
    shortTitle: 'Medical Forms',
    category: 'Diagnostics & Forms',
    description:
      'Professional completion of employment fitness forms, insurance medicals, university/school certificates, and driver or travel health assessments.',
    duration: '20 mins',
    icon: 'file-text',
    highlight: 'Insurance · Work · School',
  },
  {
    id: 'aesthetics',
    title: 'Chemical Peels & LED Therapy',
    shortTitle: 'Chemical Peels & LED',
    category: 'Aesthetics',
    description:
      'Doctor-led medical skincare treatments combining gentle clinical chemical peels and restorative LED light therapy for radiant, healthy skin.',
    duration: '45 mins',
    icon: 'sparkles',
    highlight: 'Doctor-Led Aesthetics',
  },
];

export const FAQS = [
  {
    question: 'Where exactly inside Westgate Mall is Dr Letsoalo Surgery located?',
    answer:
      'We are conveniently situated at Westgate Regional Shopping Centre, 120 Ontdekkers Road, Roodepoort, 1724. Enter via Entrance 1 (the Woolworths Entrance) for the quickest access to the surgery.',
  },
  {
    question: 'What is the consultation fee for cash patients?',
    answer:
      'Our standard cash consultation fee is R650. Please note that additional procedures, sonars, lab tests, medications, or aesthetic treatments are charged separately.',
  },
  {
    question: 'Do you accept my medical aid?',
    answer:
      'Yes, major South African medical aids are accepted. Please bring your valid ID and medical aid card (or digital membership card) to your appointment.',
  },
  {
    question: 'Do I need to book ahead for a Sonar or Chemical Peel?',
    answer:
      'Booking in advance is strongly recommended for Pregnancy Sonars and Chemical Peels & LED Therapy so we can reserve dedicated time for your session. You can request a slot directly using our online booking wizard above.',
  },
];

export interface ClinicStatus {
  isOpen: boolean;
  label: string;
  detail: string;
}

/**
 * Computes current Open/Closed status in South Africa Standard Time (Africa/Johannesburg).
 */
export function getClinicStatus(): ClinicStatus {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '10');
    const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');
    const totalMinutes = hour * 60 + minute;

    const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].some((d) =>
      weekday.startsWith(d)
    );
    const isSat = weekday.startsWith('Sat');

    if (isWeekday && totalMinutes >= 9 * 60 && totalMinutes < 16 * 60) {
      return { isOpen: true, label: 'Open Now', detail: 'Closes at 16:00' };
    }
    if (isSat && totalMinutes >= 9 * 60 && totalMinutes < 12 * 60) {
      return { isOpen: true, label: 'Open Now', detail: 'Closes at 12:00' };
    }
    if (isWeekday && totalMinutes < 9 * 60) {
      return { isOpen: false, label: 'Opens at 09:00', detail: 'Mon–Fri 09:00–16:00' };
    }
    if (isSat && totalMinutes < 9 * 60) {
      return { isOpen: false, label: 'Opens at 09:00', detail: 'Sat 09:00–12:00' };
    }
    return { isOpen: false, label: 'Currently Closed', detail: 'Mon–Fri 09:00–16:00 · Sat 09:00–12:00' };
  } catch {
    return { isOpen: true, label: 'Mon–Sat Open', detail: '09:00–16:00 (Sat 12:00)' };
  }
}
