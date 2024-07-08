import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoCardsSection from './components/InfoCardsSection';
import ActivitySection from './components/ActivitySection';
import TechnologySection from './components/TechnologySection';
import RegistrationSection from './components/RegistrationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="App">
      <Header onRegistrationClick={handleRegistrationClick} />
      {isRegistrationOpen && <RegistrationSection onClose={handleCloseRegistration} />}
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
