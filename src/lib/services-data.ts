export interface Service {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  price: string
  duration: string
  rating: number
  reviews: number
  image: string
}

const services: Service[] = [
  {
    id: "1",
    slug: "laundry-services",
    title: "Laundry Services",
    description: "Professional washing and folding for all your clothing needs",
    fullDescription:
      "Our comprehensive laundry service handles all types of clothing with care. We use premium detergents and fabric softeners to ensure your clothes come back fresh, clean, and perfectly folded. Our experienced team treats each item with attention to detail, from delicate fabrics to everyday wear.",
    price: "Starting from $3",
    duration: "24-48 hours",
    rating: 5,
    reviews: 127,
    image: "/laundry-service.png",
  },
  {
    id: "2",
    slug: "dry-cleaning-services",
    title: "Dry Cleaning Services",
    description: "Expert dry cleaning for delicate and formal garments",
    fullDescription:
      "Our professional dry cleaning service specializes in handling delicate fabrics, formal wear, and garments that require special care. Using eco-friendly solvents and advanced cleaning techniques, we ensure your suits, dresses, and fine clothing maintain their quality and appearance. Perfect for business attire, evening wear, and specialty items.",
    price: "Starting from $8",
    duration: "2-3 days",
    rating: 5,
    reviews: 89,
    image: "/placeholder-fgfpq.png",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
