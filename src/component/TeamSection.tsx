'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Justin Stein', title: 'Service Manager', image: '/images/pesonal-info-img01.jpg' },
  { name: 'Amy Hellickson', title: 'Wash Expert', image: '/images/pesonal-info-img02.jpg' },
  { name: 'Charles Rock', title: 'Operations Manager', image: '/images/pesonal-info-img03.jpg' },
  { name: 'Justin Stein', title: 'Service Manager', image: '/images/pesonal-info-img01.jpg' },
  { name: 'Amy Hellickson', title: 'Wash Expert', image: '/images/pesonal-info-img02.jpg' },
  { name: 'Charles Rock', title: 'Operations Manager', image: '/images/pesonal-info-img03.jpg' },
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-green-600 font-semibold mb-2">[ Our Team ]</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Laundry Specialists</h2>
        <p className="text-gray-600 mb-12">
          Our team&rsquo;s goal each day is to earn your business with each visit and to make your
          experience with us the absolute best.
        </p>

        {/* Swiper Wrapper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination outside slider */}
          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </div>

      {/* Styling for pagination dots */}
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
