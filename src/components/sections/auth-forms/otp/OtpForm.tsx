"use client"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { InputOTPForm } from "./InputOTPForm"
import FormHeader from "../FormHeader"
import { RootState } from "@/store/store"

const OtpForm = () => {
  const phoneNumber = useSelector((state: RootState) => state.auth.phoneNumber)

  const navigator = useRouter()

  useEffect(() => {
    if (!phoneNumber) {
      navigator.replace("/auth/login")
    }
  }, [])

  return (
    <div className="flex-center flex-col gap-2">
      <FormHeader title="تایید کد" desc={`لطفا کد پیامک شده به ${phoneNumber} را وارد کنید`} />

      <InputOTPForm />
    </div>
  )
}

export default OtpForm