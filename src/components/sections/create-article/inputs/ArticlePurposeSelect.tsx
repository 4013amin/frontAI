import { Target } from "lucide-react"
import { Controller } from "react-hook-form"
import CustomSelect from "@/components/ui/CustomSelect"

const ArticlePurposeSelect = ({ control, error }: any) => (
  <Controller
    name="article_purpose"
    control={control}
    render={
      ({ field }) => (
        <CustomSelect
          field={field}
          label="هذف مقاله"
          emptyOptionLabel="انتخاب هدف مقاله"
          labelIcon={<Target size={17} />}
          options={
            [
              { value: "informative", label: "اطلاع رسانی" },
              { value: "educational", label: "آموزشی" },
              { value: "promotional", label: "تبلیغاتی" },
              { value: "entertaining", label: "سرگرمی" }
            ]
          }
          error={error}
        />
      )
    }
  />
)

export default ArticlePurposeSelect