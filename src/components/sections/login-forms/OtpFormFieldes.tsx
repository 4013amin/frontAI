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
  const { mutate, isPending, verifyError } = useVerifyOtp();
  const form = useForm<z.infer<typeof OtpFormSchema>>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: z.infer<typeof OtpFormSchema>) {
    mutate(data.otp);
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
                    <InputOTPSlot
                      index={0}
                      aria-invalid={Boolean(verifyError)}
                    />
                    <InputOTPSlot
                      index={1}
                      aria-invalid={Boolean(verifyError)}
                    />
                    <InputOTPSlot
                      index={2}
                      aria-invalid={Boolean(verifyError)}
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={3}
                      aria-invalid={Boolean(verifyError)}
                    />
                    <InputOTPSlot
                      index={4}
                      aria-invalid={Boolean(verifyError)}
                    />
                    <InputOTPSlot
                      index={5}
                      aria-invalid={Boolean(verifyError)}
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {verifyError && (
                <span className="text-sm text-red-400 text-center">
                  {verifyError}
                </span>
              )}
              <FormMessage className="text-center mt-2" />
            </FormItem>
          )}
        />
        <FormFooter isPending={isPending} text="تایید کد" isOtpForm={true} />
      </form>
    </Form>
  );
}
