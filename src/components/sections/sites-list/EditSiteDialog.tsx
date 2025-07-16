import React, { useEffect } from "react"
import { DialogClose } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import useEditSite from "./hooks/useEditSite"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/shadcn/Dialog"
import { ISite } from "@/types/globa_types"
import { Button } from "@/components/shadcn/Button"
import CustomInput from "@/components/ui/CustomInput"
import CustomTextarea from "@/components/ui/CustomTexarea"
import { NewSiteFormSchema } from "@/lib/schemas"

type IProps = {
  currentSite: ISite | undefined
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

const EditSiteDialog = ({
  currentSite,
  isOpen,
  setIsOpen
}: IProps) => {
  const {
    mutate,
    isPending,
    isSuccess
  } = useEditSite()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<z.infer<typeof NewSiteFormSchema>>({
    resolver: zodResolver(NewSiteFormSchema),
    defaultValues: {
      name: currentSite && currentSite.name,
      site_url: currentSite && currentSite.site_url,
      username: currentSite && currentSite.username,
      app_password: currentSite && currentSite.app_password
    }
  })

  console.log(currentSite)
  
  const handelEdit = (data: ISite) => {
    if(currentSite?.id) {
      mutate({ id: currentSite.id, data })
    }
  }
    
  // Close after successfuly
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false)
    }
  }, [isSuccess, setIsOpen])


  // Reset form
  useEffect(() => {
    if(isSuccess) {
      reset()
    }
  }, [isSuccess, reset])

  useEffect(() => {
    if (currentSite) {
      reset({
        name: currentSite.name || "",
        site_url: currentSite.site_url || "",
        username: currentSite.username || "",
        app_password: currentSite.app_password || ""
      })
    }
  }, [currentSite, reset])


  return (
    <Dialog
      open={isOpen}
      onOpenChange={
        open => {
          if (!isPending) {
            setIsOpen(open)
          }
        }
      }
    >
      {
        currentSite && (
          <DialogContent className="w-full lg:!w-1/3">
            <DialogHeader>
              <DialogTitle>ویرایش {currentSite.name}</DialogTitle>
            </DialogHeader>


            <form
              onSubmit={handleSubmit(data => handelEdit(data))}
              className="w-full flex-center flex-col gap-4"
            >
              <CustomInput
                register={register}
                name="name"
                error={errors.name?.message}
                type="text"
                placeholder="نام نمایشی سایت"
              />

              <CustomInput
                register={register}
                name="site_url"
                error={errors.site_url?.message}
                placeholder="آدرس سایت"
                type="text"
              />

              <CustomInput
                register={register}
                name="username"
                error={errors.username?.message}
                placeholder="نام کاربری وردپرس"
                type="text"
              />

              <CustomTextarea
                register={register}
                name="app_password"
                error={errors.app_password?.message}
                placeholder="App password"
              />

              <DialogFooter className="flex-center flex-row w-full">
                <DialogClose asChild disabled={isPending}>
                  <Button variant="outline" className="flex-1">بازگشت</Button>
                </DialogClose>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="flex-1 bg-green-500 text-white dark:bg-green-500/60
                dark:hover:bg-green-800"
                >
                  {isPending ? "درحال ثبت..." : "ثبت تغییرات"}
                </Button>
              </DialogFooter>
            </form>

          </DialogContent>
        )
      }
    </Dialog>
  )
}

export default EditSiteDialog