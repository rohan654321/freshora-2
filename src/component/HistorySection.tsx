'use client';

import Image from 'next/image';
import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8">
        
        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/images/box02-img03.jpg" // Save your image in public/images/history.png
            alt="Ironing clothes"
            width={600}
            height={400}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 md:pl-12">
          <p className="text-green-600 font-semibold mb-2">[ Our History ]</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Laundry & Dry Cleaning <br /> Foundation
          </h2>
          <p className="text-gray-600 mb-4">
            Founded in 1990, we follow a dream and an aim to serve our customers in a way that far exceeds expectation.
            Being one of the leading laundry service providers, we know our customers’ mindset.
            It is not easy to come home from a hectic day at the office and rush to the nearest laundry service with your clothes.
            So, we have an array of services to make things easy for you.
          </p>
          <p className="text-gray-600">
            You need not tolerate late deliveries, low standard of work merged with high prices.
            Our services cater to all your laundering and ironing, dry cleaning, shoe repairs, upholstery cleaning, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
