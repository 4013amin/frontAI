import React from "react"
import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/Alert"
import useSubscriptionDaysLeft from "@/hooks/useSubscriptionDaysLeft"

const user = {
  username: "string",
  full_name: "string",
  phone: "string",
  subscription_active: true,
  subscription_end_date: "2025-07-13",
  jalali_subscription_date: "string",
  jalali_registration_date: "string",
  active_plan: {
    id: 0,
    title: "string",
    duration_months: 2147483647,
    price: 2147483647,
    is_active: true,
    is_trial: true,
    features: "string"
  }
}

const CurrentPlan = () => {

  const daysLeft = useSubscriptionDaysLeft(user.subscription_end_date)

  console.log(daysLeft)
    
  return (
    <>
      {
        user.subscription_active
          ? (
            <div
              className={`border rounded-lgp-4 ${user.active_plan}`} 
              data-id={10}
            >
              <h2>رایگان 7 روزه</h2>

              <h3>زمان باقی مانده: {user.active_plan.duration_months}</h3>
            </div>
          )
          : (
            <Alert variant="destructive">

              <AlertCircleIcon />

              <AlertTitle className="flex gap-3 items-center">

                <span>شما اشتراک فعالی ندارید</span>
              </AlertTitle>

              <AlertDescription>
                <p>لطفا برای استفاده از امکانات یک پلن خریداری نماید.</p>
              </AlertDescription>
            </Alert>
          )
      }
    </>
  )
}

export default CurrentPlan