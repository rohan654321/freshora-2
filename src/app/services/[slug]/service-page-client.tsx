"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, MapPin, Clock, Mail, Phone, CheckCircle } from "lucide-react"
// import { getServiceBySlug } from "../../../lib/services-data"
import type { Service } from "../../../lib/services-data"

interface ServiceItem {
  id: string
  name: string
  price: number
  description: string
}

const serviceCategories = [
  { name: "Laundry Services", slug: "laundry-services", active: true },
  { name: "Dry Cleaning Services", slug: "dry-cleaning-services", active: false },
  { name: "Express Laundry Services", slug: "express-laundry-services", active: true },
  { name: "Shoe & Bag Spa", slug: "shoe-bag-spa", active: false },
  { name: "Luxury Shoe Cleaning", slug: "luxury-shoe-cleaning", active: false },
  { name: "Commercial Laundry Service", slug: "commercial-laundry-service", active: false },
  { name: "Curtain Cleaning Service", slug: "curtain-cleaning-service", active: false },
  { name: "Carpet Cleaning Service", slug: "carpet-cleaning-service", active: false },
  { name: "Soft Toy Cleaning Service", slug: "soft-toy-cleaning-service", active: false },
]

const serviceFeatures = [
  "Salons & Spas",
  "Restaurants and Caterers",
  "Religious Organizations",
  "Daycare centers",
  "Assisted Living / Nursing Homes",
  "Hotels & Motels",
  "Nail Salons",
  "Athletic Facilities / Gyms",
]

export default function ServicePageClient({
  slug,
  service,
}: {
  slug: string
  service: Service
}) {
//   const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

    return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
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
    <Link href="/services" className="hover:text-green-400">
      Services
    </Link>
    <span className="px-2">/</span>
    <span className="text-green-400">Single Service</span>
  </nav>

  <h1 className="text-4xl md:text-5xl font-bold text-white">Single Service</h1>
</div>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-0">
                {serviceCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/services/${category.slug}`}
                    className={`block px-6 py-4 border-b border-gray-200 last:border-b-0 transition-colors ${
                      category.slug === slug ? "bg-green-600 text-white" : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Service Image */}
              <div className="lg:col-span-2">
                <img
                  src="/images/layout01-img01.jpg?height=400&width=600&text=Person+Loading+Washing+Machine"
                  alt="Laundry Service"
                  className="w-full h-64 lg:h-80 object-cover  shadow-lg"
                />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Contacts</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-green-600 mt-1" />
                        <div className="text-sm">
                          <p className="text-gray-600">8494 Signal Hill Road</p>
                          <p className="text-gray-600">Manassas, VA, 20110</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-green-600" />
                        <div className="text-sm">
                          <p className="text-gray-600">Mon-Fri 08:00 AM - 05:00 PM</p>
                          <p className="text-gray-600">Sat-Sun 10:00 AM - 4:00 PM</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-green-600" />
                        <p className="text-sm text-gray-600">info@prolaundrysite.com</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-green-600" />
                        <p className="text-sm text-gray-600">1 (800) 765-43-21</p>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Schedule a Pickup</Button>
                    <Link href={`/services/${slug}/orders`}>
                      <Button
                        variant="outline"
                        className="w-full mt-2 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        Get the Service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service Description */}
            <div className="mt-8 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="border-l-4 border-green-600 pl-4 mb-6">
                    <h4 className="text-green-600 font-medium mb-2">What we offer</h4>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Laundry Services</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Laundry&apos;s Wash and Fold, also called Fluff and Fold, or simply Drop Off Laundry, is the perfect
                      solution to your laundry needs as a busy parent, professional, senior citizen or student. Use drop
                      off laundry and free more of your time and energy to work, play, or just relax. Let wash, dry, and
                      fold your clothes for you!
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Wash and Fold Laundry Service Delivered to Your Home
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Get the very best in wash and fold or fluff and fold laundry service from the dry cleaning and
                    laundry experts. We offer one-day or same-day laundry service with a 100% satisfaction guarantee to
                    customers in our service areas, combining the excellence of our premium dry cleaning with the
                    ultimate convenience in laundry service and delivery. Enjoy free home pickup and delivery for your
                    wash and fold laundry items, or use a safe and secure 24-hour drop box located at our stores and
                    lockers to drop off your fluff and fold laundry whenever it&apos;s convenient for you. Our Laundry
                    Clients Include:
                  </p>

                  {/* Service Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {serviceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Images */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <img
                      src="/images/img09.jpg?height=200&width=300&text=Ironing+Service"
                      alt="Ironing Service"
                      className="w-full h-48 object-cover"
                    />
                    <img
                      src="/images/img11.jpg?height=200&width=300&text=Hanging+Clothes"
                      alt="Hanging Clothes"
                      className="w-full h-48 object-cover "
                    />
                  </div>

                  {/* How It Works Section */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">How Wash and Fold Works</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      What is Wash and Fold? Sometimes referred to as laundry service or fluff and fold, full-service
                      wash and fold is our approach laundry service. When your garments don&apos;t need our dry cleaning
                      services, wash and fold is your best solution to clean clothes. Your clothes will last longer and
                      stay brighter.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Simply use one of our many convenient drop-off or pickup services, tell us any specific
                      instructions for your garments, and well take care of the rest. You can pick it up from there! We
                      use state-of-the-art equipment and the best detergents and fabric softeners to ensure your clothes
                      are cleaned properly and thoroughly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Ask Your Question</h3>

                    <form className="space-y-4">
                      <Input placeholder="Your name" />
                      <Input type="email" placeholder="E-mail" />
                      <Input placeholder="Phone" />
                      <Textarea placeholder="Your question" className="min-h-[100px]" />
                      <Button className="w-full bg-green-600 hover:bg-green-700">Ask Question</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}
