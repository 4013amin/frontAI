"use client"

import React, { useEffect } from "react"
// import { AlertCircleIcon } from "lucide-react"
// import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/Alert"
import useSubscriptionDaysLeft from "@/hooks/useSubscriptionDaysLeft"
import useGetProfile from "@/hooks/useGetProfile"


const CurrentPlan = () => {
  const {
    mutate,
    isPending,
    isError,
    isSuccess,
    profile,
    error
  } = useGetProfile()

  const daysLeft = useSubscriptionDaysLeft("")
  
  useEffect(() => {
    mutate()
  }, [])

  console.log(profile)
    
  return (
    <>

      {isError && <h1>ERROR</h1>}

      {isPending && <h1>Loading</h1>}

      {
        !isPending && !isError && profile && (
          <h1>data loaded</h1>
        )
      }

      {/* {
        user.subscription_active
          ? (
            <div
              className={`border rounded-lgp-4 ${""}`} 
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
      } */}
    </>
  )
}

export default CurrentPlan