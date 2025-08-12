// components/HomepageServices.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Sparkles, WashingMachine, Shirt, Scissors, Footprints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    image: string;
    link: string;
    icon: LucideIcon;
}

const HomepageServices = () => {
    // Array order restored to the original sequence
    const services: Service[] = [
        {
            title: 'Carpet Cleaning',
            description: 'To keep carpet at peak performance, we recommend professional deep cleaning your carpet every 12 to 18 months.',
            image: '/images/img09.jpg',
            link: '/services/carpet-cleaning',
            icon: Sparkles,
        },
        {
            title: 'Laundry Services',
            description: 'Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.',
            image: '/images/img07.jpg',
            link: '/services/laundry',
            icon: WashingMachine,
        },
        {
            title: 'Dry Cleaning Services',
            description: 'SMU students and local residents love our reliable dry cleaning services for the fast, accurate, top quality results.',
            image: '/images/img08.jpg',
            link: '/services/dry-cleaning',
            icon: Shirt,
        },
        {
            title: 'Alterations & Repairs',
            description: 'We have expert seamstresses and tailors on staff to ensure we meet and exceed your fitting requirements.',
            image: '/images/img10.jpg',
            link: '/services/alterations',
            icon: Scissors,
        },
        {
            title: 'Steam Iron',
            description: 'These services are accomplished under the guidance of adroit personnel who have affluent industry proficiency.',
            image: '/images/img11.jpg',
            link: '/services/steam-iron',
            icon: Shirt,
        },
        {
            title: 'Shoes Cleaning',
            description: 'We use premium cleaning products and standardized processes to take care of your shoes and give them refreshed look.',
            image: '/images/img12.jpg',
            link: '/services/shoes-cleaning',
            icon: Footprints,
        },
    ];

    return (
        <section className="py-16 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="text-green-600 font-semibold mb-2">[ Our Services ]</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Dry Cleaning & Laundry,<br />Free Delivery</h2>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.title}>
                            <Link href={service.link} className="group block relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="relative w-full h-80">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                {/* Overlay for content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                                            <service.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </div>
                                    <p className="text-sm opacity-90 leading-relaxed line-clamp-2">{service.description}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomepageServices;