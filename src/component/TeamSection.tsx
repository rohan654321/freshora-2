'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Define the type for a team member
type TeamMember = {
  name: string;
  title: string;
  image: string;
};

// Team member data
const teamMembers: TeamMember[] = [
  {
    name: 'Justin Stein',
    title: 'Service Manager',
    image: '/images/pesonal-info-img01.jpg',
  },
  {
    name: 'Amy Hellickson',
    title: 'Wash Expert',
    image: '/images/pesonal-info-img02.jpg',
  },
  {
    name: 'Charles Rock',
    title: 'Operations Manager',
    image: '/images/pesonal-info-img03.jpg',
  },
];

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handler for the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex, nextSlide]);

  return (
    <section className="bg-white py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-green-600 font-semibold mb-2">[ Our Team ]</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Laundry Specialists</h2>
        <p className="text-gray-600 mb-12">
          Our team’s goal each day is to earn your business with each visit and to make your experience with us the absolute best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
              <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Dots Navigation Placeholder */}
        <div className="mt-8 flex justify-center space-x-2">
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #16a34a;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;