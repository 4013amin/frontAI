"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3 cursor-pointer", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={
        cn(
          `relative flex items-center justify-center 
          aspect-square size-5 shrink-0 rounded-full border 
          border-zinc-400 shadow-sm cursor-pointer transition 
          outline-none`,
          "focus-visible:ring-2 focus-visible:ring-blue-500",
          "data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500",
          className
        )
      }
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="size-2 rounded-full bg-white group-data-[state=checked]:bg-blue-500" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export {
  RadioGroup, RadioGroupItem 
}