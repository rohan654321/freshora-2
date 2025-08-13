"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaTshirt, FaHandsWash, FaTools, FaBroom } from "react-icons/fa";
import { MdIron } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const services = [
  {
    title: "Carpet Cleaning",
    description: "Deep cleaning for carpets with eco-friendly products.",
    image: "/carpet.jpg",
    icon: <FaBroom className="text-white text-xl" />,
  },
  {
    title: "Laundry Service",
    description: "Fast and fresh laundry with gentle fabric care.",
    image: "/laundry.jpg",
    icon: <FaHandsWash className="text-white text-xl" />,
  },
  {
    title: "Dry Cleaning",
    description: "Premium dry cleaning for your delicate garments.",
    image: "/dryclean.jpg",
    icon: <FaTshirt className="text-white text-xl" />,
  },
  {
    title: "Ironing Service",
    description: "Perfectly pressed clothes, ready to wear.",
    image: "/ironing.jpg",
    icon: <MdIron className="text-white text-xl" />,
  },
  {
    title: "Shoe Repair",
    description: "Expert shoe repairs for all styles and materials.",
    image: "/shoe-repair.jpg",
    icon: <FaTools className="text-white text-xl" />,
  },
];

export default function ServicesSlider() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
                    <h4 className="text-green-600 font-medium mb-2 text-sm sm:text-base ">[ Our Services ]</h4>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Dry Cleaning & Laundry, <br /> Free Delivery</h1>
            </div>
        <Card className="shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="relative p-6">
            {/* Heading */}


            {/* Left Arrow */}
            <button
              className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white transition-colors"
            >
              <IoChevronBack size={20} />
            </button>

            {/* Right Arrow */}
            <button
              className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white transition-colors"
            >
              <IoChevronForward size={20} />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
            >
              {services.map((service, i) => (
                <SwiperSlide key={i}>
                  <div className="group bg-white rounded-lg overflow-hidden shadow transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:rotate-1 hover:scale-[0.98]">
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-60 object-cover"
                      />
                      {/* Green Icon */}
                      <div className="absolute -bottom-6 left-6 bg-green-700 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="pt-8 pb-6 px-6">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
