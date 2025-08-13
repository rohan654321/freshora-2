"use client"

<<<<<<< HEAD
import type React from "react"
import Image from "next/image"
=======
import React from 'react';
// 1. Import the necessary Lucide icons
import { 
  UserCheck, 
  Tag, 
  Smartphone, 
  ShieldCheck, 
  Truck, 
  BellRing 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
>>>>>>> b206bd5efcabf768c61c9e66165814abf012e5cf

// 2. Update the type to accept a component for the icon
type Advantage = {
<<<<<<< HEAD
  icon: string
  title: string
  description: string
}
=======
  icon: LucideIcon;
  title: string;
  description: string;
};
>>>>>>> b206bd5efcabf768c61c9e66165814abf012e5cf

// 3. The data array now uses the imported icon components directly
const advantages: Advantage[] = [
  {
<<<<<<< HEAD
    icon: "/icons/personalized.png",
    title: "Personalized Experience",
    description:
      "We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.",
  },
  {
    icon: "/icons/affordable.png",
    title: "Affordable Pricing",
    description:
      "Prices that suit your pocket is one of our USP. An option of choosing between 2 types of pricing is available.",
  },
  {
    icon: "/icons/convenience.png",
    title: "Convenience",
    description:
      "With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.",
  },
  {
    icon: "/icons/quality.png",
    title: "Quality",
    description:
      "We use the best in class products, to assure that your favorite clothes are always there for you to wear.",
  },
  {
    icon: "/icons/delivery.png",
    title: "Express Delivery",
    description: "With our super express delivery, we would get your laundry done in less than 8 hours.",
  },
  {
    icon: "/icons/update.png",
    title: "Instant Order Update",
    description: "Regular updates of your order, to help you keep a track of your laundry and plan accordingly.",
=======
    icon: UserCheck,
    title: 'Personalized Experience',
    description: 'We take utmost care of your clothes, segregating based on the cloth type and giving you instant clothes to make a statement.',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    description: 'Prices that suit your pocket is one of our USP. An option of choosing between 2 types of pricing is available.',
  },
  {
    icon: Smartphone,
    title: 'Convenience',
    description: 'With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'We use the best in class products, to assure that your favorite clothes are always there for you to wear.',
  },
  {
    icon: Truck,
    title: 'Express Delivery',
    description: 'With our super express delivery, we would get your laundry done in less than 8 hours.',
  },
  {
    icon: BellRing,
    title: 'Instant Order Update',
    description: 'Regular updates of your order, to help you keep a track of your laundry and plan accordingly.',
>>>>>>> b206bd5efcabf768c61c9e66165814abf012e5cf
  },
]

const AdvantagesSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-green-600 font-semibold mb-2 text-sm sm:text-base">[ Our Advantages ]</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 leading-tight">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {advantages.map((adv, index) => (
<<<<<<< HEAD
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4 text-left p-4 sm:p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="min-w-[40px] sm:min-w-[50px] flex-shrink-0">
                <Image
                  src={adv.icon || "/placeholder.svg"}
                  alt={adv.title}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
=======
            <div key={index} className="flex items-start space-x-4 text-left">
              {/* 4. This code renders the Lucide icon, not an <Image> tag */}
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <adv.icon className="w-6 h-6 text-green-700" />
>>>>>>> b206bd5efcabf768c61c9e66165814abf012e5cf
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg leading-tight">{adv.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
export default AdvantagesSection
=======
export default AdvantagesSection;
>>>>>>> b206bd5efcabf768c61c9e66165814abf012e5cf
