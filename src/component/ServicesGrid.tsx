import React from 'react';
import ServiceCard from './ServiceCard';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const services = [
  { id: 1 , slug: "laundry-services", image:"/images/box02-img01.webp", title: "Laundry Services", description: "Professional laundry for all clothes." },
  { id: 2, slug: "dry-cleaning-services", image: "/images/img08.jpg", title: "Dry Cleaning Services", description: "Gentle care for delicate garments." },
  { id: 3, slug: "express-laundry-services", image:"/images/img01.jpg", title: "Express Laundry Services", description: "Same-day laundry services." },
  { id: 4, slug: "shoe-bag-spa", image:"/images/img12.jpg", title: "Shoe & Bag Spa", description: "Luxury cleaning for shoes and bags." },
  { id: 5, slug: "luxury-shoe-cleaning", image:"/images/download.jfif", title: "Luxury Shoe Cleaning", description: "Premium shoe care services." },
  { id: 6, slug: "commercial-laundry-service", image:"/images/layout01-img01.jpg", title: "Commercial Laundry Service", description: "Laundry solutions for businesses." },
  { id: 7, slug: "curtain-cleaning-service", image:"/images/img10.jpg", title: "Curtain Cleaning Service", description: "Expert curtain cleaning at your doorstep." },
  { id: 8, slug: "carpet-cleaning-service", image:"/images/img09.jpg", title: "Carpet Cleaning Service", description: "Deep cleaning for carpets and rugs." },
  { id: 9, slug: "soft-toy-cleaning-service", image:"/images/img11.jpg", title: "Soft Toy Cleaning Service", description: "Safe and hygienic cleaning for toys." },
]

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
