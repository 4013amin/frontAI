"use client"
import { useState, useEffect } from "react"


const useSubscriptionDaysLeft = (expiryDate: number) => {
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date()
      today.setHours(0, 0, 0, 0) // Set time to 00:00:00
      const expiry = new Date(String(expiryDate))
      expiry.setHours(0, 0, 0, 0) // Set time to 00:00:00

      // Calculate the remaining days
      const timeDiff = expiry.getTime() - today.getTime() // Time difference in milliseconds
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) // Convert to days

      // If the expiry date has passed, set days to zero
      setDaysLeft(daysRemaining < 0 ? 0 : daysRemaining)
    }

    calculateDaysLeft()

    // Update every minute
    const intervalId = setInterval(calculateDaysLeft, 1000 * 60)

    return () => clearInterval(intervalId) // Clear the timer
  }, [expiryDate])

  return daysLeft
}

export default useSubscriptionDaysLeft