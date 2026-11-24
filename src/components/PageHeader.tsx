import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  description,
  breadcrumb,
}) => {
  return (
    <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-16 overflow-hidden border-b border-black/[0.06] dark:border-white/[0.08] bg-[#F5EFEA]/65 dark:bg-[#12161B]">
      {/* Subtle Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F6D8CC]/45 dark:bg-[#C86D51]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#1F5C52]/10 dark:bg-[#38A392]/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl space-y-4"
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5A626A] dark:text-[#9CA5B0]"
          >
            <Link
              to="/"
              className="hover:text-[#1F5C52] dark:hover:text-[#38A392] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#171A1C] dark:text-[#F3F5F7] font-semibold">
              {breadcrumb}
            </span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C86D51] dark:text-[#E08B6F]">
            {kicker}
          </p>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-tight text-[#171A1C] dark:text-[#F3F5F7]">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-[#525A62] dark:text-[#A5B0BC] leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
