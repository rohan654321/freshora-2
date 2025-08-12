"use client";

import React, { useEffect, useState } from "react"; // <-- FIX: Added React import
import Image from "next/image";

const steps = [
    {
        label: "Schedule Pickup",
        img: "/images/homework1.png", // Ensure these images are in your `public/Assets` folder
    },
    {
        label: "We Collect",
        img: "/images/homework2.png",
    },
    {
        label: "We Clean",
        img: "/images/homework3.png",
    },
    {
        label: "We Deliver",
        img: "/images/homework4.png",
    },
];

export default function HowWeWorkSection() {
    const [activeStep, setActiveStep] = useState(0);

    // This effect cycles through the steps automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000); // Increased interval for a smoother animation
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
                {/* Left Side: Text Content */}
                <div>
                    <p className="text-green-600 font-semibold mb-2">
                        [ Get Your Clothes Collected & Delivered ]
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How We Work
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Our Service is dedicated to making your life easier by providing
                        pick up laundry service. Give yourself one less thing to worry about
                        and try our residential wash and fold service that includes pick up
                        and delivery.
                        <br />
                        <br />
                        We have been in the laundry business for more than 12 years and
                        would love to earn your business. Try us today and save $10 Off
                        your first laundry service of 20 pounds or more.
                    </p>
                </div>

                {/* Right Side: Animated Steps */}
                <div className="flex flex-col items-center">
                    {/* Image Display */}
                    <div className="mb-8 h-[220px] w-[320px] flex items-center justify-center">
                         <Image
                            key={activeStep} // Add key to re-trigger animation on change
                            src={steps[activeStep].img}
                            alt={steps[activeStep].label}
                            width={320}
                            height={220}
                            className="rounded-lg object-cover animate-fade-in"
                         />
                    </div>

                    {/* Stepper Navigation */}
                    <div className="flex justify-between items-start w-full max-w-md">
                        {steps.map((step, idx) => (
                            // Use React.Fragment to render step and connector as siblings
                            <React.Fragment key={idx}>
                                {/* Step Circle and Label */}
                                <div className="flex flex-col items-center text-center w-20">
                                    <div
                                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                                            idx <= activeStep
                                                ? "bg-green-500 border-green-500 text-white"
                                                : "bg-white border-gray-300 text-gray-400"
                                        }`}
                                    >
                                        {idx + 1}
                                    </div>
                                    <span className="text-sm mt-2 text-gray-700 font-medium">
                                        {step.label}
                                    </span>
                                </div>

                                {/* Dotted Line Connector (rendered between steps) */}
                                {idx < steps.length - 1 && (
                                    <div className={`flex-auto border-t-2 border-dotted mt-5 transition-colors duration-500 ${
                                        idx < activeStep ? 'border-green-500' : 'border-gray-300'
                                    }`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
