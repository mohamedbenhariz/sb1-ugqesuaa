import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import type { PricingTier } from '../../types/pricing';
import { cn } from '../../lib/utils';

interface PricingCardProps {
  tier: PricingTier;
  onSelect: () => void;
}

export function PricingCard({ tier, onSelect }: PricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border shadow-sm p-8',
        tier.highlight
          ? 'border-blue-200 bg-blue-50 shadow-blue-100'
          : 'border-gray-200 bg-white'
      )}
    >
      <h3 className="text-lg font-semibold leading-none tracking-tight">{tier.name}</h3>
      <div className="mt-4 flex items-baseline text-gray-900">
        <span className="text-3xl font-bold tracking-tight">${tier.price}</span>
        <span className="ml-1 text-sm font-medium text-gray-500">/{tier.interval}</span>
      </div>
      <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
      <Button
        onClick={onSelect}
        className={cn('mt-8 w-full', tier.highlight ? 'bg-blue-600' : '')}
      >
        Get Started
      </Button>
      <ul className="mt-8 space-y-4">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="h-4 w-4 text-blue-500 mr-3" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}