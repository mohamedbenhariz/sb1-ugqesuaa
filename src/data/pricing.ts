import type { PricingTier } from '../types/pricing';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    interval: 'month',
    description: 'Perfect for trying out our service',
    features: [
      'Access to basic servers',
      '500MB daily bandwidth',
      'Basic encryption',
      'Single device',
    ],
  },
  {
    name: 'Standard',
    price: 9.99,
    interval: 'month',
    description: 'Great for personal use',
    features: [
      'Access to all servers',
      'Unlimited bandwidth',
      'Military-grade encryption',
      'Connect up to 3 devices',
      'No ads',
    ],
    highlight: true,
  },
  {
    name: 'Standard Plus',
    price: 14.99,
    interval: 'month',
    description: 'Perfect for families',
    features: [
      'All Standard features',
      'Connect up to 5 devices',
      'Dedicated IP address',
      'Priority support',
      'Ad & malware blocking',
    ],
  },
  {
    name: 'Premium',
    price: 24.99,
    interval: 'month',
    description: 'For power users and businesses',
    features: [
      'All Standard Plus features',
      'Connect up to 10 devices',
      'Multiple dedicated IPs',
      '24/7 priority support',
      'Port forwarding',
      'DDoS protection',
    ],
  },
];