import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import TrustedBy from './sections/TrustedBy';
import FeaturesSection from './sections/FeaturesSection';
import TeamSection from './sections/TeamSection';
import AboutSection from './sections/AboutSection';
import PricingSection from './sections/PricingSection';
import StepsSection from './sections/StepsSection';

import NewsletterSection from './sections/NewsletterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <FeaturesSection />
        <TeamSection />
        <AboutSection />
        <PricingSection />
        <StepsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
