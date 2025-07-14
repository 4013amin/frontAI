"use client"
import React from "react"
import DontHavePlan from "./DontHavePlan"
import useSubscriptionDaysLeft from "@/hooks/useSubscriptionDaysLeft"
import useGetProfile from "@/hooks/useGetProfile"


const CurrentPlan = () => {
  const {
    isLoading,
    isError,
    profile,
    error
  } = useGetProfile()

  console.log(profile)

  const daysLeft = useSubscriptionDaysLeft("")
  
    
  return (
    <div className="my-5">

      {isError && <h1>ERROR</h1>}

      {isLoading && <h1>Loading</h1>}

      {
        !isLoading && !isError && profile && (
               
          !profile.active_plan
            ? (
              <div
                className={`border rounded-lgp-4 ${""}`} 
                data-id={10}
              >
                <h2>رایگان 7 روزه</h2>

                <h3>زمان باقی مانده: 22 روز</h3>
              </div>
            )
            : (
              <DontHavePlan />
            )
      
        )
      }

  
    </div>
  )
}

export default CurrentPlan