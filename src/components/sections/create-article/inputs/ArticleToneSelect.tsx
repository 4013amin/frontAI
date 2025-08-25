import { Brain } from "lucide-react"
import { Controller } from "react-hook-form"
import CustomSelect from "@/components/ui/CustomSelect"

const ArticleToneSelect = ({ control, error }: any) => (
  <Controller
    name="tone"
    control={control}
    render={
      ({ field }) => (
        <CustomSelect
          field={field}
          label="تنظیم لحن مقاله"
          emptyOptionLabel="انتخاب لحن"
          labelIcon={<Brain size={17} />}
          options={
            [
              { value: "formal", label: "رسمی" },
              { value: "conversational", label: "محاوره‌ای" },
              { value: "professional", label: "حرفه‌ای" },
              { value: "friendly", label: "دوستانه" }
            ]
          }
          error={error}
        />
      )
    }
  />
)

export default ArticleToneSelect