import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGridFeatures } from './components/BentoGridFeatures';
import { TalentSection } from './components/TalentSection';
import { VendorSection } from './components/VendorSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-dentex-dark overflow-x-hidden selection:bg-dentex-primaryLight selection:text-dentex-primaryDark">
      <Navbar />
      <main>
        <Hero />
        <BentoGridFeatures />
        <TalentSection />
        <VendorSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;