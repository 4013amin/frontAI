"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux"
import { useRouter } from "nextjs-toploader/app"
import { toast } from "sonner"
import { z } from "zod"
import { setSelectedArticleTitle } from "@/store/features/userInfoSlice"
import { SelectTitleFormSchema } from "@/lib/schemas"
import { Button } from "@/components/shadcn/Button"
import { Label } from "@/components/shadcn/Label"
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/RadioGroup"

const schema = SelectTitleFormSchema
type FormType = z.infer<typeof schema>

type Props = {
  titles: string[]
  tags: string
  setTitles: React.Dispatch<React.SetStateAction<string[]>>
}

export default function SelectTitleForm({
  titles,
  tags,
  setTitles
}: Props) {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: { selectedTitle: "" }
  })

  const selectedTitle = watch("selectedTitle")

  const onSubmit = (data: FormType) => {
    dispatch(setSelectedArticleTitle(data.selectedTitle))
    toast.success("عنوان باموفقیت انتخاب شد")
    router.push("/panel/articles/create")
  }

  if (!titles.length) return null

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
      <h2 className="text-xl font-bold text-center">انتخاب عنوان نهایی</h2>

      <p className="text-center text-sm text-muted-foreground">
        از بین عنوان‌های پیشنهادی زیر، بهترین گزینه را انتخاب کنید.
      </p>

      <p className="text-center text-sm mt-4 text-muted-foreground">
        کلیدواژه‌های انتخابی: <span className="font-medium">{tags}</span>
      </p>

      <Controller
        name="selectedTitle"
        control={control}
        render={
          ({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} dir="rtl" className="grid gap-3">
              {
                titles.map((title, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem id={`title-${i}`} value={title} />

                    <Label htmlFor={`title-${i}`} className="cursor-pointer text-sm lg:text-base">
                      {title}
                    </Label>
                  </div>
                ))
              }
            </RadioGroup>
          )
        }
      />

      {
        errors.selectedTitle && (
          <p className="text-red-500 text-sm">{errors.selectedTitle.message}</p>
        )
      }

      <div className="flex flex-col-reverse md:flex-row gap-2 mt-8">
        <Button variant="outline" type="button" className="w-full md:w-1/3" onClick={() => setTitles([])}>
          بازگشت و ایجاد مجدد
        </Button>

        <Button
          type="submit"
          className="w-full md:w-2/3 bg-green-500 dark:text-white dark:hover:bg-green-800/60"
          disabled={!selectedTitle}
        >
          تایید عنوان انتخابی
        </Button>
      </div>
    </form>
  )
}