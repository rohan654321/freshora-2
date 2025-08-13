"use client"
import Link from "next/link"
import { useState } from "react"
import {
  FaPhoneAlt,
  FaShoppingCart,
  FaChevronDown,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import PickupForm from "./SchedulePickupModal"
import { useCart } from "../app/context/cart-context"

interface NavItem {
  title: string
  href: string
  subItems?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/about",
    subItems: [
      { title: "Our Story", href: "/about/story" },
      { title: "Team", href: "/about/team" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Laundry", href: "/services/laundry" },
      { title: "Dry Cleaning", href: "/services/dry-cleaning" },
      { title: "Express Laundry Services", href: "/services/express-laundry-services" },
      { title: "Bag & Shoe Spa", href: "/services/bag-shoe-spa" },
      { title: "Luxury Shoe Cleaning Service", href: "/services/luxury-shoe-cleaning-service" },
      { title: "Commercial Laundry Service", href: "/services/commercial-laundry-service" },
      { title: "Carpet Cleaning Service", href: "/services/carpet-cleaning-service" },
      { title: "Curtain Cleaning Service", href: "/services/curtain-cleaning-service" },
      { title: "Soft Toy Cleaning Service", href: "/services/soft-toy-cleaning-service" },
    ],
  },
  {
    title: "Blog",
    href: "/Blogs",
    subItems: [
      { title: "Latest News", href: "/blog/latest" },
      { title: "Tips & Tricks", href: "/blog/tips" },
    ],
  },
  { title: "Prices", href: "/prices" },
  { title: "FAQ", href: "/FAQs" },
  { title: "Contacts", href: "/contact" },
]

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Info Bar - Enhanced responsive top bar */}
      <div className="bg-gray-100 text-xs sm:text-sm text-gray-700 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <div className="text-xs sm:text-sm">8494 Signal Hill Road Manassas, VA, 20110</div>
          <div className="hidden lg:flex gap-4 text-xs">
            <span>Mon-Fri 08:00 AM - 05:00 PM</span>
            <span>info@yourcompany.com</span>
          </div>
          <div className="flex gap-2 sm:gap-3 items-center text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <FaPhoneAlt className="text-green-500" />
              <span className="hidden sm:inline">+971 50 925 9667</span>
              <span className="sm:hidden">Call</span>
            </span>
            <div className="flex gap-2">
              <FaTwitter className="cursor-pointer hover:text-green-500 transition-colors" />
              <FaFacebookF className="cursor-pointer hover:text-green-500 transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-green-500 transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-green-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav - Improved responsive main navigation */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 relative">
        {/* Logo - Better responsive logo sizing */}
        <div className="text-lg sm:text-xl lg:text-2xl font-bold">
          <span className="text-green-600">Freshora</span>
          <span className="text-black">Laundry</span>
        </div>

        {/* Desktop Nav - Enhanced desktop navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 font-medium text-gray-700 relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link href={item.href} className="flex items-center hover:text-green-600 transition-colors py-2">
                {item.title}
                {item.subItems && <FaChevronDown className="ml-1 text-xs" />}
              </Link>
              {item.subItems && openIndex === index && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-1 w-56 z-50 border border-gray-100">
                  {item.subItems.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="block px-4 py-3 text-sm hover:bg-green-50 hover:text-green-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side - Better responsive right side layout */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Cart Icon - Enhanced cart icon with better badge */}
          <Link href="/cart" className="relative hover:text-green-600 transition-colors p-2">
            <FaShoppingCart size={18} className="sm:w-5 sm:h-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                {getTotalItems()}
              </span>
            )}
          </Link>

          {/* Schedule Pickup Button - Better responsive button */}
          <button
            onClick={() => setShowForm(true)}
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-semibold px-3 lg:px-4 py-2 rounded text-sm lg:text-base transition-colors"
          >
            <span className="hidden lg:inline">Schedule a Pickup</span>
            <span className="lg:hidden">Schedule</span>
          </button>

          {/* Mobile Menu Button - Better mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced mobile menu with better UX */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <Link
                  href={item.href}
                  className="block px-4 sm:px-6 py-4 font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <div className="bg-gray-50 border-t border-gray-100">
                    {item.subItems.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub.href}
                        className="block py-3 px-8 sm:px-10 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile Schedule Button - Full-width mobile button */}
            <button
              onClick={() => {
                setShowForm(true)
                setMobileOpen(false)
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-6 py-4 transition-colors"
            >
              Schedule a Pickup
            </button>
          </div>
        </div>
      )}

      {/* Pickup Form Modal */}
      <PickupForm open={showForm} onClose={() => setShowForm(false)} />
    </header>
  )
}

export default Navbar
