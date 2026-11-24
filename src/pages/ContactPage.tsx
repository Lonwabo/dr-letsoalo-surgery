import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { LocationSection } from '../components/LocationSection';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        breadcrumb="Location & Contact"
        kicker="Visit or Reach Out"
        title="Find Us at Westgate Mall & Get in Touch"
        description="View our embedded Google Map for Westgate Regional Shopping Centre (Entrance 1 — Woolworths Entrance), check operating hours, or send our reception desk a message."
      />

      <LocationSection />
      <ContactSection />
    </>
  );
};
