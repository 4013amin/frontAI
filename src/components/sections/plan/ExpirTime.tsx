"use client"
import useSubscriptionDaysLeft from "@/hooks/useSubscriptionDaysLeft"

const ExpirTime = ({ expiryDate }: { expiryDate: string }) => {
  const daysLeft = useSubscriptionDaysLeft(expiryDate)

  
  if (!expiryDate) {
    return <span className="text-gray-500">تاریخ اشتراک نامعتبر است</span>
  }

  let message = ""
  let className = ""

  if (daysLeft <= 0) {
    message = "اشتراک شما به پایان رسیده"
    className = "text-red-600"
  }
  else if (daysLeft === 1) {
    message = "امروز آخرین روز اشتراک شماست"
    className = "text-yellow-600"
  }
  else {
    message = `${daysLeft} روز از اشتراک شما باقی مانده`
    className = "text-black"
  }

  return <span className={`${className} font-semibold`}>{message}</span>
}

export default ExpirTime