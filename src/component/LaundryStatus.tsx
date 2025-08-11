import { useEffect, useState } from "react";
import { FaTshirt, FaWater, FaUserCheck } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

const statsData = [
  {
    icon: <FaTshirt className="text-green-600 text-3xl" />,
    value: 50000,
    suffix: "+",
    label: "Shirts Washed",
  },
  {
    icon: <FaWater className="text-green-600 text-3xl" />,
    value: 50,
    suffix: "",
    label: "Washing Machines",
  },
  {
    icon: <GiClothes className="text-green-600 text-3xl" />,
    value: 10000,
    suffix: "+",
    label: "Dry Cleaned Items",
  },
  {
    icon: <FaUserCheck className="text-green-600 text-3xl" />,
    value: 100,
    suffix: "%",
    label: "Happy Customers",
  },
];

export default function LaundryStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Simple counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < statsData[i].value
            ? Math.min(count + Math.ceil(statsData[i].value / 50), statsData[i].value)
            : count
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-10 relative">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-white rounded-full shadow p-4 mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900">
              {counts[i]}
              {stat.suffix}
            </h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
