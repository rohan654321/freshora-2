import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface ServiceCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({  image, title, description, slug }) => {
  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 text-left">
          <div className="flex justify-start mb-4">
            <div className="bg-green-500 p-3 rounded-full text-white">
              <FaCheckCircle size={20} />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">
            More Info
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
