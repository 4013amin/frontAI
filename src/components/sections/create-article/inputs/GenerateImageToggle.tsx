import { Controller } from "react-hook-form"
import { Switch } from "@/components/shadcn/Switch"

const GenerateImageToggle = ({ control }: any) => (
  <Controller
    name="generate_image_option"
    control={control}
    render={
      ({ field }) => (
        <div className="flex items-center gap-3">
          <Switch
            checked={field.value}
            onCheckedChange={field.onChange}
            id="generate-image"
          />

          <label htmlFor="generate-image" className="text-sm text-muted-foreground cursor-pointer">
            تولید تصویر شاخص برای مقاله
          </label>
        </div>
      )
    }
  />
)

export default GenerateImageToggle