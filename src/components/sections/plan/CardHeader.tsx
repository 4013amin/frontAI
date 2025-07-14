import React from "react"
import Link from "next/link"
import { IPlan } from "@/types/globa_types"

type IProps = {
  plan: IPlan
  isPopular: boolean
}


const CardHeader = ({ plan, isPopular }: IProps) => {
  const {
    id,
    title,
    duration_months,
    price,
    is_trial
  } = plan
  

  const formattedPrice = price.toLocaleString()

  return (
    <div
      className={
        `card-header border border-2 border-zinc-100 rounded-xl p-6 
          dark:border-zinc-800 ${isPopular ? "bg-blue-500" : ""}`
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

      {
        is_trial
          ? (
            <button
              className="bg-green-600 py-2 w-full block text-white rounded-full text-center
                text-[15px] mt-5 cursor-pointer hover:!bg-green-500" 
              type="button"
            >
              فعالسازی رایگان
            </button>
          )
          : (
            <Link
              href={`/panel/submit-payment/${id}`}
              className={
                ` py-2 w-full block  rounded-full text-center text-[15px] mt-5  
                ${isPopular ? "bg-white text-blue-500 hover:bg-slate-100" : "bg-blue-500 text-white hover:bg-blue-600"}`
              }
            >
              خرید و فعالسازی
            </Link>
          )
      }
    </div>
  )
}

export default CardHeader