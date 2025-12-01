import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import InfoSection from './components/InfoSection';
import VolunteerStories from './components/VolunteerStories';
import VideoSection from './components/VideoSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-background text-brand-text-primary font-sans">
      <Header />
      <main>
        <HeroCarousel />
        <InfoSection />
        <VolunteerStories />
        <VideoSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;