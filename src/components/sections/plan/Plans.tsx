"use client"
import React, { useEffect } from "react"
import CurrentPlan from "./CurrentPlan"
import PlanCard from "./PlanCard"
import PageHeader from "@/components/ui/PageHeader"
import useGetPlans from "@/hooks/useGetPlans"
import { IPlan } from "@/types/globa_types"


const Plans = () => {
  const {
    mutate,
    isPending,
    isError,
    isSuccess,
    plans,
    error
  } = useGetPlans()

  console.log(plans)
  console.log(error)
  console.log(isPending)
  console.log(isSuccess)
  console.log(isError)


  useEffect(() => {
    mutate()
  }, [])

  return (
    <div id="plans">
      <PageHeader title="اشتراک من" />

      <CurrentPlan  />

      <div>

        {
          isPending
            ? (
              <h1>درحال بارگزاری...</h1>
            )
            : isError
              ? (
                <>ERORR</>
              )
              : (
                plans?.map((item: IPlan) => (
                  <PlanCard key={item.id} {...item} />
                ))
              )
        }


      </div>
    </div>
  )
}

export default Plans