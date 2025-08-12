'use client';

import Image from 'next/image';
// 1. Import the CheckCircle2 icon
import { Phone, Clock, CreditCard, Leaf, CheckCircle2 } from 'lucide-react';

export default function LaundryExperience() {
  return (
    <section className="relative bg-[#f3f6f4] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left: Image */}
        <div className="relative flex-shrink-0">
          <Image
            src="/images/img01.jpg" // Ensure this image is in your `public/images` folder
            alt="Laundry Experience"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"/>
          {/* Decorative badge */}
          <div className="absolute bottom-6 right-6 bg-green-600 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center">
            <span className="text-lg font-bold">25</span>
            <span className="text-[10px] text-center leading-tight">years of experience</span>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <p className="text-green-600 font-semibold mb-2">
            More than 25 Years of Experience
          </p>
          <h2 className="text-3xl font-bold mb-4">
            We are Passionate About Laundry
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules.
          </p>

          {/* 2. Updated features list with Lucide icons */}
          <ul className="space-y-3 mb-6 text-gray-700">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>100% Customer Satisfaction</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Free Collection & Delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Affordable Prices</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Best Quality</span>
            </li>
          </ul>

          {/* Contact Info with Lucide Phone Icon */}
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="text-green-700 w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Call for Quality Services</p>
              <p className="text-lg font-bold text-green-700">
                1 (800) 765-43-21
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 cards with Lucide Icons */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <Clock className="text-green-600 mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Save Time & Money</h3>
          <p className="text-gray-600 text-sm">
            No more wasted time driving to the laundromats, we pickup and deliver for free!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <CreditCard className="text-green-600 mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Pay Online in Seconds</h3>
          <p className="text-gray-600 text-sm">
            Manage your Press account and billing online from your smartphone or computer.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <Leaf className="text-green-600 mb-2" />
          <h3 className="font-semibold text-green-600 mb-2">Eco-Friendly</h3>
          <p className="text-gray-600 text-sm">
            We use safe and clean perc-free solvents so you and the Earth can look good.
          </p>
        </div>
      </div>
    </section>
  );
}