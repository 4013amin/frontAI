import { Hash } from "lucide-react"
import CustomInput from "@/components/ui/CustomInput"

const ArticleAdditionalKeywords = ({ register, error }: any) => (
  <CustomInput
    register={register}
    name="additional_keywords"
    error={error}
    placeholder="سئو در تهران، سئو در اسلامشهر و..."
    label="کلمات کلیدی اضافی (اختیاری)"
    labelIcon={<Hash size={17} />}
  />
)

export default ArticleAdditionalKeywords