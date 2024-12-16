export interface PricingTier {
  name: string;
  price: number;
  interval: 'month' | 'year';
  description: string;
  features: string[];
  highlight?: boolean;
}