"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/Form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/shadcn/InputOtp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import FormFooter from "./FormFooter";
import { OtpFormSchema } from "@/lib/schemas";
import useVerifyOtp from "./hooks/useVerifyOtp";

export function InputOTPForm() {
  const { mutate, isPending } = useVerifyOtp();
  const form = useForm<z.infer<typeof OtpFormSchema>>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: z.infer<typeof OtpFormSchema>) {
    mutate({code: data.otp})
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 flex-center flex-col mt-4"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem style={{ direction: "ltr", justifyContent: "center" }}>
              <FormControl>
                <InputOTP
                  width={250}
                  maxLength={6}
                  {...field}
                  pattern={REGEXP_ONLY_DIGITS}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage className="text-center mt-2" />
            </FormItem>
          )}
        />
        <FormFooter isPending={isPending} text="تایید کد" isOtpForm={true} />
      </form>
    </Form>
  );
}
