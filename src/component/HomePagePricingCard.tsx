// components/HomepagePricingCards.tsx

"use client";

import type React from "react";
import { useState } from "react";
import { FaTshirt, FaHandsWash, FaTools } from "react-icons/fa";
import { MdIron } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServicePriceCardProps {
  icon: React.ElementType;
  title: string;
  price: string;
  description: string;
}

// Reusable card component for individual services
const ServicePriceCard: React.FC<ServicePriceCardProps> = ({ icon: Icon, title, price, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative flex flex-col items-center justify-center p-6 text-center overflow-hidden group cursor-pointer h-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-0 translate-y-[-50px]" : "opacity-100 translate-y-0"
        }`}
      >
        <Icon size={40} className="text-green-600 mb-4" />
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-2xl font-bold text-green-600">{price}</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-white transition-all duration-300 ease-in-out ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <Button className="w-full bg-green-600 hover:bg-green-700">Order Now</Button>
      </div>
    </Card>
  );
};

// The main component to export for your homepage
const HomepagePricingCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-medium mb-2">[ Affordable Prices ]</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Dry Cleaning & Laundry Prices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our prices are simple and affordable which are easy on pocket in comparison with the high street prices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServicePriceCard icon={FaTshirt} title="Blanket Service" description="Washed and Pressed" price="$25.00" />
          <ServicePriceCard icon={FaHandsWash} title="Curtains Service" description="Washed and Pressed" price="$22.00" />
          <ServicePriceCard icon={MdIron} title="Ironing Service" description="Iron and Fold" price="$3.00" />
          <ServicePriceCard icon={FaTools} title="Repairs & Alterations" description="Simple Sewing" price="$12.00" />
        </div>
      </div>
    </section>
  );
};

export default HomepagePricingCards;