"use client"
import React from "react";
import FormFooter from "../FormFooter";
import { Input } from "@/components/shadcn/Input";
import FormHeader from "../FormHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "@/lib/schemas";
import z from "zod";
import useSubmitRegister from "../hooks/useSubmitRegister";
import { IFullName } from "@/components/types";

const RegisterForm = () => {
  const { mutate, isPending, isError, isSuccess } = useSubmitRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullname: "",
    },
  });

  const submitForm = (data: IFullName) => {
    mutate(data.full_name);
  };

  return (
    <div className="flex-center flex-col gap-2">
      <FormHeader
        title="فقط یک قدم دیگر!"
        desc="برای تجربه بهتر، لطفا نام خود را وارد کنید"
      />

      <form
        onSubmit={handleSubmit((data) =>
          submitForm({ full_name: data.fullname })
        )}
        className="w-full flex-center flex-col gap-4"
      >
        <Input
          {...register("fullname")}
          type="text"
          maxLength={11}
          placeholder="نام و نام‌خانوادگی"
          aria-invalid={errors.fullname?.message ? "true" : "false"}
          className="max-w-[380px] mt-3"
        />
        {errors.fullname?.message && (
          <p className="text-red-500 text-sm">{errors.fullname.message}</p>
        )}

        <FormFooter isPending={isPending} text="دریافت کد" />
      </form>
    </div>
  );
};

export default RegisterForm;
