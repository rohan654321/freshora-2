'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaPhoneAlt,
  FaShoppingCart,
  FaChevronDown,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import PickupForm from './pickup-form';

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'About Us',
    href: '#',
    subItems: [
      { title: 'Our Story', href: '/about/story' },
      { title: 'Team', href: '/about/team' },
    ],
  },
  {
    title: 'Services',
    href: '/services',
    subItems: [
      { title: 'Laundry', href: '/services/laundry' },
      { title: 'Dry Cleaning', href: '/services/dry-cleaning' },
      { title: 'Express Laundry Services', href: '/services/express-laundry-services' },
      { title: 'Bag & Shoe Spa', href: '/services/bag-shoe-spa' },
      { title: 'Luxury Shoe Cleaning Service', href: '/services/luxury-shoe-cleaning-service' },
      { title: 'Commercial Laundry Service', href: '/services/commercial-laundry-service' },
      { title: 'Carpet Cleaning Service', href: '/services/carpet-cleaning-service' },
      { title: 'Curtain Cleaning Service', href: '/services/curtain-cleaning-service' },
      { title: 'Soft Toy Cleaning Service', href: '/services/soft-toy-cleaning-service' },
    ],
  },
  {
    title: 'Blog',
    href: '#',
    subItems: [
      { title: 'Latest News', href: '/blog/latest' },
      { title: 'Tips & Tricks', href: '/blog/tips' },
    ],
  },
  { title: 'Prices', href: '/prices' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Contacts', href: '/contacts' },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Info Bar */}
      <div className="bg-gray-100 text-sm text-gray-700 py-2 px-4 flex justify-between items-center border-b border-gray-100">
        <div>8494 Signal Hill Road Manassas, VA, 20110</div>
        <div className="hidden md:flex gap-6">
          <span>Mon-Fri 08:00 AM - 05:00 PM</span>
          <span>info@yourcompany.com</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-green-500" />
            1 (800) 765-43-21
          </span>
          <FaTwitter />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 py-4 bg-white relative z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-green-600">Pro</span>
          <span className="text-black">Laundry</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700 relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href={item.href}
                className="flex items-center hover:text-green-600 transition"
              >
                {item.title}
                {item.subItems && <FaChevronDown className="ml-1 text-xs" />}
              </Link>
              {/* Dropdown */}
              {item.subItems && openIndex === index && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
                  {item.subItems.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="block px-4 py-2 text-sm hover:bg-green-100 hover:text-green-700 transition"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
          >
            Schedule a Pickup
          </button>
        </div>
      </div>
      
      <hr className="border-t border-gray-400" />
      
      {/* Pickup Form Modal */}
      <PickupForm open={showForm} onClose={() => setShowForm(false)} />
    </header>
  );
};

export default Navbar;
