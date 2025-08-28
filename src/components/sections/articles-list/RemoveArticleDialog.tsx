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
import { Button } from "@/components/shadcn/Button"
import useDeleteArticle from "@/hooks/useDeleteArticle"

type IProps = {
  isOpen: boolean
  articleId: number
  articleTitle: string
  setIsOpen: (val: boolean) => void
}

const RemoveArticleDialog = ({
  isOpen,
  articleId,
  articleTitle,
  setIsOpen
}: IProps) => {
  const {
    mutate,
    isPending,
    isSuccess
  } = useDeleteArticle()

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
          <AlertDialogTitle>
            آیا مقاله از سایت شما حذف شود؟
          </AlertDialogTitle>

          <AlertDialogDescription className="flex flex-col gap-3">
            <span className="text-xs">
              {articleTitle}
            </span>

            <span className="text-red-500">
              توجه: این عمل غیرقابل بازگشت است و مقاله برای همیشه از سایت شما حذف خواهد شد.          
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-center flex-row w-full">
          
          <AlertDialogCancel className="flex-1" disabled={isPending}>
            لغو
          </AlertDialogCancel>

          {/* Custom remover button  */}
          <Button
            onClick={() => mutate(articleId)}
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

export default RemoveArticleDialog