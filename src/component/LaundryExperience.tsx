"use client"

import { useEffect, useState } from "react"
import { FaTshirt, FaWater, FaUserCheck } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"

const statsData = [
  {
    icon: <FaTshirt className="text-green-600 text-2xl sm:text-3xl" />,
    value: 50000,
    suffix: "+",
    label: "Shirts Washed",
  },
  {
    icon: <FaWater className="text-green-600 text-2xl sm:text-3xl" />,
    value: 50,
    suffix: "",
    label: "Washing Machines",
  },
  {
    icon: <GiClothes className="text-green-600 text-2xl sm:text-3xl" />,
    value: 10000,
    suffix: "+",
    label: "Dry Cleaned Items",
  },
  {
    icon: <FaUserCheck className="text-green-600 text-2xl sm:text-3xl" />,
    value: 100,
    suffix: "%",
    label: "Happy Customers",
  },
]

export default function LaundryStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0))

  // Simple counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < statsData[i].value ? Math.min(count + Math.ceil(statsData[i].value / 50), statsData[i].value) : count,
        ),
      )
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12 relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center max-w-6xl">
        {statsData.map((stat, i) => (
          <div key={i} className="flex flex-col items-center p-4 sm:p-6">
            <div className="bg-white rounded-full shadow-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-gray-100">
              {stat.icon}
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
              {counts[i]}
              {stat.suffix}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
