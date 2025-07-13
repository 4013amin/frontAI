import React from "react"
import PlanCard from "./PlanCard"
import PageHeader from "@/components/ui/PageHeader"

const plans = [
  {
    "id": 0,
    "title": "string",
    "duration_months": 2147483647,
    "price": 2147483647,
    "is_active": true,
    "is_trial": true,
    "features": "string"
  }
]

const Plans = () => {
  return (
    <div id="plans">
      <PageHeader title="اشتراک من" />

      <div>
        {
          plans.map(item => (
            <PlanCard key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Plans