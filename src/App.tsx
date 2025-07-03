import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Academics } from './components/Academics';
import { Admissions } from './components/Admissions';
import { Testimonials } from './components/Testimonials';
import { CampusLife } from './components/CampusLife';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <Testimonials />
      <CampusLife />
      <Footer />
    </div>
  );
}

export default App;