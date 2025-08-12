"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Poppins } from "next/font/google"
import { FaTshirt, FaHandsWash, FaBed } from "react-icons/fa"
import { MdIron } from "react-icons/md"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ShoppingCart, ClipboardList, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const ServiceBanner: React.FC = () => {
  return (
    <div
      className="relative h-64 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/modern-office-laundry.png?height=400&width=1200&text=Laundry+Machines+Background')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-white mb-4">
          <Link href="/" className="hover:text-green-400">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/pricing" className="hover:text-green-400">
            Prices
          </Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-white">Prices</h1>
      </div>
    </div>
  )
}

interface ServicePriceCardProps {
  icon: React.ElementType
  title: string
  price: string
  description: string
}

const ServicePriceCard: React.FC<ServicePriceCardProps> = ({ icon: Icon, title, price, description }) => {
  return (
<Card className="group relative flex flex-col items-center justify-between p-6 text-center h-[280px] transition-all duration-500 hover:scale-105 bg-white overflow-hidden shadow-none border-none">
  <div className="flex flex-col items-center justify-center flex-1 space-y-4 transition-all duration-500 group-hover:space-y-2">
    {/* Icon that moves completely out of view on hover */}
    <div className="bg-green-100 p-4 rounded-full transition-all duration-500 group-hover:-translate-y-20 group-hover:opacity-0">
      <Icon size={40} className="text-green-600" />
    </div>

    {/* Text content that moves up to fill icon space */}
    <div className="space-y-2 transition-all duration-500 group-hover:-translate-y-8">
      <h3 className="text-lg font-bold text-gray-800 leading-tight">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-2xl font-bold text-green-600">{price}</p>
    </div>
  </div>

  {/* Small Order Now button that appears at bottom */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-4">
    <button className="px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md">
      Order Now
    </button>
  </div>
</Card>

  )
}

const ServiceCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  const services = [
    { icon: FaTshirt, title: "Shirts Service", description: "Washed and Pressed", price: "$2.00" },
    { icon: FaHandsWash, title: "Day Dress Service", description: "Dry Clean", price: "$10.50" },
    { icon: MdIron, title: "Dry Cleaning", description: "Wash, Dry and Fold", price: "$2.00" },
    { icon: FaBed, title: "Bedding", description: "Bed Set (Wash and Press)", price: "$10.50" },
  ]

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4)
      else if (window.innerWidth >= 768) setCardsToShow(2)
      else setCardsToShow(1)
    }

    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const maxSlide = Math.max(0, services.length - cardsToShow)

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / cardsToShow}%)`,
            width: `${(services.length * 100) / cardsToShow}%`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="px-4" style={{ width: `${100 / services.length}%` }}>
              <ServicePriceCard {...service} />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-green-50 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-6 w-6 text-green-600" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide >= maxSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-green-50 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-6 w-6 text-green-600" />
        </button>

        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface PackageCardProps {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  price: string
  originalPrice?: string
  isFeatured?: boolean
}

const PackageCard: React.FC<PackageCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  originalPrice,
  isFeatured,
}) => {
  const [isFolded, setIsFolded] = useState(false)

  return (
<Card
  className={`group relative flex flex-col cursor-pointer hover:shadow-none transition-all duration-500 overflow-hidden`}
  onMouseEnter={() => setIsFolded(true)}
  onMouseLeave={() => setIsFolded(false)}
  style={{
    border: "none",        // removes border
    boxShadow: "none",     // removes shadow
  }}
>
  <div
    className="transition-all duration-500 ease-in-out"
    style={{
      height: isFolded ? "400px" : "600px", // increased heights
    }}
  >
    <CardContent className="p-8 flex flex-col h-full relative">
      <div className="flex flex-col items-center text-center mb-6">
        <div
          className={`p-4 rounded-full mb-4 ${isFeatured ? "bg-green-600 text-white" : "bg-green-100 text-green-600"}`}
        >
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-green-600 font-medium text-sm">{description}</p>
      </div>

      <div
        className={`transition-all duration-500 ${
          isFolded ? "opacity-0 h-0 overflow-hidden" : "opacity-100 flex-1 mb-6"
        } flex flex-col items-center text-center`}
      >
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {isFolded && (
        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <div className="w-full h-px bg-gray-300"></div>
          <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md">
            Order Now
          </button>
        </div>
      )}

      <div className="text-center pt-4 border-t border-gray-100 mt-auto">
        {originalPrice && <p className="text-lg text-gray-500 line-through mb-2">{originalPrice}</p>}
        <p className="text-3xl font-bold text-gray-900">{price}</p>
      </div>
    </CardContent>
  </div>
</Card>

  )
}

const mostPopularItems = [
  { item: "Shirt (Launder and Press)", price: "$3.00" },
  { item: "Shirt (Dry Clean)", price: "$5.00" },
  { item: "Blouse", price: "$6.00" },
  { item: "Coat", price: "$18.00" },
  { item: "Dress", price: "$12.00" },
]

const fullApparelList1 = [
  { item: "Pants", price: "$6.00" },
  { item: "Polo", price: "$6.00" },
  { item: "Sport Jacket", price: "$6.00" },
  { item: "Sweater", price: "$6.00" },
  { item: "Suit (Jacket + Pants)", price: "$12.00" },
]

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("popular")

  return (
    <>
      <ServiceBanner />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className={`text-green-600 font-medium mb-4 ${poppins.className}`}>[ Affordable Prices ]</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Dry Cleaning & Laundry Prices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our prices are simple and affordable which are easy on pocket in comparison with the high street prices
            </p>
          </div>

          <div className="mb-20">
            <ServiceCarousel />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Full Price Table</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Laundry service pricing is volume based. Dry cleaning is priced by item type.
              <br />
              Give us a call to review pricing and services today!
            </p>
          </div>

          <Card className="mb-20">
            <CardContent className="p-8">
              <Tabs defaultValue="popular" onValueChange={(val) => setActiveTab(val)} className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 bg-transparent gap-0 p-0">
                    {[
                      { value: "popular", label: "Most Popular Items" },
                      { value: "full", label: "Full Apparel List" },
                      { value: "other", label: "Full Apparel List" },
                    ].map((tab, index) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className={`
                          px-8 py-4 text-base font-bold border-2 border-gray-300 min-w-[200px] h-[60px]
                          ${index === 0 ? "rounded-l-lg" : index === 2 ? "rounded-r-lg" : ""}
                          ${
                            activeTab === tab.value
                              ? "bg-green-500 text-black border-green-500 shadow-lg"
                              : "bg-white text-gray-700 hover:bg-green-500 hover:text-black hover:border-green-500"
                          }
                          transition-all duration-300 transform hover:scale-105
                        `}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <TabsContent value="popular">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="space-y-1">
                      {mostPopularItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                          <span className="text-gray-700 text-sm">{item.item}</span>
                          <span className="font-semibold text-gray-800">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {fullApparelList1.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                          <span className="text-gray-700 text-sm">{item.item}</span>
                          <span className="font-semibold text-gray-800">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="space-y-1">
                      {fullApparelList1.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                          <span className="text-gray-700 text-sm">{item.item}</span>
                          <span className="font-semibold text-gray-800">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {mostPopularItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                          <span className="text-gray-700 text-sm">{item.item}</span>
                          <span className="font-semibold text-gray-800">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="other">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="space-y-1">
                      {[...mostPopularItems, ...fullApparelList1].slice(0, 5).map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                          <span className="text-gray-700 text-sm">{item.item}</span>
                          <span className="font-semibold text-gray-800">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {[...mostPopularItems, ...fullApparelList1].slice(5).map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                          <span className="text-gray-700 text-sm">{item.item}</span>
                          <span className="font-semibold text-gray-800">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center mb-16">
            <h4 className={`text-green-600 font-medium mb-4 ${poppins.className}`}>[ What we offer ]</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Price Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our prices are simple and affordable which are easy on pocket
              <br />
              in comparison with the high street prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard
              icon={ShoppingCart}
              title="Standard Package"
              description="80 Clothes Per Month"
              features={[
                "4 T-Shirts",
                "1 Pair of Jeans",
                "3 Button/Down Shirts",
                "1 Pair of Shorts",
                "7 Pairs of Underwear",
                "6 Pairs of Socks",
                "1 Towel",
                "1 Set of Sheets",
              ]}
               originalPrice="$349.00"
              price="$349.00"
            />

            <PackageCard
              icon={ClipboardList}
              title="Enterprise Package"
              description="80 Clothes Per Month"
              features={[
                "4 T-Shirts",
                "2 Pairs of Jeans",
                "4 Button/Down Shirts",
                "2 Pair of Shorts",
                "8 Pairs of Underwear",
                "6 Pairs of Socks",
                "2 Towel",
                "2 Set of Sheets",
              ]}
               originalPrice="$399.00"
              price="$399.00"
            />

            <PackageCard
              icon={Zap}
              title="Premium Package"
              description="80 Clothes Per Month"
              features={[
                "6 T-Shirts",
                "3 Pairs of Jeans",
                "6 Button/Down Shirts",
                "3 Pair of Shorts",
                "9 Pairs of Underwear",
                "8 Pairs of Socks",
                "2 Towel",
                "3 Set of Sheets",
              ]}
              originalPrice="$449.00"
              price="$449.00"
              isFeatured={true}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingSection
