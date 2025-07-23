import React from "react"
import { UseFormRegister } from "react-hook-form"
import { Input } from "../shadcn/Input"
import { Label } from "../shadcn/Label"

type IProps = {
  register: UseFormRegister<any>
  name: string
  error?: string
  label?: string
  labelIcon?: React.ReactNode
  placeholder: string
  type?: string
}

const CustomInput = (props: IProps) => {
  const {
    register,
    name,
    error,
    label,
    labelIcon,
    placeholder,
    type = "text"
  } = props

  const handleEnterFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()

      const allInputs =
        Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[name], textarea[name]"))

      const currentIndex = allInputs.findIndex(input => input.name === name)
      const nextInput = allInputs[currentIndex + 1]

      nextInput?.focus()
    }
  }

  return (
    <div className="w-full text-right">
      {
        label && (
          <Label className="flex items-center mb-2 text-zinc-500">
            {labelIcon && labelIcon}

            {label}
          </Label>
        )
      }

      <Input
        {...register(name)}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        className="w-full"
        onKeyDown={handleEnterFocus}
      />

      {
        error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )
      }
    </div>
  )
}

export default CustomInput