'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  {
    name: 'Maria Garcia',
    title: 'Customer Support',
    image: '/images/pesonal-info-img01.jpg',
  },
  {
    name: 'David Chen',
    title: 'Lead Technician',
    image: '/images/pesonal-info-img02.jpg',
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
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our team’s goal each day is to earn your business with each visit and to make your experience with us the absolute best.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Viewport with overflow hidden */}
          <div className="overflow-hidden">
            {/* Inner container that slides */}
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100 / teamMembers.length}%)` }}
            >
              {/* We map over the team members to create the slides */}
              {teamMembers.map((member) => (
                // Each slide takes up full width on mobile, 1/2 on tablet, and 1/3 on desktop
                <div key={member.name} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                  <div className="flex flex-col items-center p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-40 h-40 shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/160x160/e2e8f0/4a5568?text=${member.name.charAt(0)}`;
                      }}
                    />
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-md text-gray-500">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
