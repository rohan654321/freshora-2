'use client';

import React from 'react';
import Image from 'next/image';

type Advantage = {
  icon: string;
  title: string;
  description: string;
};

const advantages: Advantage[] = [
  {
    icon: '/icons/personalized.png',
    title: 'Personalized Experience',
    description: 'We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.',
  },
  {
    icon: '/icons/affordable.png',
    title: 'Affordable Pricing',
    description: 'Prices that suit your pocket is one of our USP. An option of choosing between 2 types of pricing is available.',
  },
  {
    icon: '/icons/convenience.png',
    title: 'Convenience',
    description: 'With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.',
  },
  {
    icon: '/icons/quality.png',
    title: 'Quality',
    description: 'We use the best in class products, to assure that your favorite clothes are always there for you to wear.',
  },
  {
    icon: '/icons/delivery.png',
    title: 'Express Delivery',
    description: 'With our super express delivery, we would get your laundry done in less than 8 hours.',
  },
  {
    icon: '/icons/update.png',
    title: 'Instant Order Update',
    description: 'Regular updates of your order, to help you keep a track of your laundry and plan accordingly.',
  },
];

const AdvantagesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-green-600 font-semibold mb-2">[ Our Advantages ]</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((adv, index) => (
            <div key={index} className="flex items-start space-x-4 text-left">
              <div className="min-w-[50px]">
                <Image src={adv.icon} alt={adv.title} width={40} height={40} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{adv.title}</h3>
                <p className="text-gray-600 text-sm">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
