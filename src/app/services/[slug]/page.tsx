import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, DollarSign, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import { getServiceBySlug } from '../../../lib/services-data';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {service.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
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
            <div className="flex gap-3">
              <Button className="bg-green-600 hover:bg-green-700">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img 
                src={service.image || "/placeholder.svg"} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-600 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <h3 className="text-xl font-bold">Pricing</h3>
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Basic</span>
                      <span className="text-xl font-bold text-green-600">
                        {service.pricing.basic.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{service.pricing.basic.description}</p>
                  </div>
                  <div className="border rounded-lg p-4 border-green-200 bg-green-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Premium</span>
                      <span className="text-xl font-bold text-green-600">
                        {service.pricing.premium.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{service.pricing.premium.description}</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
