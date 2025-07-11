"use client";
import { LoginFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import FormFooter from "./FormFooter";
import useVerifyOtp from "./hooks/useVerifyOtp";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";


const OtpForm = () => {
  const hasPhoneNumber = useSelector(
    (state: RootState) => state.auth.phoneNumber
  );
  const navigator = useRouter()
  const { mutate, isPending } = useVerifyOtp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      phone: "",
    },
  });

  const submitForm = (phone) => {
    mutate(phone.phone);
  };

  useEffect(() => {
    if(!hasPhoneNumber) {
      navigator.replace("/auth/login")
    }
  }, [])

  return (
    <div className="flex-center flex-col gap-2">
      {/* Form Header  */}
      <h1 className="text-lg font-semibold">تایید کد</h1>
      <p className="text-sm text-slate-500">لطفا کد پیامک شده را وارد کنید</p>
      {/* End of Form Header  */}

      <form
        onSubmit={handleSubmit((data) => submitForm({ phone: data.phone }))}
        className="w-full flex-center flex-col gap-4"
      >
        <FormFooter isPending={isPending} text="تایید کد" isOtpForm={true} />
      </form>
    </div>
  );
};

export default OtpForm;
