"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/shadcn/Input";
import { LoginFormSchema } from "@/lib/schemas";
import FormFooter from "./FormFooter";
import useRequestOtp from "./hooks/useRequestOtp";
import { IPhoneNumber } from "@/components/types";
import { useDispatch } from 'react-redux';
import { setPhoneNumber } from "@/store/features/authSlice";


const LoginForm = () => {
  const dispatch = useDispatch();
  const { mutate, isPending } = useRequestOtp();
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

  const submitForm = (phone: IPhoneNumber) => {
    dispatch(setPhoneNumber(phone.phone))
    mutate(phone.phone);
  };

  return (
    <div className="flex-center flex-col gap-2">
      {/* Form Header  */}
      <h1 className="text-lg font-semibold">ورود و عضویت</h1>
      <p className="text-sm text-slate-500 dark:text-slate-200">
        لطفا برای ادامه شماره تلفن خود را وارد کنید
      </p>
      {/* End of Form Header  */}

      <form
        onSubmit={handleSubmit((data) => submitForm({ phone: data.phone }))}
        className="w-full flex-center flex-col gap-4"
      >
        <Input
          {...register("phone")}
          type="number"
          maxLength={11}
          placeholder="شماره تماس"
          aria-invalid={errors.phone?.message ? "true" : "false"}
          className="max-w-[380px] mt-3"
        />
        {errors.phone?.message && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}

        <FormFooter isPending={isPending} text="دریافت کد" />
      </form>
    </div>
  );
};

export default LoginForm;
