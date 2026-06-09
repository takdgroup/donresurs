import React from 'react';
import { Layout } from './components/Layout/Layout';

import { ScrollProgressDrop } from './components/ScrollProgressDrop/ScrollProgressDrop';
import { HeroSection } from './components/HeroSection/HeroSection';
import { BenefitSection } from './components/BenefitSection/BenefitSection';
import { MythBusterSection } from './components/MythBusterSection/MythBusterSection';
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection';
import { CalculatorSection } from './components/CalculatorSection/CalculatorSection';
import { TrustSection } from './components/TrustSection/TrustSection';
import { ReviewsSection } from './components/ReviewsSection/ReviewsSection';
import { FaqSection } from './components/FaqSection/FaqSection';
import { UrgencySection } from './components/UrgencySection/UrgencySection';
import { Quiz } from './components/Quiz/Quiz';

function App() {
  return (
    <>

      <ScrollProgressDrop />
      <Layout>
      <HeroSection />
      <BenefitSection />
      <MythBusterSection />
      <HowItWorksSection />
      <CalculatorSection />
      <TrustSection />
      <ReviewsSection />
      <FaqSection />
      <UrgencySection />
      <Quiz />
    </Layout>
    </>
  );
}

export default App;
