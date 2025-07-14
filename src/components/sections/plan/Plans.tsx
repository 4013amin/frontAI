"use client"
import React from "react"
import CurrentPlan from "./CurrentPlan"
import PlanCard from "./PlanCard"
import PageHeader from "@/components/ui/PageHeader"
import useGetPlans from "@/hooks/useGetPlans"
import { IPlan } from "@/types/globa_types"


const Plans = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    plans,
    error
  } = useGetPlans()

  console.log(plans)
  console.log(error)
  console.log(isLoading)
  console.log(isSuccess)
  console.log(isError)


  return (
    <div id="plans">
      <PageHeader title="اشتراک من" />

      <CurrentPlan  />

      <div>

        {
          isLoading
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