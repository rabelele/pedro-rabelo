import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentiators } from './components/Differentiators';
import { About } from './components/About';
import { Cases } from './components/Cases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-prk-black text-prk-light selection:bg-prk-magenta selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Differentiators />
      <About />
      <Cases />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
