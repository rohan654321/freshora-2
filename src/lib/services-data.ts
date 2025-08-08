export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  pricing: {
    basic: { price: string; description: string };
    premium: { price: string; description: string };
  };
  duration: string;
  rating: number;
  reviews: number;
  process: string[];
  faq: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 1,
    slug: 'laundry-services',
    title: 'Laundry Services',
    description: 'Let us pick up and drop off your laundry, quick & cost-efficient service with flexible plans.',
    fullDescription: 'Our comprehensive laundry service includes washing, drying, and folding your clothes with premium detergents and fabric softeners. We handle everything from everyday wear to delicate fabrics with specialized care techniques. Our professional team ensures your clothes are cleaned to perfection and returned fresh and neatly folded.',
    image: '/images/laundry.jpg',
    gallery: [
      '/images/laundry-1.jpg',
      '/images/laundry-2.jpg',
      '/images/laundry-3.jpg'
    ],
    features: [
      'Free pickup and delivery within 24 hours',
      'Eco-friendly detergents and fabric softeners',
      'Same-day service available for urgent orders',
      'Professional stain removal treatment',
      'Clothes sorted by fabric type and color',
      '24/7 customer support and order tracking'
    ],
    pricing: {
      basic: { price: '$15/load', description: 'Standard wash, dry, and fold service' },
      premium: { price: '$25/load', description: 'Premium detergents, fabric softener, and express service' }
    },
    duration: '24-48 hours',
    rating: 5,
    reviews: 127,
    process: [
      'Schedule pickup online or by phone',
      'We collect your laundry from your doorstep',
      'Professional washing and drying process',
      'Quality check and neat folding',
      'Free delivery back to your location'
    ],
    faq: [
      {
        question: 'What items can you wash?',
        answer: 'We wash all types of clothing including shirts, pants, dresses, bedding, and towels. We handle delicate items with special care.'
      },
      {
        question: 'Do you provide same-day service?',
        answer: 'Yes, same-day service is available for orders placed before 10 AM, subject to availability.'
      }
    ]
  },
  {
    id: 2,
    slug: 'dry-cleaning-services',
    title: 'Dry Cleaning Services',
    description: 'Stubborn stains? No problem. We ensure your clothes look as good as new.',
    fullDescription: 'Professional dry cleaning service using advanced solvents and techniques to remove tough stains and preserve fabric quality. Perfect for suits, dresses, and delicate garments that require special care. Our experienced team handles luxury fabrics with the utmost care.',
    image: '/images/dry-clean.jpg',
    gallery: [
      '/images/dry-clean-1.jpg',
      '/images/dry-clean-2.jpg',
      '/images/dry-clean-3.jpg'
    ],
    features: [
      'Professional stain removal for all fabric types',
      'Garment pressing and steaming included',
      'Fabric protection treatment available',
      'Minor repairs and alterations included',
      'Eco-friendly dry cleaning solvents',
      'Quality guarantee on all services'
    ],
    pricing: {
      basic: { price: '$8/item', description: 'Standard dry cleaning service' },
      premium: { price: '$15/item', description: 'Premium service with fabric protection and minor repairs' }
    },
    duration: '2-3 days',
    rating: 5,
    reviews: 89,
    process: [
      'Bring items to our location or schedule pickup',
      'Professional inspection and stain identification',
      'Dry cleaning with appropriate solvents',
      'Professional pressing and finishing',
      'Quality check and packaging'
    ],
    faq: [
      {
        question: 'What items require dry cleaning?',
        answer: 'Suits, dresses, silk items, wool garments, and items with "Dry Clean Only" labels.'
      },
      {
        question: 'Can you remove all types of stains?',
        answer: 'We can remove most stains, but results depend on the stain type, fabric, and how long the stain has been set.'
      }
    ]
  },
  // Add more services data here...
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.slug === slug);
};
