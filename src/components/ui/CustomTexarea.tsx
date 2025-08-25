import React from "react"
import { UseFormRegister, Control, Controller, useFormState } from "react-hook-form"
import { Textarea } from "../shadcn/Textarea"

type IProps = {
  register?: UseFormRegister<any>
  control?: Control<any>
  name: string
  error?: string
  label?: string
  placeholder: string
  className?: string
}

const CustomTextarea = (props: IProps) => {
  const {
    register,
    control,
    name,
    error,
    label,
    placeholder,
    className
  } = props

  // هوک باید همیشه فراخوانی شود
  const formState = useFormState({ control: control })

  const formError = control && formState?.errors?.[name]
    ? (formState.errors[name]?.message as string)
    : error

  return (
    <div className="w-full">
      {
        label && (
          <label className="text-sm " >
            {label}
          </label>
        )
      }

      {
        control
          ? (
            <Controller
              control={control}
              name={name}
              render={
                ({ field }) => (
                  <Textarea
                    {...field}
                    placeholder={placeholder}
                    aria-invalid={formError ? "true" : "false"}
                    className={`w-full${className ? ` ${className}` : ""}`}
                  />
                )
              }
            />
          )
          : (
            register && (
              <Textarea
                {...register(name)}
                placeholder={placeholder}
                aria-invalid={formError ? "true" : "false"}
                className={`w-full${className ? ` ${className}` : ""}`}
              />
            )
          )
      }

      {
        formError && (
          <p className="text-red-500 text-sm mt-2">{formError}</p>
        )
      }
    </div>
  )
}

export default CustomTextarea