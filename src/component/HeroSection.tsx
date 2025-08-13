"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    image: "/images/slider1.webp",
    alt: "A woman smiling while holding a basket of fresh laundry",
    subtitle: "Free Pickup & Delivery",
    title: "Professional Laundry & Dry Cleaning",
    description:
      "We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics.",
    buttonText: "Schedule a Pickup",
    buttonLink: "#",
  },
  {
    image: "/images/img07.jpg",
    alt: "A laundry professional handing clean clothes to a customer",
    subtitle: "25+ Years of Experience",
    title: "Quality Care For Your Clothes",
    description:
      "We maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!",
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/img09.jpg",
    alt: "A woman professionally steaming a blue shirt",
    subtitle: "Perfectly Pressed, Every Time",
    title: "Expert Ironing Services",
    description:
      "Our professional ironing service ensures your garments are wrinkle-free, crisp, and ready to wear for any occasion. We handle everything with precision and care.",
    buttonText: "View Pricing",
    buttonLink: "/pricing",
  },
  {
    image: "/images/img07.jpg",
    alt: "A happy customer receiving their clean clothes",
    subtitle: "Your Happiness, Guaranteed",
    title: "100% Customer Satisfaction",
    description:
      "We pride ourselves on delivering a service that exceeds expectations. If you're not completely satisfied with the results, we promise to make it right.",
    buttonText: "Read Testimonials",
    buttonLink: "/testimonials",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [preloaderVisible, setPreloaderVisible] = useState(true)

  useEffect(() => {
    const preloaderTimer = setTimeout(() => setPreloaderVisible(false), 500)
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      clearTimeout(preloaderTimer)
      clearInterval(slideInterval)
    }
  }, [])

  return (
    <section
      id="js-mainSlider"
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-gray-800 overflow-hidden"
    >
      {/* Preloader */}
      {preloaderVisible && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-[100] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          <span className="text-green-600">Freshora</span>Laundry
        </div>
      )}

      {/* Full-width Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0"}`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex h-full items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Dynamic Text Content with Staggered Animations */}
        <div className="max-w-xl lg:max-w-2xl text-white text-center sm:text-left">
          <p
            className={`font-semibold text-sm sm:text-base lg:text-xl mb-2 sm:mb-4 text-gray-200 transition-all duration-700 ease-out ${currentSlide !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "200ms" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <h2
            className={`font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 transition-all duration-700 ease-out ${currentSlide !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "400ms", color: "#52b765" }}
          >
            {slides[currentSlide].title}
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-relaxed mx-auto sm:mx-0 mb-6 sm:mb-8 max-w-lg lg:max-w-xl transition-all duration-700 ease-out ${currentSlide !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "600ms", color: "#f0f0f0" }}
          >
            {slides[currentSlide].description}
          </p>
          <div
            className={`transition-all duration-700 ease-out ${currentSlide !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              href={slides[currentSlide].buttonLink}
              className="group relative inline-block py-3 px-6 sm:py-3.5 sm:px-8 lg:px-9 font-bold no-underline overflow-hidden transition-colors duration-400 rounded-md text-sm sm:text-base"
              style={{
                color: "#fff",
                border: "2px solid #52b765",
              }}
            >
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-full">
                {slides[currentSlide].buttonText}
              </span>
              <div
                className="absolute top-full left-0 w-full py-3 sm:py-3.5 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-full"
                style={{ backgroundColor: "#52b765", color: "#fff" }}
              >
                {slides[currentSlide].buttonText}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-green-600 scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
