"use client"
import React, { useEffect } from "react"
import { StarIcon } from "lucide-react"
import { useDispatch } from "react-redux"
import ExpirTime from "./ExpirTime"
import DontHavePlan from "./DontHavePlan"
import useGetProfile from "@/hooks/useGetProfile"
import Skeleton from "@/components/ui/Skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/Alert"
import NotLoadErorr from "@/components/ui/NotLoadErorr"
import { setCurrentPlanId } from "@/store/features/userInfoSlice"


const CurrentPlan = () => {
  const dispatch = useDispatch()

  const {
    isLoading,
    isError,
    profile,
    isSuccess
  } = useGetProfile()
  
  useEffect(() => {
    if(isSuccess && profile) {
      dispatch(setCurrentPlanId(String(3)))
    }
  }, [isSuccess])
    
  return (
    <div className="my-5">

      {isError && <NotLoadErorr />}

      {isLoading && <Skeleton className="w-full h-20 runded-xl" />}

      {
        !isLoading && !isError && profile && (
               
          profile.active_plan
            ? (
              <Alert variant="default" className="text-green-700 bg-green-300/5 dark:text-green-500">

                <StarIcon />

                <AlertTitle className="flex gap-3 items-center text-[16px]">
                  <span>درحال حاضر اشتراک {profile.active_plan?.title} برای شما فعال است</span>
                </AlertTitle>

                <AlertDescription className="text-black mt-3 dark:text-white">
                  <ExpirTime expiryDate={profile.active_plan?.duration_months} /> روز از اشتراک شما باقی مانده

                </AlertDescription>
              </Alert>
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