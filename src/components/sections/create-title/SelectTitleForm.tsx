"use client"

import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SelectTitleFormSchema } from "@/lib/schemas"
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/RadioGroup"
import { Label } from "@/components/shadcn/Label"
import { Button } from "@/components/shadcn/Button"

type SelectTitleFormType = z.infer<typeof SelectTitleFormSchema>

type IProps = {
  titles: string[]
  tags: string
}

const SelectTitleForm = (props: IProps) => {
  const { titles, tags } = props

  const { control, handleSubmit } = useForm<SelectTitleFormType>({
    resolver: zodResolver(SelectTitleFormSchema),
    defaultValues: { selectedTitle: "" }
  })

  const onSubmit = (data: SelectTitleFormType) => {
    // eslint-disable-next-line no-console
    console.log("Selected title:", data.selectedTitle)
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
            <div className="text-center text-sm text-muted-foreground mb-5">
              کلیدواژه‌های انتخابی : <span className="font-medium">{tags}</span>
            </div>

            <Controller
              name="selectedTitle"
              control={control}
              render={
                ({ field }) => (
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
                )
              }
            />

            <Button type="submit" className="mt-4 w-full">
              تایید عنوان انتخابی
            </Button>
          </form>
        )
      }
    </>
  )
}

export default SelectTitleForm