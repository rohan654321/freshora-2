'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, CreditCard, Leaf, CheckCircle2 } from 'lucide-react';
import LaundryStats from '@/component/LaundryStatus';
import GuaranteeSection from '@/component/GuaranteeSection';
import AdvantagesSection from '@/component/AdvantagesSection';
import HistorySection from '@/component/HistorySection';
import TeamSection from '@/component/TeamSection';

export default function AboutSection() {
  return (
    <>
      {/* Hero Section */}
      <div
        // CHANGE: Responsive height for better mobile display
        className="relative h-48 sm:h-64 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/modern-office-laundry.png?height=400&width=1200&text=Laundry+Machines+Background')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-white mb-4">
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
            <span className="px-2">/</span>
            <span className="text-gray-300">
              About
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Main Content Section */}
      {/* CHANGE: Responsive padding for better spacing on mobile */}
      <div className="bg-top-left bg-cover bg-no-repeat py-12 md:py-16 lg:py-24"
           style={{ backgroundImage: "url('/images/wrapper01.png')" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main About Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side Image */}
            {/* CHANGE: Removed `hidden` and `lg:block` to make image visible on all screen sizes */}
            <div className="relative">
              <div className="relative">
                <Image 
                  src="/images/img01.jpg"
                  alt="Laundry Experience" 
                  width={600} 
                  height={550} 
                  className="w-full h-auto rounded-lg shadow-xl" 
                />
                <Image 
                  className="absolute -top-5 -right-5 sm:-right-10 w-24 h-auto opacity-80" 
                  src="/images/arrow-img-right.png" 
                  alt="Arrow" 
                  width={100} 
                  height={100}
                />
                {/* CHANGE: Responsive positioning for the experience badge */}
                <div className="absolute -bottom-4 left-4 sm:left-6 lg:-left-8 bg-white rounded-lg p-4 sm:p-6 shadow-2xl text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-cyan-500">25</div>
                  <div className="text-sm text-gray-700 leading-tight">
                    years of <br /> experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="space-y-6">
              <div>
                <div className="text-green-600 font-semibold text-lg mb-2">
                  More than 25 Years of Experience
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  We are Passionate About Laundry
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-gray-600">
                We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span>100% Customer Satisfaction</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span>Free Collection & Delivery</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span>Affordable Prices</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span>Best Quality</span>
                  </li>
                </ul>
                <div className="flex items-center justify-center md:justify-start">
                  <a href="tel:+971509259667" className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-lg p-4 hover:bg-white transition-colors w-full max-w-xs shadow-md">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-left">Call for Quality Services</div>
                      <div className="text-green-600 font-bold text-lg text-left">+971 50 925 9667</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Added Info Section - Floating Cards */}
          {/* CHANGE: Responsive grid columns and margin-top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-24">
              <a href="/contact" className="group bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <Clock className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      <span className="group-hover:text-green-600 transition-colors">Save Time & Money</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      No more wasted time driving to the laundromats, we pickup and deliver for free!
                    </p>
                  </div>
                </div>
              </a>
              <a href="/contact" className="group bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <CreditCard className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      <span className="group-hover:text-green-600 transition-colors">Pay Online in Seconds</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Manage your Freshora Laundry account and billing online from your smartphone or computer.
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" className="group bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <Leaf className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                      <span className="group-hover:text-green-600 transition-colors">Eco-Friendly</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use safe and clean perc-free solvents, so you, and the Earth, can look good.
                    </p>
                  </div>
                </div>
              </a>
          </div>
        </div>
      </div>
      <LaundryStats/>
      <GuaranteeSection/>
      <AdvantagesSection/>
      <HistorySection/>
      <TeamSection/>
    </>
  );
}