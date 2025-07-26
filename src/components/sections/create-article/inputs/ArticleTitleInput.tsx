import { PenIcon } from "lucide-react"
import CustomInput from "@/components/ui/CustomInput"

const ArticleTitleInput = ({ register, error }: any) => (
  <CustomInput
    register={register}
    name="title"
    error={error}
    placeholder="عنوان مقاله را وارد کنید"
    label="عنوان مقاله"
    labelIcon={<PenIcon size={17} />}
  />
)

export default ArticleTitleInput