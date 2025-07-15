import { Plus } from "lucide-react"
import React from "react"
import { Separator } from "@/components/shadcn/Separator"

const NewSiteForm = () => {
  return (
    <div
      className="lg:w-2/3 flex flex-col items-start justify-center p-3
    border rounded-xl"
    >
      <h2 className="flex items-center gap-2 text-bold">
        <Plus />
        افزودن سایت جدید
      </h2>

      <Separator className="my-3" />

    </div>
  )
}

export default NewSiteForm