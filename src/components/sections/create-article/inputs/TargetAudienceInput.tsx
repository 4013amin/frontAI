import { Users } from "lucide-react"
import CustomInput from "@/components/ui/CustomInput"

const TargetAudienceInput = ({ register, error }: any) => (
  <CustomInput
    register={register}
    name="target_audience"
    error={error}
    placeholder="مخاطب هدف مقاله (مثل: بانوان)"
    label="مخاطب هدف"
    labelIcon={<Users size={17} />}
  />
)

export default TargetAudienceInput