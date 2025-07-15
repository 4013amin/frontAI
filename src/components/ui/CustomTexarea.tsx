import React from "react"
import { UseFormRegister } from "react-hook-form"
import { Textarea } from "../shadcn/Textarea"

type IProps = {
  register: UseFormRegister<any>
  name: string
  error?: string
  label?: string
  placeholder: string
}

const CustomTextarea = (props: IProps) => {
  const {
    register,
    name,
    error,
    label,
    placeholder
  } = props

  return (
    <div className="w-full">
      {
        label && (
          <label className="text-sm " >
            {label}
          </label>
        )
      }

      <Textarea
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        className="w-full"
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