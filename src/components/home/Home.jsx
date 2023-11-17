import React from 'react'
import { Hero } from './Hero'
import { About } from '../pages/About'
import { Beforeabout } from '../pages/Beforeabout';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import { Footer } from '../pages/Footer';
import { Achievements } from '../pages/Achievements';

export const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Achievements />
        <Services />
        <Contact />
      
    </>
  );
};

