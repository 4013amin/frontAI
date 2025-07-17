import React from "react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { Star } from "lucide-react"
import useActiveTrialPlan from "./hooks/useActiveTrialPlan"
import { IPlan } from "@/types/globa_types"
import { RootState } from "@/store/store"
import { IPlanId } from "@/components/types"

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
    is_trial,
    description
  } = plan

  const currentPlanId = useSelector((state: RootState) => state.userInfo.currentPlanId)

  const {
    mutate,
    isPending,
    isSuccess
  } = useActiveTrialPlan()
  
  const formattedPrice = price.toLocaleString()

  const activeTrialPlanHandler = (id: IPlanId): void => {
    mutate(id)
  }


  return (
    <div
      className={
        `card-header border border-2 border-zinc-100 rounded-xl p-6 
          dark:border-zinc-800 relative ${isPopular ? "bg-blue-500" : ""}`
      }
    >

      {/* Current plan Badge */}
      {
        currentPlanId === String(id) && (
          <span
            className="absolute top-2 left-2 bg-green-500 py-1 px-2 rounded-full
          text-white text-sm flex-center gap-2 dark:bg-green-500/50"
          >
            <Star size={15} />
            پلن فعلی شما
          </span>
        )
      }

      {/* End of Current plan Badge */}

      <h2 className={`font-bold text-lg ${isPopular ? "text-white" : ""}`}>{title}</h2>

      <p className={`text-sm text-slate-500 my-2 ${isPopular ? "text-white" : ""}`}>{description}</p>

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
              disabled={isPending || isSuccess}
              onClick={() => activeTrialPlanHandler(id)}
              className={
                `py-2 w-full block rounded-full text-center disabled:cursor-progress
                text-[15px] mt-5 cursor-pointer bg-blue-500 text-white hover:bg-blue-600
                ${isPending ? "cursur-auto" : ""}`
              }
              type="button"
            >
              {
                !isSuccess
                  ? (
                    isPending
                      ? (
                        "درحال فعالسازی..."
                      )
                      : (
                        "فعالسازی رایگان"
                      )
                  )
                  : (
                    "پلن رایگان برای شما فعال شد"
                  )
              }
            </button>
          )
          : (
            <Link
              href={`/panel/payments/submit/${id}`}
              className={
                ` py-2 w-full block rounded-full text-center text-[15px] mt-5  
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