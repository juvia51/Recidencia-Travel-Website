import Link from "next/link"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Residencia del Hamor Beach Front</h3>
            <p className="text-gray-400">
              Experience paradise on earth with breathtaking views and unparalleled luxury.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100065040003922&mibextid=ZbWKwL" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Accommodations", href: "/accommodations" },
                { name: "Amenities", href: "/amenities" },
                { name: "Booking", href: "/booking" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Amenities</h3>
            <ul className="space-y-2">
              {["Infinity Pool", "Luxury Spa", "Sauna", "Private Pool", "Foods and Drinks"].map(
                (amenity) => (
                  <li key={amenity} className="text-gray-400">
                    {amenity}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Brgy. San Sebastian, Sta. Magdalena, Santa Magdalena, Philippines</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+63905 245 1920</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">reservations @recidenciadelhamor beachfront.com.ph</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Residencia del Hamor. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="https://www.privacypolicies.com/live/18458925-523a-44ba-bdfa-f1f57657351e" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link href="https://www.privacypolicies.com/live/4778ad09-7705-4024-bd45-96d971d8b61b" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
          <p> Mary Julia Celine R. Ebio • BSIT 3</p>
        </div>
      </div>
    </footer>
  )
}

