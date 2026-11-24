import React from 'react';
import { PRACTICE_INFO } from '../data/practiceData';

interface BrandLogoProps {
  /** 'navbar' adapts to light/dark theme; 'footer' is optimized for dark footer */
  variant?: 'navbar' | 'footer';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'navbar',
  showText = true,
}) => {
  const isFooter = variant === 'footer';

  return (
    <div className="inline-flex items-center gap-3.5 group select-none">
      {/* Bespoke Dr Letsoalo Emblem: Organic Botanical-Medical Crest + Editorial 'L' Monogram */}
      <div className="relative w-11 h-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          aria-hidden="true"
        >
          {/* Outer Soft Crest Background */}
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            rx="18"
            className={
              isFooter
                ? 'fill-[#162825] stroke-[#38A392]/40'
                : 'fill-[#1F5C52] dark:fill-[#162825] stroke-[#1F5C52] dark:stroke-[#38A392]/45'
            }
            strokeWidth="1.75"
          />

          {/* Subtle Inner Arch Ring */}
          <path
            d="M15 32C15 21.5 22.6 13.5 32 13.5C41.4 13.5 49 21.5 49 32C49 42.5 41.4 50.5 32 50.5C22.6 50.5 15 42.5 15 32Z"
            className={
              isFooter
                ? 'stroke-[#38A392]/30'
                : 'stroke-white/20 dark:stroke-[#38A392]/30'
            }
            strokeWidth="1.25"
          />

          {/* Flowing Stethoscope / Botanical Heart-Leaf Arc */}
          <path
            d="M19 29C19 20.8 25.5 15.5 33 15.5C40.5 15.5 46.5 21 46.5 29C46.5 38.2 38.5 44.8 32 48.5"
            className={
              isFooter
                ? 'stroke-[#38A392]'
                : 'stroke-[#F6D8CC] dark:stroke-[#38A392]'
            }
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Editorial Serif 'L' Monogram for Letsoalo */}
          <path
            d="M25.5 22.5H30.5M28 22.5V41H39.5C41.2 41 42.2 39.8 42.6 37.8"
            className="stroke-white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Warm Terracotta Medical Care Spark / Pulse Accent */}
          <circle
            cx="43.5"
            cy="22"
            r="4.2"
            className="fill-[#E08B6F]"
          />
          <path
            d="M43.5 20.1V23.9M41.6 22H45.4"
            stroke="#FFFFFF"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="leading-tight">
          <span
            className={`block font-editorial text-lg sm:text-[1.3rem] font-semibold tracking-tight ${
              isFooter
                ? 'text-white'
                : 'text-[#171A1C] dark:text-[#F3F5F7]'
            }`}
          >
            {PRACTICE_INFO.name}
          </span>
          <span className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.17em] text-[#C86D51] dark:text-[#E08B6F] font-semibold mt-0.5">
            <span>{PRACTICE_INFO.subtitle}</span>
            <span className="w-1 h-1 rounded-full bg-current opacity-60" />
            <span>Roodepoort</span>
          </span>
        </div>
      )}
    </div>
  );
};
