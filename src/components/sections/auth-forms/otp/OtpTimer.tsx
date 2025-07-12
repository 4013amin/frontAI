"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { Loader2Icon, PencilLine } from "lucide-react"
import { useSelector } from "react-redux"
import useOtpTimer from "../hooks/useOtpTimer"
import useRequestOtp from "../hooks/useRequestOtp"
import { RootState } from "@/store/store"
import { Button } from "@/components/shadcn/Button"

const OtpTimer = () => {
  const phone_number = useSelector((state: RootState) => state.auth.phoneNumber)

  const {
    mutate,
    isPending,
    isSuccess
  } = useRequestOtp()

  const {
    isTimerComplete,
    isTimerRunning,
    startTimer,
    formatTime,
    resetTimer
  } = useOtpTimer()

  const resendCode = () => {
    mutate(phone_number)
  }

  // First Load start timer
  useEffect(() => {
    startTimer()
  }, [])

  useEffect(() => {
    if (isTimerComplete) {
      resetTimer()
      startTimer()
    }
    else return
  }, [isSuccess])

  return (
    <div>
      <div className="flex-center flex-col">
        {
          isTimerRunning && (
            <span className="text-sm text-slate-500 mb-3 dark:text-salte-300 ">
              {formatTime()} ثانیه تا ارسال مجدد
            </span>
          )
        }

        {
          !isTimerRunning && isTimerComplete && (
            <Button
              type="button"
              className="max-w-[380px] w-full bg-gray-500 mb-3
            dark:bg-gray-800 dark:text-white hover:dark:bg-gray-700"
              size="lg"
              disabled={isPending}
              onClick={resendCode}
            >
              {
                isPending
                  ? (
                    <Loader2Icon className="animate-spin" />
                  )
                  : (
                    "ارسال مجدد کد تایید"
                  )
              }
            </Button>
          )
        }

        <Link
          href="/auth/login"
          className="font-sm text-blue-500 flex-center gap-3 dark:text-blue-400"
        >
          <PencilLine />
          ویراش شماره تلفن
        </Link>
      </div>
    </div>
  )
}

export default OtpTimer