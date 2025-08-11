import React from 'react';
import ServiceCard from './ServiceCard';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const services = [
  {
    id: 1,
    slug: 'laundry-services',
    image: '/images/img07.jpg',
    title: 'Laundry Services',
    description: 'Let us pick up and drop off your laundry, quick & cost-efficient service with flexible plans.',
  },
  {
    id: 2,
    slug: 'dry-cleaning-services',
    image: '/images/img08.jpg',
    title: 'Dry Cleaning Services',
    description: 'Stubborn stains? No problem. We ensure your clothes look as good as new.',
  },
  {
    id: 3,
    slug: 'carpet-cleaning',
    image: '/images/img09.jpg',
    title: 'Carpet Cleaning',
    description: 'Deep carpet steam cleaning to maintain hygiene and softness.',
  },
  {
    id: 4,
    slug: 'alterations-repairs',
    image: '/images/img10.jpg',
    title: 'Alterations & Repairs',
    description: 'Professional tailoring, hemming, and clothing repairs.',
  },
  {
    id: 5,
    slug: 'steam-iron',
    image: '/images/img11.jpg',
    title: 'Steam Iron',
    description: 'We offer premium steam iron services at your doorstep.',
  },
  {
    id: 6,
    slug: 'shoes-cleaning',
    image: '/images/img12.jpg',
    title: 'Shoes Cleaning',
    description: 'Bring your shoes back to life with our expert cleaning service.',
  },
];

const ServicesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h4 className={`text-green-600 font-medium mb-2 text-center ${poppins.className}`}>
        [ Our Services ]
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Dry Cleaning & Laundry,<br />Free Delivery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            slug={service.slug}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
