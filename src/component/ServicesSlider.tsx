"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Shirts Service",
    desc: "Washed and Pressed",
    price: "$2.00",
    icon: "/icons/shirt.png",
  },
  {
    id: 2,
    name: "Day Dress Service",
    desc: "Dry Clean",
    price: "$10.50",
    icon: "/icons/dress.png",
  },
  {
    id: 3,
    name: "Dry Cleaning",
    desc: "Wash, Dry and Fold",
    price: "$2.00",
    icon: "/icons/hanger.png",
  },
  {
    id: 4,
    name: "Bedding",
    desc: "Bed Set (Wash and Press)",
    price: "$10.50",
    icon: "/icons/bed.png",
  },
  {
    id: 5,
    name: "Blanket Service",
    desc: "Washed and Pressed",
    price: "$25.00",
    icon: "/icons/blanket.png",
  },
  {
    id: 6,
    name: "Curtains Service",
    desc: "Washed and Pressed",
    price: "$22.00",
    icon: "/icons/curtains.png",
  },
  {
    id: 7,
    name: "Ironing Service",
    desc: "Iron and Fold",
    price: "$3.00",
    icon: "/icons/iron.png",
  },
  {
    id: 8,
    name: "Repairs & Alterations",
    desc: "Simple Sewing",
    price: "$12.00",
    icon: "/icons/needle.png",
  },
];

export default function ServiceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-center text-green-600 font-semibold">
        [ Affordable Prices ]
      </h2>
      <h1 className="text-center text-3xl font-bold mb-3">
        Our Dry Cleaning & Laundry Prices
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Our prices are simple and affordable which are easy on pocket in
        comparison with the high street prices
      </p>

      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="px-3">
            <div className="group relative bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-4 transition-all duration-300 group-hover:opacity-0">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={64}
                  height={64}
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-center">
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 text-center">
                {service.desc}
              </p>
              <p className="text-green-600 font-bold text-center mt-2">
                {service.price}
              </p>

              {/* Hover Button */}
              <button className="absolute bottom-0 left-0 right-0 bg-green-600 text-white py-2 rounded-b-lg transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
