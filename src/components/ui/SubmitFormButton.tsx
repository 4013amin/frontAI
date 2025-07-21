import React, { ReactNode } from "react"
import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/shadcn/Button"

type IProps = {
  isPending: boolean
  text: string
  icon?: ReactNode
  className?: string
}

const SubmitFormButton = ({
  isPending,
  text,
  icon,
  className
}: IProps) => {

  return (
    <>
      <Button
        type="submit"
        className={
          `w-full bg-blue-500 dark:text-white
        dark:hover:bg-blue-900 ${className}`
        }
        size="lg"
        disabled={isPending}
      >
        
        {
          isPending
            ? <Loader2Icon className="animate-spin" />
            : (
              icon
                ? 
                (`${icon} ${text}`)
                : text
            )
        }
      </Button>
    </>
  )
}

export default SubmitFormButton