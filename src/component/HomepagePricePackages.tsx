// components/HomepagePricePackages.tsx

"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image"; // Make sure Image is imported
import { FaTshirt, FaHandsWash } from "react-icons/fa";
import { MdIron } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

// The PackageCard sub-component remains the same...
interface PackageCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  price: string;
  isFeatured?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ icon: Icon, title, description, features, price, isFeatured }) => {
    // ...no changes needed inside this component
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
        className={`relative p-6 text-center overflow-hidden group cursor-pointer h-[450px] flex flex-col justify-between ${
            isFeatured ? "border-2 border-green-600 shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <div
            className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-300 ease-in-out ${
            isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
        >
            <CardContent className="p-0 flex flex-col items-center">
            <div
                className={`p-4 rounded-full inline-flex mb-6 ${isFeatured ? "bg-green-600 text-white" : "bg-green-100 text-green-600"}`}
            >
                <Icon size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="text-left space-y-2 mb-8 w-full">
                {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                </li>
                ))}
            </ul>
            </CardContent>
            <p className="text-3xl font-bold text-gray-900">{price}</p>
        </div>
        <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-white ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
        >
            <Icon size={60} className="text-green-600 mb-6" />
            <Button className="w-3/4 bg-green-600 hover-bg-green-700">Order Now</Button>
        </div>
        </Card>
    );
};


const HomepagePricePackages = () => {
  return (
    // 1. Add a relative parent div with the background color and overflow-hidden
    <div className="relative overflow-hidden" style={{ backgroundColor: '#f3f6f4' }}>
      
      {/* 2. Add the decorative shape Image component */}
      <Image
        // IMPORTANT: Replace 'price-shape.png' with your actual image file name
        src="/images/price-shape.png" 
        alt="Decorative background shape"
        fill
        style={{ objectFit: "contain", objectPosition: "bottom right" }}
        className="-z-0 opacity-40" // Use z-index to place it behind content
      />
      
      {/* 3. Make the section itself transparent and ensure it's in front of the shape */}
      <section className="relative z-10 py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-green-600 font-medium mb-2">[ What we offer ]</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Price Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our prices are simple and affordable which are easy on pocket in comparison with the high street prices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard
              icon={FaTshirt}
              title="Standard Package"
              description="50 Clothes Per Month"
              features={["4 T-Shirts", "1 Pairs of Jeans", "3 Button-Down Shirts", "1 Pair of Shorts", "7 Pairs of Underwear", "6 Pairs of Socks", "1 Towel", "1 Set of Sheets"]}
              price="$349.00"
            />
            <PackageCard
              icon={FaHandsWash}
              title="Enterprise Package"
              description="60 Clothes Per Month"
              features={["4 T-Shirts", "2 Pairs of Jeans", "4 Button-Down Shirts", "2 Pair of Shorts", "8 Pairs of Underwear", "6 Pairs of Socks", "2 Towel", "2 Set of Sheets"]}
              price="$399.00"
              isFeatured={true}
            />
            <PackageCard
              icon={MdIron}
              title="Premium Package"
              description="80 Clothes Per Month"
              features={["6 T-Shirts", "3 Pairs of Jeans", "4 Button-Down Shirts", "2 Pair of Shorts", "9 Pairs of Underwear", "8 Pairs of Socks", "2 Towel", "2 Set of Sheets"]}
              price="$449.00"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepagePricePackages;