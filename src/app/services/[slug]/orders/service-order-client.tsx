"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Plus, Minus, ShoppingCart } from "lucide-react"
import { useCart } from "../../../context/cart-context"
import type { Service } from "../../../../lib/services-data"

interface ServiceOrderClientProps {
  slug: string
  service: Service
}

interface ServiceItem {
  id: string
  name: string
  price: number
  description: string
}

const serviceItems = {
  "laundry-services": {
    men: [
      { id: "m1", name: "T-Shirts", price: 3, description: "Cotton t-shirts, polo shirts" },
      { id: "m2", name: "Shirts (Formal)", price: 5, description: "Dress shirts, business shirts" },
      { id: "m3", name: "Pants/Trousers", price: 6, description: "Casual pants, formal trousers" },
      { id: "m4", name: "Jeans", price: 7, description: "Denim jeans, casual wear" },
      { id: "m5", name: "Suits", price: 15, description: "Two-piece suits, blazers" },
      { id: "m6", name: "Underwear", price: 2, description: "Undergarments, socks" },
    ],
    women: [
      { id: "w1", name: "T-Shirts/Tops", price: 3, description: "Casual tops, blouses" },
      { id: "w2", name: "Dresses", price: 8, description: "Casual and formal dresses" },
      { id: "w3", name: "Pants/Jeans", price: 6, description: "Trousers, jeans, leggings" },
      { id: "w4", name: "Skirts", price: 5, description: "Mini, midi, maxi skirts" },
      { id: "w5", name: "Blouses", price: 6, description: "Formal and casual blouses" },
      { id: "w6", name: "Underwear/Lingerie", price: 2, description: "Undergarments, bras" },
    ],
    children: [
      { id: "c1", name: "T-Shirts", price: 2, description: "Kids casual t-shirts" },
      { id: "c2", name: "Pants/Shorts", price: 3, description: "Kids pants and shorts" },
      { id: "c3", name: "Dresses", price: 4, description: "Girls dresses" },
      { id: "c4", name: "School Uniforms", price: 5, description: "School shirts, pants" },
      { id: "c5", name: "Pajamas", price: 3, description: "Sleepwear, nightwear" },
      { id: "c6", name: "Underwear", price: 1, description: "Kids undergarments" },
    ],
  },
  "dry-cleaning-services": {
    men: [
      { id: "m1", name: "Suits", price: 20, description: "Two-piece business suits" },
      { id: "m2", name: "Blazers", price: 15, description: "Sport coats, blazers" },
      { id: "m3", name: "Dress Shirts", price: 8, description: "Formal dress shirts" },
      { id: "m4", name: "Ties", price: 5, description: "Neckties, bow ties" },
      { id: "m5", name: "Coats/Jackets", price: 25, description: "Winter coats, leather jackets" },
    ],
    women: [
      { id: "w1", name: "Dresses", price: 18, description: "Formal and cocktail dresses" },
      { id: "w2", name: "Blouses", price: 10, description: "Silk and delicate blouses" },
      { id: "w3", name: "Skirts", price: 12, description: "Formal and business skirts" },
      { id: "w4", name: "Coats", price: 30, description: "Winter coats, fur coats" },
      { id: "w5", name: "Evening Gowns", price: 35, description: "Formal evening wear" },
    ],
    children: [
      { id: "c1", name: "Formal Wear", price: 12, description: "Kids formal suits, dresses" },
      { id: "c2", name: "Coats", price: 15, description: "Kids winter coats" },
      { id: "c3", name: "School Blazers", price: 10, description: "School uniform blazers" },
    ],
  },
  "express-laundry-services": {
    men: [
      { id: "m1", name: "Express T-Shirts", price: 5, description: "Same-day t-shirt service" },
      { id: "m2", name: "Express Shirts", price: 8, description: "Same-day dress shirt service" },
      { id: "m3", name: "Express Pants", price: 9, description: "Same-day pants service" },
      { id: "m4", name: "Express Suits", price: 25, description: "Same-day suit service" },
    ],
    women: [
      { id: "w1", name: "Express Tops", price: 5, description: "Same-day top service" },
      { id: "w2", name: "Express Dresses", price: 12, description: "Same-day dress service" },
      { id: "w3", name: "Express Blouses", price: 9, description: "Same-day blouse service" },
      { id: "w4", name: "Express Skirts", price: 8, description: "Same-day skirt service" },
    ],
    children: [
      { id: "c1", name: "Express Kids Clothes", price: 4, description: "Same-day kids clothing" },
      { id: "c2", name: "Express Uniforms", price: 8, description: "Same-day school uniforms" },
    ],
  },
  "shoe-bag-spa": {
    men: [
      { id: "m1", name: "Leather Shoes", price: 35, description: "Premium leather shoe spa" },
      { id: "m2", name: "Sneakers", price: 25, description: "Designer sneaker cleaning" },
      { id: "m3", name: "Boots", price: 40, description: "Luxury boot restoration" },
      { id: "m4", name: "Leather Bags", price: 50, description: "Luxury leather bag spa" },
    ],
    women: [
      { id: "w1", name: "High Heels", price: 30, description: "Designer heel restoration" },
      { id: "w2", name: "Handbags", price: 45, description: "Luxury handbag spa treatment" },
      { id: "w3", name: "Boots", price: 35, description: "Fashion boot restoration" },
      { id: "w4", name: "Clutches", price: 25, description: "Evening clutch cleaning" },
    ],
    children: [
      { id: "c1", name: "Kids Shoes", price: 20, description: "Children's shoe spa" },
      { id: "c2", name: "School Bags", price: 15, description: "School bag cleaning" },
    ],
  },
  "luxury-shoe-cleaning": {
    men: [
      { id: "m1", name: "Designer Dress Shoes", price: 50, description: "Premium dress shoe care" },
      { id: "m2", name: "Luxury Sneakers", price: 40, description: "High-end sneaker restoration" },
      { id: "m3", name: "Italian Leather Shoes", price: 60, description: "Italian leather specialist care" },
    ],
    women: [
      { id: "w1", name: "Designer Heels", price: 45, description: "Luxury heel restoration" },
      { id: "w2", name: "Designer Flats", price: 35, description: "Premium flat shoe care" },
      { id: "w3", name: "Luxury Boots", price: 55, description: "High-end boot restoration" },
    ],
    children: [{ id: "c1", name: "Premium Kids Shoes", price: 25, description: "Luxury children's shoe care" }],
  },
  "soft-toy-cleaning-service": {
    men: [],
    women: [],
    children: [
      { id: "c1", name: "Small Stuffed Animals", price: 8, description: "Teddy bears, small plush toys" },
      { id: "c2", name: "Medium Stuffed Animals", price: 12, description: "Medium-sized plush toys" },
      { id: "c3", name: "Large Stuffed Animals", price: 18, description: "Large teddy bears, big plush toys" },
      { id: "c4", name: "Fabric Dolls", price: 10, description: "Cloth dolls and fabric toys" },
      { id: "c5", name: "Plush Pillows", price: 15, description: "Decorative plush pillows" },
    ],
  },
  "commercial-laundry-service": {
    men: [],
    women: [],
    children: [],
  },
  "curtain-cleaning-service": {
    men: [],
    women: [],
    children: [],
  },
  "carpet-cleaning-service": {
    men: [],
    women: [],
    children: [],
  },
}

export default function ServiceOrderClient({ slug, service }: ServiceOrderClientProps) {
  const { addToCart, getTotalItems } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  const items = serviceItems[slug as keyof typeof serviceItems] || { men: [], women: [], children: [] }

  const updateQuantity = (itemId: string, change: number) => {
    const newQuantity = Math.max(0, (quantities[itemId] || 0) + change)
    setQuantities((prev) => ({ ...prev, [itemId]: newQuantity }))
  }

  const handleAddToCart = (item: ServiceItem, category: string) => {
    const quantity = quantities[item.id] || 0
    if (quantity === 0) return

    addToCart(
      {
        id: `${slug}-${item.id}`,
        name: item.name,
        category: category,
        price: item.price,
        serviceType: service.title,
      },
      quantity,
    )

    // Reset quantity after adding to cart
    setQuantities((prev) => ({ ...prev, [item.id]: 0 }))
  }

  const ItemCard = ({ item, category }: { item: ServiceItem; category: string }) => {
    const quantity = quantities[item.id] || 0
    const totalAmount = item.price * quantity

    return (
      <Card className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h4 className="font-semibold text-lg">{item.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <div className="flex items-center gap-4">
              <p className="text-green-600 font-bold text-lg">${item.price}</p>
              {quantity > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">×</span>
                  <span className="text-gray-600">{quantity}</span>
                  <span className="text-gray-400">=</span>
                  <p className="text-blue-600 font-bold text-lg">${totalAmount.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, -1)} disabled={quantity === 0}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={() => handleAddToCart(item, category)}
            disabled={quantity === 0}
            className="bg-green-600 hover:bg-green-700"
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    )
  }

  // Check if service has items available for ordering
  const hasItems = items.men.length > 0 || items.women.length > 0 || items.children.length > 0

  if (!hasItems) {
    return (
      <div>
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
                Orders
              </Link>
              <span className="px-2">/</span>
              <span className="text-green-400">Orders</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white">Orders</h1>
          </div>
        </div>
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href={`/services/${slug}`}
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Service Details
            </Link>

            <Card className="text-center py-16">
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Requires Custom Quote</h2>
                <p className="text-gray-600 mb-6">
                  This service requires a personalized assessment and custom pricing. Please contact us directly to
                  schedule this service and receive a detailed quote.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">Schedule a Pickup</Button>
                  <Link href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Special handling for soft toy cleaning (only children's items)
  const isSoftToyService = slug === "soft-toy-cleaning-service"

  return (
    <div>
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
            <span className="text-green-400">Orders</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white">Orders</h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Link
              href={`/services/${slug}`}
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Service Details
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{service.title} - Order Items</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < service.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {service.rating}.0 ({service.reviews} reviews)
                    </span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {service.duration}
                  </Badge>
                </div>
              </div>

              {/* Cart Link */}
              {getTotalItems() > 0 && (
                <Link href="/cart">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View Cart ({getTotalItems()})
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Service Description */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Service Items by Category */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Select Items & Quantities</h2>

              {isSoftToyService ? (
                // Special layout for soft toy cleaning (only children's items)
                <div className="grid md:grid-cols-2 gap-4">
                  {items.children.map((item) => (
                    <ItemCard key={item.id} item={item} category="Toys" />
                  ))}
                </div>
              ) : (
                // Regular tabs layout for other services
                <Tabs defaultValue="men" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="men">Men&lsquo;s Items</TabsTrigger>
                    <TabsTrigger value="women">Women&apos;s Items</TabsTrigger>
                    <TabsTrigger value="children">Children&apos;s Items</TabsTrigger>
                  </TabsList>

                  <TabsContent value="men" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {items.men.map((item) => (
                        <ItemCard key={item.id} item={item} category="Men" />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="women" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {items.women.map((item) => (
                        <ItemCard key={item.id} item={item} category="Women" />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="children" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {items.children.map((item) => (
                        <ItemCard key={item.id} item={item} category="Children" />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
