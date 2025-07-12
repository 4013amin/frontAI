"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

import { InputOTPForm } from "./InputOTPForm";
import FormHeader from "../FormHeader";

const OtpForm = () => {
  const hasPhoneNumber = useSelector(
    (state: RootState) => state.auth.phoneNumber
  );
  const navigator = useRouter();

  useEffect(() => {
    if (!hasPhoneNumber) {
      navigator.replace("/auth/login");
    }
  }, []);

  return (
    <div className="flex-center flex-col gap-2">
      <FormHeader title="تایید کد" desc="لطفا کد پیامک شده را وارد کنید" />

      <InputOTPForm />
    </div>
  );
};

export default OtpForm;
