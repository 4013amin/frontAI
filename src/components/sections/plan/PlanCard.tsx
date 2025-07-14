import React from "react"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { IPlan } from "@/types/globa_types"

const fu = [
  "ویژگی شماره یک",
  "ویژگی شماره دو",
  "ویژگی شماره سه",
  "ویژگی شماره چهار"
]

const PlanCard = (props: IPlan) => {
  const {
    id,
    title,
    duration_months,
    price,
    is_trial,
    features
  } = props

  const isPopular = duration_months === 3 ? true : false
  const formattedPrice = price.toLocaleString()

  return (
    <div
      className="overflow-hidden rounded-xl p-[1px] mb-10 
      bg-[linear-gradient(to_bottom,_white_50%,_#c9c9c9_100%)]"
    >
      <div
        className="plan-card rounded-lg text-right 
        min-h-36 rounded-xl bg-white bg-gradient-to-b from-white to-zinc-50"
        data-id={id}
      >
        {/* CARD HEADER */}  
        <div
          className={
            `card-header border border-2 border-zinc-100 rounded-xl p-6 
          ${isPopular ? "bg-blue-500" : ""}`
          }
        >
          <h2 className={`font-bold text-lg ${isPopular ? "text-white" : ""}`}>{title}</h2>

          <p className={`text-sm text-slate-500 my-2 ${isPopular ? "text-white" : ""}`}>مناسب برای کسب و کارهای کوچک</p>

          <div className="flex items-center gap-2 mt-4">
            <span className={`block ${isPopular ? "text-white" : ""}`}>{
              is_trial
                ? (
                  <>
                    <strong className="text-lg font-bold">7</strong> 

                    <span> روزه </span>
                  </>
                )
                : (
                  <>
                    <strong className="text-lg font-bold">
                      {duration_months}
                    </strong> 

                    <span> ماهه </span>
                  </>
                )
            }
            </span>

            <span className="text-slate-300">/</span>

            <span className={`${isPopular ? "text-white" : "text-blue-500"}`}>
              {price === 0  ? "رایگان" : `${formattedPrice} تومان`}
            </span>
          </div>

          <Link
            href="" 
            className="bg-blue-500 py-2 w-full block text-white rounded-full text-center
            text-[15px] mt-5"
          >
            {is_trial ? "فعالسازی رایگان" : "خرید و فعالسازی"}
          </Link>
        </div>

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