"use client"
import React from "react"
import CurrentPlan from "./CurrentPlan"
import PlanCard from "./PlanCard"
import PlansSkeleton from "./skeletons/PlansSkeleton"
import PageHeader from "@/components/ui/PageHeader"
import useGetPlans from "@/hooks/useGetPlans"
import { IPlan } from "@/types/globa_types"
import NotLoadErorr from "@/components/ui/NotLoadErorr"


const Plans = () => {
  const {
    isLoading,
    isError,
    plans
  } = useGetPlans()
  
  console.log(plans)

  return (
    <div id="plans">
      <PageHeader title="اشتراک من" />

      <CurrentPlan  />

      <div className="w-full text-center mt-10">
        <h1 className="font-bold text-lg">پلن‌های اشتراک</h1>

        <span className="text-zinc-600 dark:text-zinc-400 mb-5 inline-block text-base mt-2">
          پلن متناسب با نیاز خود را انتخاب کنید و از تمام امکانات بهره‌مند شوید.
        </span>

        {
          isLoading
            ? (
              <PlansSkeleton />
            )
            : isError
              ? (
                <NotLoadErorr />
              )
              : (
                <div className="grid !grid-cols-1 lg:!grid-cols-3 gap-5 w-full">
                  {
                    plans?.map((item: IPlan) => (
                      item.is_active && (<PlanCard key={item.id} {...item} />)
                    ))
                  }
                </div>
              )
        }


      </div>
    </div>
  )
}

export default Plans