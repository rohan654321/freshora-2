"use client"

import type React from "react"
import { useState } from "react"
import { Poppins } from "next/font/google"
import { FaTshirt, FaHandsWash, FaTools } from "react-icons/fa"
import { MdIron } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})
interface ServiceBannerProps{

}
const ServiceBanner:React.FC<ServiceBannerProps> = () =>{
  return(
             <div className="relative h-[350px] md:h-[420px] w-full overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content Wrapper */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-8 md:px-20 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/"
              className="px-4 py-1 rounded-md text-sm hover:bg-white/20 transition border-none"
            >
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href=""
              className="px-4 py-1 rounded-md text-sm hover:bg-white/20 transition border-none"
            >
              Price
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Prices</h1>
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
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
    </>
  )
}

interface PackageCardProps {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  price: string
  isFeatured?: boolean
}

const PackageCard: React.FC<PackageCardProps> = ({ icon: Icon, title, description, features, price, isFeatured }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`relative p-6 text-center overflow-hidden group cursor-pointer h-[450px] flex flex-col justify-between ${
        isFeatured ? "border-2 border-green-600 shadow-lg" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Content */}
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

      {/* Hover Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-white ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <Icon size={60} className="text-green-600 mb-6" /> {/* Larger icon */}
        <Button className="w-3/4 bg-green-600 hover:bg-green-700">Order Now</Button>
      </div>
    </Card>
  )
}

const popularItems = [
  { item: "Aprons", price: "$10.00" },
  { item: "Area Covers", price: "$28.00" },
  { item: "Bed Skirt", price: "$24.00" },
  { item: "Bed Spread", price: "$30.00" },
  { item: "Blanket (Small)", price: "$20.00" },
  { item: "Blanket (Medium)", price: "$30.00" },
  { item: "Blanket (Large)", price: "$40.00" },
  { item: "Comforter (Twin/Full)", price: "$30.00" },
  { item: "Comforter (Queen/King)", price: "$40.00" },
  { item: "Comforter (Down)", price: "$45.00" },
  { item: "Cotton Blend", price: "$16.00" },
  { item: "Curtains", price: "$20.00" },
  { item: "Curtains (With Lining)", price: "$24.00" },
  { item: "Cushions", price: "$10.00" },
  { item: "Cushions Covers (Small)", price: "$8.00" },
  { item: "Cushions Covers (Large)", price: "$12.00" },
  { item: "Dog Bed (Small)", price: "$25.00" },
]

const fullApparelList = [
  { item: "Dog Bed (Large)", price: "$35.00" },
  { item: "Drapery", price: "$30.00" },
  { item: "Duvet Cover", price: "$25.00" },
  { item: "Napkins", price: "$4.00" },
  { item: "Pillows", price: "$7.00" },
  { item: "Pillow Cover", price: "$5.00" },
  { item: "Placemat", price: "$6.00" },
  { item: "Quilt", price: "$40.00" },
  { item: "Rug", price: "$15.00" },
  { item: "Sheets (Twin/Full)", price: "$18.00" },
  { item: "Sheets (Queen/King)", price: "$25.00" },
  { item: "Sleeping Bag", price: "$30.00" },
  { item: "Sofa Cover", price: "$35.00" },
  { item: "Table Cloth", price: "$15.00" },
  { item: "Table Cover", price: "$10.00" },
  { item: "Table Runner", price: "$8.00" },
  { item: "Arm/Leg Warmer", price: "$5.00" },
  { item: "Coat (Designer)", price: "$40.00" },
  { item: "Coat (Half)", price: "$9.00" },
  { item: "Coat Liner", price: "$9.00" },
  { item: "Dress (Children)", price: "$7.00" },
  { item: "Dress (Formal)", price: "$12.00" },
  { item: "Gloves", price: "$5.00" },
  { item: "Handkerchief", price: "$3.00" },
  { item: "Hat", price: "$5.00" },
  { item: "Jacket (Down)", price: "$18.00" },
  { item: "Jacket (Leather)", price: "$50.00" },
  { item: "Jeans", price: "$6.00" },
  { item: "Jumpsuit", price: "$18.00" },
  { item: "Lab Coat", price: "$8.00" },
  { item: "Raincoat", price: "$16.00" },
  { item: "Raincoat (With Lining)", price: "$20.00" },
  { item: "Robe", price: "$20.00" },
  { item: "Scarf", price: "$6.00" },
  { item: "Shawl", price: "$18.00" },
  { item: "Shirt (Children)", price: "$5.00" },
  { item: "Shirt (Designer)", price: "$6.00" },
  { item: "Shirt (Folded)", price: "$5.00" },
  { item: "Shirt (Tux)", price: "$6.00" },
  { item: "Shorts", price: "$6.00" },
  { item: "Skirt", price: "$6.00" },
  { item: "Sweater (Cashmere)", price: "$8.00" },
  { item: "Sweater (Heavy)", price: "$8.00" },
  { item: "Tie", price: "$6.00" },
  { item: "Vests", price: "$6.00" },
  { item: "Vests (Puffer)", price: "$9.00" },
]

const PricingSection = () => {
  // Split the lists into two halves for the two-column display
  const splitList = (list: typeof popularItems) => {
    const half = Math.ceil(list.length / 2)
    return [list.slice(0, half), list.slice(half)]
  }

  const [popularItemsLeft, popularItemsRight] = splitList(popularItems)
  const [fullApparelListLeft, fullApparelListRight] = splitList(fullApparelList)
  const [activeTab, setActiveTab] = useState("full");

  return (
    <>
    <ServiceBanner />
    <section className="py-16 bg-white">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section: Service Price Cards */}
        <div className="text-center mb-12">
          <h4 className={`text-green-600 font-medium mb-2 ${poppins.className}`}>[ Affordable Prices ]</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Dry Cleaning & Laundry Prices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our prices are simple and affordable, and we are using eco-product in comparison with the high street
            prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ServicePriceCard icon={FaTshirt} title="Blanket Service" description="Washed and Folded" price="$25.00" />
          <ServicePriceCard
            icon={FaHandsWash}
            title="Curtains Service"
            description="Washed and Folded"
            price="$22.00"
          />
          <ServicePriceCard icon={MdIron} title="Ironing Service" description="Washed and Folded" price="$3.00" />
          <ServicePriceCard icon={FaTools} title="Repairs & Alterations" description="Simple Sewing" price="$12.00" />
        </div>

        {/* Middle Section: Full Price Table */}
        <div className="text-center mb-12">
          <h4 className={`text-green-600 font-medium mb-2 ${poppins.className}`}>[ Our Service Prices ]</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Full Price Table</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Laundry service pricing is volume-based. Dry cleaning is priced by item type. Give us a call to receive
            pricing and services today!
          </p>
        </div>

        <Card className="mb-16">
          <CardContent className="p-6">
            <Tabs defaultValue="popular" className="w-full">
<Tabs
      defaultValue="full"
      onValueChange={(val) => setActiveTab(val)}
      className="w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <TabsList className="grid w-full grid-cols-3 md:w-auto bg-transparent gap-0 p-0">
          {[
            { value: "popular", label: "Most Popular Items" },
            { value: "full", label: "Full Apparel List" },
            { value: "other", label: "Full Apparel List" }, // duplicate label from screenshot
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`
                px-6 py-3 text-sm font-semibold border border-gray-200
                ${activeTab === tab.value
                  ? "bg-green-500 text-white"
                  : "bg-white text-black hover:bg-green-500 hover:text-white"
                }
                transition-colors duration-200
              `}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="popular">Popular items content...</TabsContent>
      <TabsContent value="full">Full apparel list content...</TabsContent>
      <TabsContent value="other">Other tab content...</TabsContent>
    </Tabs>

              <TabsContent value="popular">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    {popularItemsLeft.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-gray-800">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    {popularItemsRight.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-gray-800">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    {fullApparelListLeft.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-gray-800">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    {fullApparelListRight.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-gray-800">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Bottom Section: Price Packages */}
        <div className="text-center mb-12">
          <h4 className={`text-green-600 font-medium mb-2 ${poppins.className}`}>[ What we offer ]</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Price Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our prices are simple and affordable, and we are using eco-product in comparison with the high street
            prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Package */}
          <PackageCard
            icon={FaTshirt}
            title="Standard Package"
            description="80 Clothes Per Month"
            features={[
              "6 T-Shirts",
              "3 Pairs of Jeans",
              "4 Button/Denim Shirts",
              "2 Pairs of Shorts",
              "4 Pairs of Socks",
              "7 Towels",
              "1 Set of Blankets",
            ]}
            price="$349.00"
          />

          {/* Enterprise Package */}
          <PackageCard
            icon={FaHandsWash}
            title="Enterprise Package"
            description="80 Clothes Per Month"
            features={[
              "6 T-Shirts",
              "3 Pairs of Jeans",
              "4 Button/Denim Shirts",
              "2 Pairs of Shorts",
              "4 Pairs of Socks",
              "7 Towels",
              "1 Set of Blankets",
            ]}
            price="$399.00"
            isFeatured={true}
          />

          {/* Premium Package */}
          <PackageCard
            icon={MdIron}
            title="Premium Package"
            description="80 Clothes Per Month"
            features={[
              "6 T-Shirts",
              "3 Pairs of Jeans",
              "4 Button/Denim Shirts",
              "2 Pairs of Shorts",
              "4 Pairs of Socks",
              "7 Towels",
              "1 Set of Blankets",
            ]}
            price="$449.00"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default PricingSection
