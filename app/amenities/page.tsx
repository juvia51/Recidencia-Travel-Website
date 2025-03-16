import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AmenitiesPage() {
  const amenities = [
    {
      id: 1,
      name: "Public Pool",
      description:
        "Our public pool offers a refreshing escape with stunning ocean views. Surrounded by a relaxing tropical ambiance, it's perfect for swimming, lounging, and enjoying the seaside breeze. Ideal for families and travelers looking to unwind by the water.",
      image: "/InfinityPool.webp?height=600&width=800",
    },
    {
      id: 2,
      name: "Spa",
      description:
        "Indulge in pure relaxation at the Spa. Offering premium treatments in a serene beachfront setting, it’s the perfect retreat for rejuvenation and tranquility.",
      image: "/Spa.jpg?height=600&width=800",
    },
    {
      id: 3,
      name: "Sauna",
      description:
        "Relax and rejuvenate in the sauna. Designed for ultimate comfort, it offers a soothing escape with gentle heat and a tranquil ambiance, perfect for unwinding after a day by the beach.",
      image: "/Sauna.jpg?height=600&width=800",
    },
    {
      id: 4,
      name: "Private Pool",
      description:
        "Experience exclusivity and relaxation at our private pool. Surrounded by a serene coastal ambiance, it’s perfect for a peaceful swim or a luxurious getaway with family and friends.",
      image: "/Private.webp?height=600&width=800",
    },
    {
      id: 5,
      name: "Foods and Drinks",
      description:
        "Enjoy a delightful culinary experience with a variety of delicious food and refreshing drinks, all served in a stunning beachfront setting. From fresh seafood to flavorful local and international dishes, every bite is crafted to satisfy your cravings while you soak in the relaxing coastal ambiance.",
      image: "/Foods.webp?height=600&width=800",
    },
  ]

  const activities = [
    {
      name: "Water Sports",
      activities: ["Snorkeling", "Scuba Diving", "Kayaking", "Island Hopping"],
      image: "/Water.webp?height=400&width=600",
    },
    {
      name: "Land Activities",
      activities: ["Beach", "Beach Sports",],
      image: "/Beach.webp?height=400&width=600",
    },
    {
      name: "Evening Entertainment",
      activities: [
        "Bar",
        "Night Swimming",
      ],
      image: "/Bar.webp?height=400&width=600",
    },
  ]

  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/Amenities.webp?height=800&width=1600"
          alt="Resort amenities"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Amenities & Activities</h1>
          <p className="text-xl max-w-2xl">
            Discover the exceptional facilities and exciting activities available at Residencia del Hamor Beach Front.
          </p>
        </div>
      </div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resort Amenities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Indulge in our world-class amenities designed to make your stay unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row"
            >
              <div className="relative h-64 md:h-auto md:w-1/2">
                <Image src={amenity.image || "/placeholder.svg"} alt={amenity.name} fill className="object-cover" />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-bold mb-2">{amenity.name}</h3>
                <p className="text-gray-600 mb-4">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Activities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore a wide range of activities available at and around our resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((category, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.activities.map((activity, idx) => (
                      <li key={idx} className="text-gray-600">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Special Packages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Enhance your stay with our specially curated packages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Wedding Package",
              description:
                "Celebrate your dream wedding with a breathtaking beachfront backdrop, elegant setups, and personalized services for an unforgettable experience.",
              price: "₱275,000.00 - ₱356,000.00",
              duration: "TBD",
            },
            {
              name: "Aqua Adventure Package",
              description:
                "Enjoy an exhilarating water adventure with fun-filled activities and a refreshing experience in a breathtaking beachfront location.",
              price: "₱38,336.99",
              duration: "2 nights",
            },
            {
              name: "Barkada Package",
              description:
                "Create unforgettable memories with your friends while enjoying a fun-filled getaway, complete with scenic views, relaxing vibes, and exciting activities.",
              price: "$₱22,438.00",
              duration: "3 Days & 2 Nights ",
            },
            {
              name: "Pampering Getaway",
              description:
                "Relax and rejuvenate with luxurious spa treatments, stunning ocean views, and a tranquil ambiance designed for pure bliss.",
              price: "₱21,710.00",
              duration: "3 Days & 2 Nights ",
            },
            {
              name: "Pre-nup / Birthday Shooting Package",
              description:
                "Capture unforgettable moments with a stunning beachfront backdrop, picturesque scenery, and a dreamy ambiance perfect for any special occasion.",
              price: "₱10,500.00",
              duration: "TBD",
            },
          ].map((package_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <h3 className="text-xl font-bold mb-2">{package_.name}</h3>
              <p className="text-gray-600 mb-4">{package_.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-600 font-semibold">{package_.price}</span>
                <span className="text-gray-500">{package_.duration}</span>
              </div>
              <Link
                href="/contact"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Residencia del Hamor Beach Front today and enjoy all our amenities and activities.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  )
}

