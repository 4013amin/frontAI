"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

import { InputOTPForm } from "./OtpFormFieldes";

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
      {/* Form Header  */}
      <h1 className="text-lg font-semibold">تایید کد</h1>
      <p className="text-sm text-slate-500 dark:text-slate-200">لطفا کد پیامک شده را وارد کنید</p>
      {/* End of Form Header  */}

      <InputOTPForm />
      
    </div>
  );
};

export default OtpForm;
