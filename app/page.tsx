import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Sun, Waves, Utensils } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[100vh] w-full">
        <Image
          src="/Hero3.jpg?height=1080&width=1920"
          alt="Residencia del Hamor resort view"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Residencia del Hamor Beach Front</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience paradise on earth with breathtaking views and unparalleled luxury
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
            >
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/accommodations"
              className="bg-transparent border-2 border-white hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Paradise</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Recidencia Del Hamor Beach Front is a Mediterranean style Beach Resort located at the south tip-end of Luzon. A perfect choice for a long vacation immersed in the relaxing atmosphere of a crystalline water and an artistic scenery of the place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Prime Location</h3>
            <p className="text-gray-600">
              Located in a serene environment with easy access to local attractions and natural wonders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <Sun className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Perfect Climate</h3>
            <p className="text-gray-600">
              Enjoy beautiful weather year-round, with sunny days and cool, comfortable evenings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <Utensils className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Exquisite Dining</h3>
            <p className="text-gray-600">
              Savor delicious local and international cuisine prepared by our local chefs.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Accommodations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of luxurious rooms and suites, each designed for your comfort and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Room",
                price: "₱11,500.00",
                image: "/Standard.jpg?height=600&width=800",
                description: "Comfortable and stylish room featuring a queen-size bed, partial ocean views, and modern amenities for a relaxing stay.",
              },
              {
                title: "Junior Suite Room",
                price: "₱13,000.00",
                image: "/Junior.jpg?height=600&width=800",
                description: "Elegant suite with a spacious layout, a private balcony offering ocean views, and a cozy sitting area for ultimate comfort.",
              },
              {
                title: "Deluxe Room",
                price: "₱15,000.00",
                image: "/Deluxe.webp?height=600&width=800",
                description: "Luxurious room featuring a queen-size bed, private balcony with breathtaking ocean views, and a complimentary mini bar.",
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={room.image || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{room.title}</h3>
                    <span className="text-blue-600 font-semibold">{room.price}/night</span>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <Link
                    href="/accommodations"
                    className="text-blue-600 font-semibold hover:text-blue-800 flex items-center"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/accommodations"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              View All Accommodations
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resort Amenities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Indulge in our world-class amenities designed to make your stay unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <Image
              src="/InfinityPool.webp?height=800&width=1200"
              alt="Infinity Pool"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center mb-2">
                <Waves className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Public Pool</h3>
              </div>
              <p>Swim in our stunning Public pool overlooking the ocean</p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <Image
              src="/Spa.jpg?height=800&width=1200"
              alt="Spa & Wellness"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center mb-2">
                <Sun className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">Spa & Wellness</h3>
              </div>
              <p>Rejuvenate your body and mind with our premium spa treatments</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/amenities"
            className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Explore All Amenities
          </Link>
        </div>
      </section>
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Residencia del Hamor Beach Front today and create memories that will last a lifetime.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  )
}

