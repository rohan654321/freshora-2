"use client"

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdAccessTime, MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">
        {/* Left Column */}
        <div>
          <h2 className="text-xl font-bold text-green-500 mb-2">
            <span className="text-white">Pro</span>Laundry
          </h2>
          <p className="mb-4">
            We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies and cleaning methods.
          </p>
          <div className="flex gap-3">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
              <FaTwitter size={16} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
              <FaFacebookF size={16} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
              <FaLinkedinIn size={16} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition">
              <FaInstagram size={16} />
            </div>
          </div>
        </div>

        {/* Middle Column - Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <div className="flex items-start gap-2 mb-2">
            <MdLocationOn className="text-green-500 mt-1" />
            <span>8494 Signal Hill Road Manassas, VA, 20110</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <MdAccessTime className="text-green-500 mt-1" />
            <span>
              Mon-Fri: 8am - 5pm <br /> Sat-Sun: 10am - 5pm
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MdEmail className="text-green-500" />
            <span>info@yourlaundrysite.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-green-500" />
            <span className="font-bold">1 (800) 765-43-21</span>
          </div>
        </div>

        {/* Right Column - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter Subscribe</h3>
          <p className="mb-4">Sign up and receive our special offers.</p>
          <input
            type="email"
            placeholder="Your e-mail address"
            className="w-full p-2 mb-3 text-black rounded bg-amber-50"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition">
            Subscribe now
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-white text-black text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© 2020 <span className="text-green-600 font-medium">Pro</span>Laundry. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      {/* Floating Up Arrow */}
      <div className="absolute bottom-4 right-4">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
  >
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</div>

    </footer>
  );
}
