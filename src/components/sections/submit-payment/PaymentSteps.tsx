"use client"

import React from "react"
import { CopyIcon, CheckCircle2, UploadCloud } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/shadcn/Button"

const CARD_NUMBER = "6104338602735660"
const CARD_NAME = "محمدرضا حسینی"

function formatCardNumber(cardNumber: string) {
  return cardNumber.replace(/(.{4})/g, "$1 ").trim()
}

const steps = [
  {
    title: "واریز وجه",
    icon: CheckCircle2,
    content: (
      <>
        <p className="text-sm mb-4">مبلغ مشخص شده را به شماره کارت زیر واریز نمایید:</p>

        <div className="flex flex-col items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
          <div className="flex flex-row items-center gap-2">
            <span
              className="text-base sm:text-2xl font-bold tracking-widest select-all 
            ltr:font-mono rtl:font-mono text-blue-900 dark:text-blue-100"
              style={{ direction: "ltr" }}
            >
              {formatCardNumber(CARD_NUMBER)}
            </span>

            <Button
              size="icon"
              variant="outline"
              onClick={
                async () => {
                  await navigator.clipboard.writeText(CARD_NUMBER)
                  toast.success("شماره کارت کپی شد!")
                }
              }
              aria-label="کپی شماره کارت"
            >
              <CopyIcon className="size-5" />
            </Button>
          </div>

          <span className="text-sm text-blue-900 dark:text-blue-200">
            به نام: {CARD_NAME}
          </span>
        </div>
      </>
    )
  },
  {
    title: "ارسال فیش پرداخت",
    icon: UploadCloud,
    content: (
      <>
        <p className="text-sm mb-4">پس از پرداخت، فیش را در فرم پایین ارسال کنید.</p>

        <ul className="list-disc pr-4 text-sm text-blue-900 dark:text-blue-200 space-y-1 mt-2">
          <li>بعد از ارسال فیش، نهایتا تا ۱۲ ساعت پلن برای شما فعال می‌شود.</li>

          <li>از ارسال مجدد خودداری نمایید.</li>

          <li>در صورت نیاز به مشاوره، از قسمت تیکت‌ها استفاده کنید.</li>
        </ul>
      </>
    )
  }
]

const PaymentSteps = () => {
  return (
    <div className="w-full border rounded-lg p-3">
      {/* Vertical Stepper */}
      <div className="flex flex-col items-start gap-0 relative">
        {
          steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = idx === 0
            const isLast = idx === steps.length - 1

            return (
              <div key={idx} className="flex items-start w-full relative gap-3 min-h-[100px]">
                {/* Timeline and Icon */}
                <div className=" flex-col items-center hidden md:!flex">
                  <div
                    className={
                      `flex items-center justify-center size-12 rounded-full bg-white dark:bg-zinc-900 shadow-md z-10
                    ${isActive ? "ring-2 ring-blue-400" : "ring-1 ring-zinc-200 dark:ring-zinc-700"}`
                    }
                  >
                    <Icon className={`size-5 lg:size-7 ${isActive ? "text-blue-500" : "text-blue-400"}`} />
                  </div>

                  {
                    !isLast && (
                      <div
                        className="w-px h-32 bg-gradient-to-b from-blue-200 to-blue-400
                      dark:from-blue-900 dark:to-blue-700 my-1"
                      />
                    )
                  }
                </div>

                {/* Title and Content */}
                <div className="flex-1 pt-2 mb-4">
                  <span
                    className={
                      `font-bold ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-blue-500 dark:text-blue-300"
                      }`
                    }
                  >
                    {step.title}
                  </span>

                  {/* محتوای مرحله نمایش داده شود */}
                  <div className="mt-2">{step.content}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PaymentSteps