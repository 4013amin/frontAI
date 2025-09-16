import React from "react"
import { Loader2 } from "lucide-react"
import { ControllerRenderProps } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../shadcn/Select"
import { Label } from "../shadcn/Label"

type Option = {
  value: string
  label: string
  icon?: React.ReactNode 
}

type IProps = {
  field: ControllerRenderProps<any, any>
  label?: string
  error?: string
  options: Option[]
  isLoading?: boolean
  emptyOptionLabel?: string
  labelIcon?: React.ReactNode
  disabled?: boolean
}

export default function CustomSelect({
  field,
  label,
  error,
  options,
  isLoading = false,
  emptyOptionLabel = "انتخاب کنید",
  labelIcon,
  disabled
}: IProps) {

  return (
    <div className="w-full text-right">
      {
        label && 
        <Label className="flex items-center mb-2 text-zinc-500">
          {labelIcon && labelIcon}

          {label}
        </Label>
      }

      <Select onValueChange={field.onChange} value={field.value} disabled={disabled}>
        <SelectTrigger className="w-full flex-row-reverse justify-between text-right">
          <SelectValue
            placeholder={isLoading ? "در حال بارگذاری" : emptyOptionLabel}
            className="text-right"
          />
        </SelectTrigger>

        <SelectContent className="text-right">
          {
            isLoading
              ? (
                <div className="flex items-center justify-center py-2 gap-2 text-sm text-muted-foreground">
                  در حال بارگذاری 
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </div>
              )
              : (
                options.map(opt => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value} 
                    className="flex gap-2 items-center justify-end"
                  >
                    {opt.icon && <span className="ml-2">{opt.icon}</span>}

                    {opt.label}
                  </SelectItem>
                ))
              )
          }
        </SelectContent>
      </Select>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}