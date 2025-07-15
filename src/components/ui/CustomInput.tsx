import React from "react"
import { UseFormRegister } from "react-hook-form"
import { Input } from "../shadcn/Input"
import { Label } from "../shadcn/Label"

type IProps = {
  register: UseFormRegister<any>  // یا فرم خاصت رو تایپ کن
  name: string
  error?: string
  label?: string
}

const CustomInput = (props: IProps) => {
  const {
    register,
    name,
    error,
    label
  } = props

  return (
    <div className="w-full">
      {
        label && (
          <Label >
            {label}
          </Label>
        )
      }

      <Input
        {...register(name)}
        type="name"
        maxLength={11}
        placeholder="شماره تماس"
        aria-invalid={error ? "true" : "false"}
        className="mt-3 w-full"
      />

      {
        error && (
          <p className="text-red-500 text-sm">{error}</p>
        )
      }
    </div>
  )
}

export default CustomInput