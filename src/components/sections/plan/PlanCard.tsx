import React from "react"
import { CheckCircle } from "lucide-react"
import CardHeader from "./CardHeader"
import { IPlan } from "@/types/globa_types"

const randomCount = Math.floor(Math.random() * 8) + 1 // عددی بین 1 تا 8
const fu = Array.from({ length: randomCount }, () => "")


const PlanCard = (props: IPlan) => {
  const { id, duration_months } = props

  const isPopular = duration_months === 3 ? true : false


  return (
    <div
      className="overflow-hidden rounded-xl p-[1px] mb-10 
      !bg-[linear-gradient(to_bottom,_white_50%,_#c9c9c9_100%)]
      dark:!bg-[linear-gradient(to_bottom,_#000_50%,_#2b2b2b_100%)]"
    >
      <div
        className="plan-card rounded-lg text-right min-h-36 rounded-xl
         !bg-[linear-gradient(to_bottom,_white_50%,_#f0f0f0_100%)]
          dark:!bg-[linear-gradient(to_bottom,_#000_50%,_#0f0f0f_100%)]
          min-h-[100%]
         "
        data-id={id}
      >
        {/* CARD HEADER */}  
        <CardHeader plan={props} isPopular={isPopular} />

        {/* END OF CARD HEADER */}

        {/* Features SECTION */}
        <div className="flex flex-col mt-12 p-3 gap-3">
          {
            fu.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-2 border-b pb-2 "
              >
                <CheckCircle size={15} />

                {item}
              </span>
            ))
          }
        </div>

        {/* END OF Features SECTION */}

      </div>
    </div>
  )
}

export default PlanCard