import z from "zod"
import { SITE_REGEX } from "./regex"

const LoginFormSchema = z.object({
  phone: z
    .string({ message: "لطفا این قسمت را خالی نگذارید" })
    .min(1, { message: "لطفا این قسمت را خالی نگذارید" })
    .max(11, { message: "شماره تلفن نباید بیشتر از 11 رقم باشد" })
    .regex(/((09)|(\+?989))\d{9}/g, { message: "شماره تلفن را به درستی وارد نکرده اید" })
})

const OtpFormSchema = z.object({
  otp: z.string({ message: "لطفا این قسمت را خالی نگذارید" })
    .min(6, { message: "کد تایید باید 6 رقم باشد" }) 
})

const RegisterFormSchema = z.object({
  fullname: z.string({ message: "لطفا این قسمت را خالی نگذارید" }).min(3, { message: "حداقل 3 کاراکتر وارد کنید" })
    .max(30, { message: "نام نمی‌ تواند بیشتر از 30 کاراکتر باشد" })
})


const NewSiteFormSchema = z.object({
  name: z.string({ message: "لطفا یک نام برای سایت انتخاب کنید" })
    .min(3, { message: "حداقل 3 کاراکتر وارد کنید" })
    .max(30, { message: "نام نمی‌ تواند بیشتر از 30 کاراکتر باشد" }),
  site_url: z.string("لطفا آدرس سایت را وارد کنید")
    .regex(SITE_REGEX, "آدرس وارد شده معتبر نیست")
    .min(8, { message: "حداقل 8 کاراکتر وارد کنید" })
    .max(200, { message: "آدرس سایت نمی‌ تواند بیشتر از 200 کاراکتر باشد" }),
  username: z.string({ message: "لطفا نام کاربری را وارد نمایید" })
    .min(3, { message: "حداقل 3 کاراکتر وارد کنید" })
    .max(120, { message: "نام کاربری نمی‌ تواند بیشتر از 120 کاراکتر باشد" }),
  app_password: z.string({ message: "لطفا app password را وارد نمایید" })
    .min(3, { message: "حداقل 3 کاراکتر وارد کنید" })
    .max(350, { message: "app password نمی‌ تواند بیشتر از 350 کاراکتر باشد" })
})

const EditSiteFormSchema = z.object({
  name: z.string({ message: "لطفا یک نام برای سایت انتخاب کنید" })
    .min(3, { message: "حداقل 3 کاراکتر وارد کنید" })
    .max(30, { message: "نام نمی‌ تواند بیشتر از 30 کاراکتر باشد" }),
  site_url: z.string({ message: "لطفا آدرس سایت را وارد کنید" })
    .regex(SITE_REGEX, "آدرس وارد شده معتبر نیست")
    .min(8, { message: "حداقل 8 کاراکتر وارد کنید" })
    .max(200, { message: "آدرس سایت نمی‌ تواند بیشتر از 200 کاراکتر باشد" }),
  username: z.string({ message: "لطفا نام کاربری را وارد نمایید" })
    .min(3, { message: "حداقل 3 کاراکتر وارد کنید" })
    .max(120, { message: "نام کاربری نمی‌ تواند بیشتر از 120 کاراکتر باشد" }),
  app_password: z.string()
    .max(350, { message: "app password نمی‌ تواند بیشتر از 350 کاراکتر باشد" })
    .optional()
    .refine(
      val => val === undefined || val.trim().length === 0 || val.length >= 3, 
      { message: "اگر app password وارد شود، حداقل باید 3 کاراکتر باشد" }
    )
})

export {
  LoginFormSchema, OtpFormSchema, RegisterFormSchema,
  NewSiteFormSchema, EditSiteFormSchema
}