import { useEffect, useState } from "react"

const useSubscriptionDaysLeft = (expiryDate: string) => {
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    if (!expiryDate) return

    const calculateDaysLeft = () => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const [year, month, day] = expiryDate.split("-").map(Number)
      const expiry = new Date(year, month - 1, day)
      expiry.setHours(0, 0, 0, 0)

      const diff = expiry.getTime() - today.getTime()
      const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24))

      setDaysLeft(daysRemaining < 0 ? 0 : daysRemaining)
    }

    calculateDaysLeft()
    const interval = setInterval(calculateDaysLeft, 1000 * 60)
    return () => clearInterval(interval)
  }, [expiryDate])

  return daysLeft
}

export default useSubscriptionDaysLeft