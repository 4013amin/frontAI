"use client"
import { WifiOff } from "lucide-react"
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

type NetworkErrorDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  message?: string
}

const NetworkErrorDialog = ({ open, onOpenChange }: NetworkErrorDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-full md:!w-8/12 lg:!w-6/12">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-500 flex flex-col items-center justify-center gap-2"> 
            <WifiOff size={32} />

            <span>خطای اتصال به سایت</span>
          </AlertDialogTitle>

          <AlertDialogDescription asChild>
            <div>
              <div>
                این خطا به دلیل محدودیت دسترسی REST API
                سایت شما رخ داده است.
              </div>

              <div>
                لطفاً بدون VPN تست کنید یا افزونه‌های امنیتی یا تنظیمات سایت خود
                را بررسی کنید.
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button
              variant="default"
              className="bg-black text-white"
            >بستن
            </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default NetworkErrorDialog