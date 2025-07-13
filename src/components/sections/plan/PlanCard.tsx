import React from "react"
import { IPlan } from "@/types/globa_types"

// {
// "username": "string",
//   "full_name": "string",
//   "phone": "string",
//   "subscription_active": true,
//   "subscription_end_date": "2025-07-13",
//   "jalali_subscription_date": "string",
//   "jalali_registration_date": "string",
//   "active_plan": {
//     "id": 0,
//     "title": "string",
//     "duration_months": 2147483647,
//     "price": 2147483647,
//     "is_active": true,
//     "is_trial": true,
//     "features": "string"
//   }


const PlanCard = (props: IPlan) => {
  const {
    id,
    title,
    duration_months,
    price,
    is_active,
    is_trial,
    features
  } = props

  return (
    <div
      className="plan-card border rounded-lg bg-white p-4" 
      data-id={id}
    >
      <h2>{title}</h2>

      <h3>{duration_months}</h3>
    </div>
  )
}

export default PlanCard