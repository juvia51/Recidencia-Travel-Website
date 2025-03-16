"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle, Users, Home, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookingForm() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get("room")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: roomId || "",
    adults: "2",
    children: "0",
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    specialRequests: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const roomTypes = [
    { id: "1", name: "Standard Room", price: "₱11,500.00" },
    { id: "2", name: "Junior Suite Room", price: "₱13,000.00" },
    { id: "3", name: "Deluxe Room", price: "₱15,000.00" },
    { id: "4", name: "Premier Room", price: "17,000.00" },
  ]

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
  const handleSelectChange = (name: string, value: string) => {
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
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid"
    }
    if (!formData.roomType) newErrors.roomType = "Please select a room type"
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required"
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required"

    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      newErrors.checkOut = "Check-out date must be after check-in date"
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
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-24 px-4 pb-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-100">
          <div className="text-center">
            <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-slate-800">Booking Confirmed!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Thank you for booking with Residencia del Hamor Beach Front. We have sent a confirmation email to{" "}
              {formData.email}.
            </p>
            <div className="bg-slate-50 p-8 rounded-xl mb-8 border border-slate-100">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">Booking Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Name</p>
                  <p className="font-medium text-slate-800">
                    {formData.firstName} {formData.lastName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Room Type</p>
                  <p className="font-medium text-slate-800">
                    {roomTypes.find((room) => room.id === formData.roomType)?.name}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Check-in</p>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-slate-400" />
                    <p className="font-medium text-slate-800">
                      {formData.checkIn ? format(formData.checkIn, "PPP") : ""}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Check-out</p>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-slate-400" />
                    <p className="font-medium text-slate-800">
                      {formData.checkOut ? format(formData.checkOut, "PPP") : ""}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Guests</p>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-slate-400" />
                    <p className="font-medium text-slate-800">
                      {formData.adults} Adults, {formData.children} Children
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-sm">Price</p>
                  <p className="font-medium text-slate-800">
                    {roomTypes.find((room) => room.id === formData.roomType)?.price}/night
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-8">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-amber-800 text-sm">
                  Check-in time starts at 3:00 PM. Check-out time is 11:00 AM. Early check-in or late check-out may be
                  available upon request.
                </p>
              </div>
            </div>
            <p className="text-slate-600">
              If you have any questions about your booking, please contact us at{" "}
              <a href="mailto:info@residenciadelhamor.com" className="text-primary hover:underline font-medium">
                reservations @recidenciadelhamorbeachfront.com.ph
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 text-slate-800">Book Your Stay</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Fill out the form below to reserve your room at Residencia del Hamor.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Guest Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={cn(
                      "border-slate-200 focus:border-primary focus:ring-primary",
                      errors.firstName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                    )}
                    placeholder="Juan"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={cn(
                      "border-slate-200 focus:border-primary focus:ring-primary",
                      errors.lastName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                    )}
                    placeholder="Dela Cruz"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={cn(
                    "border-slate-200 focus:border-primary focus:ring-primary",
                    errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                  )}
                  placeholder="juan.delacruz@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={cn(
                    "border-slate-200 focus:border-primary focus:ring-primary",
                    errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                  )}
                  placeholder="+63963 205 7181"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                <Home className="mr-2 h-5 w-5 text-primary" />
                Accommodation Details
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="roomType" className="text-slate-700">
                    Room Type *
                  </Label>
                  <Select value={formData.roomType} onValueChange={(value) => handleSelectChange("roomType", value)}>
                    <SelectTrigger
                      className={cn(
                        "w-full border-slate-200 focus:border-primary focus:ring-primary",
                        errors.roomType ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                      )}
                    >
                      <SelectValue placeholder="Select a room type" />
                    </SelectTrigger>
                    <SelectContent>
                      {roomTypes.map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} - {room.price}/night
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="adults" className="text-slate-700">
                      Adults *
                    </Label>
                    <Select value={formData.adults} onValueChange={(value) => handleSelectChange("adults", value)}>
                      <SelectTrigger className="w-full border-slate-200 focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select number of adults" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="children" className="text-slate-700">
                      Children
                    </Label>
                    <Select value={formData.children} onValueChange={(value) => handleSelectChange("children", value)}>
                      <SelectTrigger className="w-full border-slate-200 focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-slate-700">Check-in Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-slate-200 hover:bg-slate-50",
                            errors.checkIn ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                          {formData.checkIn ? (
                            format(formData.checkIn, "PPP")
                          ) : (
                            <span className="text-slate-500">Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <div className="p-3">
                          <input
                            type="date"
                            className="w-full rounded-md border border-slate-200 p-2"
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.checkIn ? formData.checkIn.toISOString().split("T")[0] : ""}
                            onChange={(e) => {
                              const date = e.target.value ? new Date(e.target.value) : undefined
                              setFormData((prev) => ({ ...prev, checkIn: date }))
                              if (errors.checkIn) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev }
                                  delete newErrors.checkIn
                                  return newErrors
                                })
                              }
                            }}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700">Check-out Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-slate-200 hover:bg-slate-50",
                            errors.checkOut ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-slate-400" />
                          {formData.checkOut ? (
                            format(formData.checkOut, "PPP")
                          ) : (
                            <span className="text-slate-500">Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <div className="p-3">
                          <input
                            type="date"
                            className="w-full rounded-md border border-slate-200 p-2"
                            min={
                              formData.checkIn
                                ? new Date(formData.checkIn.getTime() + 86400000).toISOString().split("T")[0]
                                : new Date().toISOString().split("T")[0]
                            }
                            value={formData.checkOut ? formData.checkOut.toISOString().split("T")[0] : ""}
                            onChange={(e) => {
                              const date = e.target.value ? new Date(e.target.value) : undefined
                              setFormData((prev) => ({ ...prev, checkOut: date }))
                              if (errors.checkOut) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev }
                                  delete newErrors.checkOut
                                  return newErrors
                                })
                              }
                            }}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequests" className="text-slate-700">
                Special Requests
              </Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Let us know if you have any special requests or requirements"
                className="h-32 border-slate-200 focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <p className="text-sm text-slate-500 mb-2">* Required fields</p>
              <p className="text-sm text-slate-500">
                By clicking the button below, you agree to our terms and conditions and privacy policy.
              </p>
            </div>
            <Button type="submit" className="w-full py-6 text-base font-medium bg-blue-600 hover:bg-blue-700">
              Complete Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

