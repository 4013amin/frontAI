import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import type { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import API from "@/lib/axios"

// Request function for publishing an article
const requestPublishArticle = (id: number) => {
  return API.post(`/articles/${id}/publish/`)
}

const usePublishArticle = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const {
    mutate: publishArticle,
    data,
    error,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: requestPublishArticle,
    onError: (error: unknown) => {
      // eslint-disable-next-line no-console
      console.log(error)
      if (error && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error_code?: string, detail?: string, message?: string }>
        const errorCode = axiosError.response?.data.error_code
        const errorDetail = axiosError.response?.data.detail || ""
        const errorMessage = axiosError.response?.data.message || ""
        const fullErrorText = `${errorDetail} ${errorMessage}`.toLowerCase()

        if (axiosError.status === 500) {
          // Check if it's a WordPress error
          if (
            fullErrorText.includes("wordpress") || 
            fullErrorText.includes("wp-json") ||
            fullErrorText.includes("uploading image") ||
            fullErrorText.includes("media")
          ) {
            if (fullErrorText.includes("503") || fullErrorText.includes("service unavailable")) {
              toast.error("سایت وردپرس در دسترس نیست (503). لطفاً بعداً تلاش کنید یا با پشتیبانی تماس بگیرید.")
            } else if (fullErrorText.includes("500") || fullErrorText.includes("internal server")) {
              toast.error("خطا در آپلود تصویر به وردپرس (500). لطفاً تنظیمات دسترسی وردپرس را بررسی کنید یا با پشتیبانی تماس بگیرید.")
            } else {
              toast.error("خطا در ارتباط با سایت وردپرس. لطفاً تنظیمات سایت را بررسی کنید.")
            }
          } else {
            toast.error("خطا در انتشار مقاله توسط سرور!")
          }
          return
        }

        if (axiosError.status === 401 || errorDetail.includes("auth_token") || errorDetail.includes("Cookie")) {
          toast.error("احراز هویت ناموفق بود. لطفاً دوباره وارد شوید.")
          return
        }

        if (errorCode === "SUBSCRIPTION_REQUIRED") {
          toast.error("شما اشتراک فعال ندارید. لطفاً اشتراک خود را تمدید کنید.")
          return
        }

        toast.error(errorDetail || errorMessage || "خطا در انتشار مقاله!")
      }
      else {
        toast.error("خطایی رخ داده است.")
      }
    },
    onSuccess() {
      toast.success("مقاله با موفقیت منتشر شد")
      queryClient.invalidateQueries({ queryKey: ["articles"] })
      router.push("/panel/articles")
    }
  })

  return {
    publishArticle,
    data: data?.data,
    error,
    isPending,
    isError,
    isSuccess
  }
}

export default usePublishArticle