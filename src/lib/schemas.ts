import z from "zod";

const LoginFormSchema = z.object({
    phone: z
        .string({
            message: "لطفا این قسمت را خالی نگذارید",
        })
        .min(1, { message: "لطفا این قسمت را خالی نگذارید" })
        .max(11, { message: "شماره تلفن نباید بیشتر از 11 رقم باشد" })
        .regex(/((0?9)|(\+?989))\d{9}/g, {
            message: "شماره تلفن را به درستی وارد نکرده اید",
        }),
});

const OtpFormSchema = z.object({
  otp: z.string({
    message: "لطفا این قسمت را خالی نگذارید"
  }).min(6, {
    message: "کد تایید باید 6 رقم باشد",
  }),
})


export { LoginFormSchema, OtpFormSchema }