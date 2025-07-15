"use client"
import React, { useEffect } from "react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/shadcn/AlertDialog"
import useDeleteSite from "@/hooks/useDeleteSite"
import { Button } from "@/components/shadcn/Button"

type IProps = {
  isOpen: boolean
  siteId: number
  setIsOpen: (val: boolean) => void
}

const RemoveSiteDialog = ({
  isOpen,
  siteId,
  setIsOpen
}: IProps) => {
  const {
    mutate,
    isPending,
    isSuccess
  } = useDeleteSite()

  // Close after successfuly
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false)
    }
  }, [isSuccess, setIsOpen])

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={
        open => {
          if (!isPending) {
            setIsOpen(open)
          }
        }
      }
    >
      <AlertDialogContent className="w-full lg:!w-1/3">
        <AlertDialogHeader>
          <AlertDialogTitle>آیا سایت حذف شود؟</AlertDialogTitle>

          <AlertDialogDescription>
            با حذف سایت اطلاعات آن نیز از بین می‌روند
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-center flex-row w-full">
          
          <AlertDialogCancel className="flex-1" disabled={isPending}>
            لغو
          </AlertDialogCancel>

          {/* Custom remover button  */}
          <Button
            onClick={() => mutate(siteId)}
            disabled={isPending}
            variant="destructive"
            className="flex-1"
          >
            {isPending ? "در حال حذف..." : "بله حذف شود"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RemoveSiteDialog