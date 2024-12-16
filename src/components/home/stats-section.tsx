import React from 'react';

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Server Locations', value: '100+' },
  { label: 'Data Transferred', value: '10TB+' },
  { label: 'Uptime', value: '99.9%' },
];

export function StatsSection() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-1 text-base font-medium text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}