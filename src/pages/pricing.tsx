import React from 'react';
import { PricingCard } from '../components/pricing/pricing-card';
import { pricingTiers } from '../data/pricing';

export function PricingPage() {
  const handleSelectPlan = (planName: string) => {
    // TODO: Implement plan selection logic
    console.log(`Selected plan: ${planName}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose your perfect plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              onSelect={() => handleSelectPlan(tier.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}