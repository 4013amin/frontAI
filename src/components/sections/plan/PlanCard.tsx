import React from "react"
import { IPlan } from "@/types/globa_types"


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
    <div className="plan-card" data-id={id}>
      <h2>{title}</h2>

      <h3>{duration_months}</h3>
    </div>
  )
}

export default PlanCard