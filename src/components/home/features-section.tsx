import React from 'react';
import { Shield, Globe, Lock, Zap } from 'lucide-react';

const features = [
  {
    name: 'Global Network',
    description: 'Access content from anywhere with our worldwide server network',
    icon: Globe,
  },
  {
    name: 'Military-grade Encryption',
    description: 'Your data is protected with AES-256 encryption',
    icon: Lock,
  },
  {
    name: 'Lightning Fast',
    description: 'Experience high-speed connections with unlimited bandwidth',
    icon: Zap,
  },
  {
    name: 'Secure Protocol',
    description: 'Using the latest VPN protocols for maximum security',
    icon: Shield,
  },
];

export function FeaturesSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in a VPN
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Secure, reliable, and easy to use. Our VPN service provides all the features you need
            to protect your online privacy.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}