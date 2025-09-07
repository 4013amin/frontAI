import React from "react"
import { UseFormRegister } from "react-hook-form"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "../shadcn/Textarea"

type IProps = {
  register: UseFormRegister<any>
  name: string
  error?: string
  label?: string
  placeholder: string
  className?: string
  labelIcon?: React.ReactNode
  rows?: number
}

const CustomTextarea = (props: IProps) => {
  const {
    register,
    name,
    error,
    label,
    placeholder,
    className,
    labelIcon,
    rows  
  } = props

  return (
    <div className="w-full">
      {
        label && (
          <Label className="text-sm flex items-center mb-2 text-zinc-500 gap-2 font-medium">
            {labelIcon && labelIcon}

            {label}
          </Label>
        )
      }


      <Textarea
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        className={`w-full${className ? ` ${className}` : ""}`}
        rows={rows}
      />

      {
        error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )
      }
    </div>
  )
}

export default CustomTextarea