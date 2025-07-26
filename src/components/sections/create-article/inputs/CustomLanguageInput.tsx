import { Languages } from "lucide-react"
import CustomInput from "@/components/ui/CustomInput"

const CustomLanguageInput = ({ register, error }: any) => (
  <CustomInput
    register={register}
    name="custom_language"
    error={error}
    placeholder="مثلاً: فرانسوی"
    label="زبان دلخواه را وارد کنید"
    labelIcon={<Languages size={17} />}
  />
)

export default CustomLanguageInput