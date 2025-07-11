"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/shadcn/Input";
import { Button } from "@/components/shadcn/Button";
// import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginFormSchema } from "@/lib/schemas";


const LoginForm = () => {
    const navigator = useRouter()
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

  const navigateToOtpPage = () => navigator.push("/auth/verify");

  return (
    <div className="flex-center flex-col gap-2">
      {/* Form Header  */}
      <h1 className="text-lg font-semibold">ورود و عضویت</h1>
      <p className="text-sm text-slate-500">
        لطفا برای ادامه شماره تلفن خود را وارد کنید
      </p>
      {/* End of Form Header  */}

      <form
        onSubmit={handleSubmit(() => {
          setTimeout(() => {
            navigateToOtpPage()
          }, 2000);
        })}
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

        <Button
          type="submit"
          className="max-w-[380px] w-full bg-blue-500"
          size="lg"
        >
          {/* <Loader2Icon className="animate-spin" /> */}
          ورود
        </Button>

        <div>
          <span className="text-xs font-light">
            ورود شما به معنای پذیرش شرایط بینام و<Link href={"#"} className="text-blue-500"> قوانین حریم‌خصوصی </Link>
            است
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
