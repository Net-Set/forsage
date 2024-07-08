import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoCardsSection from './components/InfoCardsSection';
import ActivitySection from './components/ActivitySection';
import TechnologySection from './components/TechnologySection';
import  SmartContractInfo from './components/SmartContractInfo';

import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoCardsSection />
      <ActivitySection />
      <TechnologySection />
      <FAQSection />
      <Footer />
      {/* <SmartContractInfo /> */}
    </div>
  );
};

export default App;
