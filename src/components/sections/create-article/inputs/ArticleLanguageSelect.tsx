import { Languages } from "lucide-react"
import { Controller } from "react-hook-form"
import CustomSelect from "@/components/ui/CustomSelect"

const ArticleLanguageSelect = ({ control, error }: any) => (
  <Controller
    name="article_language"
    control={control}
    render={
      ({ field }) => (
        <CustomSelect
          field={field}
          label="زبان مقاله"
          emptyOptionLabel="انتخاب زبان"
          labelIcon={<Languages size={17} />}
          options={
            [
              { value: "fa", label: "فارسی" },
              { value: "en", label: "انگلیسی" },
              { value: "auto", label: "خودکار" },
              { value: "custom", label: "سایر" }
            ]
          }
          error={error}
        />
      )
    }
  />
)

export default ArticleLanguageSelect