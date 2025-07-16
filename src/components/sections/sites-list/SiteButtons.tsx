import { Pen, Trash } from "lucide-react"
import React from "react"
import { Button } from "@/components/shadcn/Button"


type IProps = { id: number | undefined
  setRemoveId: (val: number) => void
  setEditId: (val: number) => void
  setIsOpenRemoveDialog: (val: boolean) => void  
  setIsOpenEditDialog: (val: boolean) => void }

const SiteButtons = (props: IProps) => {
  const {
    id,
    setRemoveId, 
    setEditId,
    setIsOpenRemoveDialog,
    setIsOpenEditDialog
  } = props


  return (
    <div className="flex gap-2">
      <Button
        onClick={
          () => {
            setIsOpenEditDialog(true)
            if(id) {
              setEditId(id)
            }
          }
        }
        variant="outline"
        className="border-violet-500 text-violet-500 bg-white
          shadow-none hover:!bg-violet-500 hover:text-white"
      >
        <Pen />
      </Button>


      <Button 
        onClick={
          () => {
            setIsOpenRemoveDialog(true)
            if(id) {
              setRemoveId(id)
            }
          }
        }
        variant="outline"
        className="border-red-500 text-red-500 bg-white
        shadow-none hover:!bg-red-500 hover:text-white"
      >
        <Trash />
      </Button>
    </div>
  )
}

export default SiteButtons