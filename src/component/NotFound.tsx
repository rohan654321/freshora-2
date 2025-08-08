'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center">
      <Image
        src="/laundry-404.png" // Replace with your own image in the public folder
        alt="Laundry Not Found"
        width={300}
        height={300}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Looks like a sock went missing in the wash...<br />
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
