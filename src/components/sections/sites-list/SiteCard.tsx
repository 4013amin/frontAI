import React, { memo } from "react"
import { Earth } from "lucide-react"
import Link from "next/link"
import SiteButtons from "./SiteButtons"
import { ISite } from "@/types/globa_types"
import { Separator } from "@/components/shadcn/Separator"

type SiteCardProps = ISite & {
  setRemoveId: (val: number) => void
  setEditId: (val: number) => void
  setIsOpenRemoveDialog: (val: boolean) => void
  setIsOpenEditDialog: (val: boolean) => void
}

const SiteCard = ({
  id,
  name,
  site_url,
  setRemoveId,
  setEditId,
  setIsOpenRemoveDialog,
  setIsOpenEditDialog
}: SiteCardProps) => {
  const slicedUrl = site_url.slice(7)

  return (
    <>
      <div className="flex items-center justify-between gap-3 p-3 w-full mt-1">
        <div className="flex items-start gap-3">
          <Earth className="text-blue-500 mt-[4px]" size={20} />

          <div className="flex flex-col items-start justify-start">
            <h3>{name}</h3>

            <Link
              href={site_url}
              target="_blank"
              className="text-sm text-slate-600 hover:text-blue-500 text-left"
            >
              {slicedUrl}
            </Link>
          </div>
        </div>

   
        <SiteButtons
          id={id}
          setRemoveId={setRemoveId}
          setEditId={setEditId}
          setIsOpenRemoveDialog={setIsOpenRemoveDialog}
          setIsOpenEditDialog={setIsOpenEditDialog}
        />
      </div>

      <Separator />
    </>
  )
}


export default memo(SiteCard)