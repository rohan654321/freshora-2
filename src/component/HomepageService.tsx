// components/HomepageServices.tsx

"use client";

import React from 'react';
import Slider, { type Settings } from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

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
    // Image paths updated to the /images/ format as requested
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

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="section-indent no-margin" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
            <div className="container-fluid">
                <div className="title-block text-center">
                    <div className="title-block__label">[ Our Services ]</div>
                    <h4 className="title-block__title">Dry Cleaning & Laundry,<br />Free Delivery</h4>
                </div>

                <Slider {...settings} className="services-carousel">
                    {services.map((service) => (
                        <div key={service.title} className="tt-item">
                            <Link href={service.link} className="imgbox-inner">
                                <div className="imgbox-inner__img">
                                    <div className="icon-wrapper">
                                        <service.icon className="service-icon" />
                                    </div>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={600}
                                        // 'layout' prop removed to align with modern Next.js
                                    />
                                </div>
                                <div className="imgbox-inner__description">
                                    <h4 className="imgbox-inner__title">{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomepageServices;