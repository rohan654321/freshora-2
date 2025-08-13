"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaTshirt, FaHandsWash, FaTools, FaBroom } from "react-icons/fa";
import { MdIron } from "react-icons/md";

const services = [
  {
    title: "Carpet Cleaning",
    description: "Deep cleaning for carpets with eco-friendly products.",
    image: "/images/box02-img01.webp",
    icon: <FaBroom className="text-white text-lg" />,
  },
  {
    title: "Laundry Service",
    description: "Fast and fresh laundry with gentle fabric care.",
    image: "/images/img08.jpg",
    icon: <FaHandsWash className="text-white text-lg" />,
  },
  {
    title: "Dry Cleaning",
    description: "Premium dry cleaning for your delicate garments.",
    image: "/images/img01.jpg",
    icon: <FaTshirt className="text-white text-lg" />,
  },
  {
    title: "Ironing Service",
    description: "Perfectly pressed clothes, ready to wear.",
    image: "/images/layout01-img01.jpg",
    icon: <MdIron className="text-white text-lg" />,
  },
  {
    title: "Shoe Repair",
    description: "Expert shoe repairs for all styles and materials.",
    image: "/images/download.jfif",
    icon: <FaTools className="text-white text-lg" />,
  },
];

export default function ServicesSlider() {
  return (
    <section className="py-10 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h4 className="text-green-600 font-medium mb-2 text-sm sm:text-base">
            [ Our Services ]
          </h4>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Dry Cleaning & Laundry, <br /> Free Delivery
          </h1>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation inside slider */}
          <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/70 rounded shadow hover:bg-green-600 hover:text-white transition">
            <IoChevronBack size={18} />
          </button>
          <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/70 rounded shadow hover:bg-green-600 hover:text-white transition">
            <IoChevronForward size={18} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
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
                <div
                  className="relative h-72 overflow-hidden group"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

                  {/* Text at bottom */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-green-700 w-10 h-10 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-200 after:transition-all after:duration-300 hover:after:w-full">
  {service.title}
</h3>
                    </div>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Outside */}
        <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
      </div>
    </section>
  );
}
