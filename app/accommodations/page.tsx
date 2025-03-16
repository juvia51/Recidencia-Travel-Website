import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

export default function AccommodationsPage() {
  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      price: "₱11,500.00",
      image: "/Standard.jpg?height=600&width=800",
      description:
        "Experience comfort in our Standard Room, featuring cozy interiors, a queen-size bed, and essential amenities for a relaxing stay. Enjoy a peaceful ambiance with partial sea views, a private bathroom with a shower, and complimentary breakfast for two.",
      amenities: [
        "1 queen bed",
        "Sea (partial view) view",
        "Non-smoking",
        "Shower",
        "Complimentary Breakfast for 2 persons",
        "2 kids under 7 years, Free Stay",
      ],
      size: "24 m²",
      maxOccupancy: "2 Adults, 2 Child",
    },
    {
      id: 2,
      name: "Junior Suite Room",
      price: "₱13,000.00",
      image: "/Junior.jpg?height=600&width=800",
      description:
        "Our Junior Suite Room offers a blend of comfort and style, featuring a spacious layout with a queen-size bed, a private balcony with stunning ocean views, and a cozy sitting area. Ideal for relaxation, it includes a modern bathroom with a shower and complimentary breakfast for two.",
      amenities: [
        "1 queen bed",
        "Ocean view",
        "Balcony/terrace",
        "Non-smoking",
        "Shower",
        "Complimentary Breakfast for 2 persons",
        "2 kids under 7 years, Free Stay",
      ],
      size: "25 m²",
      maxOccupancy: "2 Adults, 2 Child",
    },
    {
      id: 3,
      name: "Deluxe Room",
      price: "₱15,000.00",
      image: "/Deluxe.webp?height=600&width=800",
      description:
        "Our Deluxe Room offers an elegant and spacious retreat with modern comforts. Featuring a queen-size bed, a private balcony with breathtaking ocean views, and a stylish bathroom with a shower, this room is designed for ultimate relaxation. Enjoy a complimentary breakfast for two and a fully stocked mini bar.",
      amenities: [
        "1 queen bed",
        "Ocean view",
        "Balcony/terrace",
        "Non-smoking",
        "Shower",
        "Complimentary Breakfast for 2 persons",
        "Complimentary mini bar.",
        "2 kids under 7 years, Free Stay",
      ],
      size: "30 m²",
      maxOccupancy: "2 Adults, 2 Child",
    },
    {
      id: 4,
      name: "Premier Room",
      price: "₱17,000.00",
      image: "/Premier.webp?height=600&width=800",
      description:
        "Our Premier Room offers a luxurious and spacious retreat, perfect for a relaxing getaway. Featuring a king-size bed, elegant furnishings, and a modern bathroom with a shower, this room ensures ultimate comfort. Enjoy exclusive amenities, including a complimentary mini bar and breakfast for two.",
      amenities: [
        "1 King-size bed",
        "Non-smoking",
        "Shower",
        "Complimentary Breakfast for 2 persons",
        "Complimentary mini bar.",
      ],
      size: "35 m²",
      maxOccupancy: "2 Adults",
    },
  ]

  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-[50vh] w-full">
        <Image
          src="/Accommodation.jpg?height=800&width=1600"
          alt="Luxurious accommodations"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxurious Accommodations</h1>
          <p className="text-xl max-w-2xl">
            Choose from our selection of elegant rooms and suites, each designed for your comfort and relaxation.
          </p>
        </div>
      </div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <span className="text-blue-600 font-semibold">{room.price}/night</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Size: {room.size}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Max Occupancy: {room.maxOccupancy}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {room.amenities.slice(0, 8).map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/booking?room=${room.id}`}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Room Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All of our accommodations include the following amenities and services to ensure a comfortable and
              enjoyable stay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Standard Amenities</h3>
              <ul className="space-y-2">
                {[
                  "Air conditioning",
                  "Free Wi-Fi (in all areas)",
                  "Flat-screen TV",
                  "Bar (Additional Charge)",
                  "Slippers",
                  "In-room safe",
                  "Towels",
                  "Toiletries",
                  "Daily housekeeping",
                ].map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "24-hour front desk",
                  "Room service",
                  "Luggage storage",
                  "Free Parking",
                ].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Check-in / Check-out</h4>
                  <p className="text-gray-600">Check-in: 2:00 PM to 6:00 PM / Check-out: Available 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold">Cancellation</h4>
                  <p className="text-gray-600">Cancellation and prepayment policies vary according to accommodation type.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Children</h4>
                  <p className="text-gray-600">Children of all ages are welcome</p>
                  <p className="text-gray-600">Children 12 and above will be charged as adults at this property.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Pets</h4>
                  <p className="text-gray-600">Pets are not allowed</p>
                </div>
                <div>
                  <h4 className="font-semibold">Payment</h4>
                  <p className="text-gray-600">We accept all major credit cards and Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Reserve your room now and experience the luxury and comfort of Residencia del Hamor Beach Front.
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

