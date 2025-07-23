"use client"

import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux"
import { useRouter } from "nextjs-toploader/app"
import { toast } from "sonner"
import React from "react"
import { SelectTitleFormSchema } from "@/lib/schemas"
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/RadioGroup"
import { Label } from "@/components/shadcn/Label"
import { Button } from "@/components/shadcn/Button"
import { setSelectedArticleTitle } from "@/store/features/userInfoSlice"


type SelectTitleFormType = z.infer<typeof SelectTitleFormSchema>

type IProps = {
  titles: string[]
  tags: string
  setTitles: React.Dispatch<React.SetStateAction<string[]>>
}

const SelectTitleForm = (props: IProps) => {
  const navigator = useRouter()
  const dispatch = useDispatch()

  const {
    titles,
    tags,
    setTitles
  } = props

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<SelectTitleFormType>({
    resolver: zodResolver(SelectTitleFormSchema),
    defaultValues: { selectedTitle: "" }
  })

  const selectedTitle = watch("selectedTitle")

  const onSubmit = (data: SelectTitleFormType) => {
    dispatch(setSelectedArticleTitle(data.selectedTitle))
    navigator.push("/panel/articles/create")
    toast.success("عنوان باموفقیت انتخاب شد")
  }

  return (
    <>
      <h2 className="font-bold text-xl text-center mt-4">انتخاب عنوان نهایی</h2>

      <p className="text-sm text-center mt-4 text-zinc-600 dark:text-zinc-300">
        از بین عنوان‌های پیشنهادی زیر، بهترین گزینه را انتخاب کنید.  
        این عنوان‌ها بر اساس کلمات کلیدی شما تولید شده‌اند.
      </p>

      {
        titles && titles.length > 0 && (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div className="text-center text-sm text-muted-foreground mb-8">
              کلیدواژه‌های انتخابی : <span className="font-medium">{tags}</span>
            </div>

            <Controller
              name="selectedTitle"
              control={control}
              render={
                ({ field }) => (
                  <>
                    <RadioGroup
                      className="grid gap-3"
                      value={field.value}
                      onValueChange={field.onChange}
                      dir="rtl"
                    >
                      {
                        titles.map((title, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem
                              id={`title-${index}`}
                              value={title}
                            />

                            <Label 
                              htmlFor={`title-${index}`} 
                              className="cursor-pointer !text-sm/5 lg:!text-base/6"
                            >
                              {title}
                            </Label>
                          </div>
                        ))
                      }
                    </RadioGroup>

                    {
                      errors.selectedTitle && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.selectedTitle.message}
                        </p>
                      )
                    }

                  </>
                  
                )
              }
            />

            <div className="flex-center gap-2 max-w-full mt-10 flex-col-reverse md:flex-row">
              <Button
                type="button"
                className="w-full md:w-1/3"
                onClick={() => setTitles([])}
                variant="outline"
              >
                بازگشت و ایجاد مجدد
              </Button>

              <Button 
                disabled={!selectedTitle}
                type="submit" 
                className="w-full md:w-2/3 bg-green-500 dark:text-white dark:hover:bg-green-800/60"
              >
                تایید عنوان انتخابی
              </Button>
            </div>
          </form>
        )
      }
    </>
  )
}

export default SelectTitleForm