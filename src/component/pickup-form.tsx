'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface PickupFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  serviceCategory: string
  specificService: string
  pickupDate: string
  deliveryDate: string
  comment: string
}

const serviceOptions = {
  laundry: [
    { value: 'regular-wash', label: 'Regular Wash & Fold' },
    { value: 'premium-wash', label: 'Premium Wash & Fold' },
    { value: 'delicate-wash', label: 'Delicate Wash' }
  ],
  'dry-cleaning': [
    { value: 'suits', label: 'Suits & Formal Wear' },
    { value: 'dresses', label: 'Dresses & Gowns' },
    { value: 'coats', label: 'Coats & Jackets' }
  ],
  'express-service': [
    { value: 'same-day', label: 'Same Day Service' },
    { value: 'next-day', label: 'Next Day Service' },
    { value: 'urgent', label: 'Urgent Express' }
  ],
  'specialty': [
    { value: 'carpet', label: 'Carpet Cleaning' },
    { value: 'curtains', label: 'Curtain Cleaning' },
    { value: 'soft-toys', label: 'Soft Toy Cleaning' }
  ]
}

export default function PickupForm({ open, onClose }: PickupFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceCategory: '',
    specificService: '',
    pickupDate: '',
    deliveryDate: '',
    comment: ''
  })

  const handleServiceCategoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceCategory: value,
      specificService: '' // Reset specific service when category changes
    }))
  }

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.address || !formData.serviceCategory) {
      alert('Please fill in all required fields')
      return
    }
    
    console.log('Form submitted:', formData)
    alert('Pickup scheduled successfully!')
    onClose()
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceCategory: '',
      specificService: '',
      pickupDate: '',
      deliveryDate: '',
      comment: ''
    })
  }

  const availableServices = formData.serviceCategory ? serviceOptions[formData.serviceCategory as keyof typeof serviceOptions] || [] : []

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-xl font-bold text-gray-800">
            Schedule a Pickup
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Your Name *</Label>
            <Input
              id="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Your e-mail address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your e-mail address *"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">Your phone number</Label>
              <Input
                id="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="address" className="text-sm font-medium">Address *</Label>
            <Input
              id="address"
              placeholder="Address *"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="serviceCategory" className="text-sm font-medium">Service Category *</Label>
              <Select value={formData.serviceCategory} onValueChange={handleServiceCategoryChange}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Service Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="laundry">Laundry Services</SelectItem>
                  <SelectItem value="dry-cleaning">Dry Cleaning</SelectItem>
                  <SelectItem value="express-service">Express Services</SelectItem>
                  <SelectItem value="specialty">Specialty Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="specificService" className="text-sm font-medium">Specific Service</Label>
              <Select 
                value={formData.specificService} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, specificService: value }))}
                disabled={!formData.serviceCategory}
              >
                <SelectTrigger className={`mt-1 ${!formData.serviceCategory ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <SelectValue placeholder={formData.serviceCategory ? "Select Specific Service" : "Select Category First"} />
                </SelectTrigger>
                <SelectContent>
                  {availableServices.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pickup" className="text-sm font-medium">Pick-Up Date</Label>
              <div className="relative">
                <Input
                  id="pickup"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, pickupDate: e.target.value }))}
                  className="mt-1"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="delivery" className="text-sm font-medium">Delivery Date</Label>
              <div className="relative">
                <Input
                  id="delivery"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, deliveryDate: e.target.value }))}
                  className="mt-1"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="comment" className="text-sm font-medium">Your comment</Label>
            <Textarea
              id="comment"
              placeholder="Your comment"
              value={formData.comment}
              onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
              className="mt-1 min-h-[80px]"
            />
          </div>
          
          <Button 
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2"
          >
            Order Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
