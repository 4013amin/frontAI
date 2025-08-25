import { Users } from "lucide-react"
import CustomTextareaController from "@/components/ui/CustomTextareaController"

const CustomInstructions = ({ control }: any) => (
  <CustomTextareaController
    control={control}
    name="custom_instructions"
    placeholder="مثال: شامل مثال‌های واقعی از ایران، تمرکز بر سئو"
    label="دستورالعمل‌های اضافی (اختیاری)"
    labelIcon={<Users size={17} />}
  />
)

export default CustomInstructions