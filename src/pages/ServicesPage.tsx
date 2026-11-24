import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { PricingSection } from '../components/PricingSection';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectServiceForBooking = (serviceId: string) => {
    navigate(`/book?service=${encodeURIComponent(serviceId)}`);
  };

  return (
    <>
      <PageHeader
        breadcrumb="Services & Fees"
        kicker="Clinical & Aesthetic Care"
        title="Services Offered & Transparent Fees"
        description="Explore all 9 medical, family planning, diagnostic, and aesthetic services available at Dr Letsoalo Surgery, plus our clear R650 cash fee and medical aid options."
      />

      <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />
      <PricingSection />
    </>
  );
};
