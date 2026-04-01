import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { HowIWork } from '../../sections/HowIWork/HowIWork';
import { CTA } from '../../sections/CTA/CTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <HowIWork />
      <CTA />
    </>
  );
};
