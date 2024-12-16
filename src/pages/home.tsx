import React from 'react';
import { HeroSection } from '../components/home/hero-section';
import { FeaturesSection } from '../components/home/features-section';
import { StatsSection } from '../components/home/stats-section';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
}