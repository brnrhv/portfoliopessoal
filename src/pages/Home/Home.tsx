import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { HowIWork } from '../../sections/HowIWork/HowIWork';
import { CTA } from '../../sections/CTA/CTA';
import { Footer } from '../../sections/Footer/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <HowIWork />
      <CTA />
      <Footer />
    </>
  );
};
