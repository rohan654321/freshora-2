import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add as needed
  display: 'swap',
});

const featuresLeft = [
  "Salons & Spas",
  "Restaurants and Caterers",
  "Religious Organizations",
  "Daycare centers",
];

const featuresRight = [
  "Assisted Living / Nursing Homes",
  "Hotels & Motels",
  "Nail Salons",
  "Athletic Facilities / Gyms",
];

export default function LaundryService() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-white px-4 md:px-20 py-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/Images/box02-img04.jpg" // replace with actual path
          alt="Laundry"
          width={700}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-12">
        <p className={`text-green-600 font-medium mb-2  ${poppins.className}`}>
          [ Laundry service for your business! ]
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
          Commercial Laundry <br /> Service
        </h2>
        <p className="text-gray-600 mb-6">
          Large corporations have determined that there is a financial benefit
          to outsourcing back office work because it saves money. Allowing us
          to do your laundry is cost effective and will allow you and your
          employees to focus on your core business. We offer smart solutions to
          meet your commercial laundry needs. Our Commercial Laundry Clients
          include:
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-6">
          <ul className="space-y-2">
            {featuresLeft.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <Check className="text-green-500 w-5 h-5 mt-1" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {featuresRight.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <Check className="text-green-500 w-5 h-5 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* More Button */}
        {/* <button className="text-green-600 hover:underline font-medium px-0 py-2">
          More
        </button> */}
      </div>
    </section>
  );
}
