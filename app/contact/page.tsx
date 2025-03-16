"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    }
  }
  return (
    <div className="pt-24 min-h-screen px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below or use our contact information to get in touch
            with us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting Residencia del Hamor Beach Front. We have received your message and will get back to you
                  as soon as possible.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    })
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <div className="mb-6">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`h-40 ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            )}
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Brgy. San Sebastian, Sta. Magdalena, Santa Magdalena, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+63905 245 1920</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">reservations
                      @recidenciadelhamorbeachfront.com.ph</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-green-600">
                      Always Open
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">Our Location</h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62289.96343297652!2d124.06954301546729!3d12.639953554687308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c96c1198dc6f%3A0x995aaec9dae2c17a!2sRecidencia%20del%20Hamor%20Beachfront!5e0!3m2!1sen!2sph!4v1741842915070!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Resort Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

