import React from "react"
import { Earth, FilePenLine, Pen, Trash } from "lucide-react"
import Link from "next/link"
import { ISite } from "@/types/globa_types"
import { Button } from "@/components/shadcn/Button"

const SiteCard = (props: ISite) => {
  const {
    id,
    name,
    site_url
  } = props

  const slicedUrl = site_url.slice(7)

  return (
    <div className="flex items-center justify-between gap-3 p-3 w-full mt-1">
      <div className="flex items-start gap-3">
        <Earth className="text-blue-500 mt-[4px]" size={20} />

        <div className="flex flex-col items-start justify-start">
          <h3 >{name}</h3>

          <Link
            href={`${site_url}`}
            target="_blank"
            className="text-sm text-slate-600 hover:text-blue-500"
          >
            {slicedUrl}
          </Link>
        </div>
      </div>

      {/* Buttons  */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="border-violet-500 text-violet-500 bg-white
          shadow-none hover:!bg-violet-500 hover:text-white"
        >
          <Pen />
        </Button>

        <Button 
          variant="outline"
          className="border-red-500 text-red-500 bg-white
          shadow-none hover:!bg-red-500 hover:text-white"
        >
          <Trash />
        </Button>
      </div>
    </div>
  )
}

export default SiteCard