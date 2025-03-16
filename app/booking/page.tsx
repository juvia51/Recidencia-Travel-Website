import { Suspense } from "react"
import BookingForm from "@/components/bookingform"

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingForm />
    </Suspense>
  )
}

