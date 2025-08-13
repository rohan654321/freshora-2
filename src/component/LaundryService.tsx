import { Check } from "lucide-react"
import Image from "next/image"

const featuresLeft = ["Salons & Spas", "Restaurants and Caterers", "Religious Organizations", "Daycare centers"]

const featuresRight = [
  "Assisted Living / Nursing Homes",
  "Hotels & Motels",
  "Nail Salons",
  "Athletic Facilities / Gyms",
]

export default function LaundryService() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/Images/box02-img04.jpg"
                alt="Commercial Laundry Service"
                width={700}
                height={500}
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <p className="text-green-600 font-medium mb-2 text-sm sm:text-base">
              [ Laundry service for your business! ]
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Commercial Laundry <br className="hidden sm:block" /> Service
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Large corporations have determined that there is a financial benefit to outsourcing back office work
              because it saves money. Allowing us to do your laundry is cost effective and will allow you and your
              employees to focus on your core business. We offer smart solutions to meet your commercial laundry needs.
              Our Commercial Laundry Clients include:
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 mb-6 sm:mb-8">
              <ul className="space-y-2 sm:space-y-3">
                {featuresLeft.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                    <Check className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 sm:space-y-3">
                {featuresRight.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                    <Check className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
