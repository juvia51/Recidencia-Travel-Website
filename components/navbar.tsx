"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Accommodations", href: "/accommodations" },
    { name: "Amenities", href: "/amenities" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-bold text-xl text-blue-600">
                        Residencia del Hamor Beach Front
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Link
                        href="/booking"
                        className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full font-medium transition-colors"
                        >
                        Book Now
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                        type="button"
                        className="text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                        ))}
                        <Link
                            href="/booking"
                            className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md font-medium text-center mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

