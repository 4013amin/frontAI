"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      dir="ltr"
      data-slot="switch"
      className={
        cn(
          `peer inline-flex h-[1.5rem] w-[3rem] shrink-0 
          items-center rounded-full border border-transparent 
          shadow-md transition-all duration-300 ease-in-out 
          outline-none cursor-pointer
          
          bg-gray-300 
          dark:bg-gray-700
          
          data-[state=checked]:bg-green-500 
          data-[state=checked]:dark:bg-green-600
          
          focus-visible:ring-2 
          focus-visible:ring-green-500/50 
          focus-visible:dark:ring-green-600/50
          focus-visible:border-green-500
          focus-visible:dark:border-green-600
          
          disabled:cursor-not-allowed 
          disabled:opacity-50`,
          className
        )
      }
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={
          cn(`
            block size-5 rounded-full 
            bg-white 
            dark:bg-gray-200
            
            shadow-md
            transition-all duration-300 ease-in-out
            
            data-[state=checked]:translate-x-[calc(100%+5px)] 
            data-[state=unchecked]:translate-x-[1px]
            
            pointer-events-none
          `)
        }
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }