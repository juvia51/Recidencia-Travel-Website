import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Residencia del Hamor Beach Front | Luxury Resort",
  description: "Experience paradise on earth with breathtaking views and unparalleled luxury at Residencia del Hamor Beach Front.",
    generator: 'v0.dev'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}



import './globals.css'