import React from "react"
import { Control, Controller, useFormState } from "react-hook-form"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "../shadcn/Textarea"

type IProps = {
  control: Control<any>
  name: string
  label?: string
  placeholder: string
  className?: string
  labelIcon?: React.ReactNode
}

const CustomTextareaController = (props: IProps) => {
  const {
    control,
    name,
    label,
    placeholder,
    className,
    labelIcon
  } = props

  const formState = useFormState({ control })
  const error = formState?.errors?.[name]?.message as string | undefined

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

      <Controller
        control={control}
        name={name}
        render={
          ({ field }) => (
            <Textarea
              {...field}
              placeholder={placeholder}
              aria-invalid={error ? "true" : "false"}
              className={`w-full${className ? ` ${className}` : ""}`}
            />
          )
        }
      />

      {
        error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )
      }
    </div>
  )
}

export default CustomTextareaController