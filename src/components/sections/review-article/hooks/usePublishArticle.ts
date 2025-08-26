import { useMutation } from "@tanstack/react-query"
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
        const axiosError = error as AxiosError<{ error_code?: string, detail?: string }>
        const errorCode = axiosError.response?.data.error_code

        if (axiosError.status === 500) {
          toast.error("خطا در انتشار مقاله توسط سرور!")
          return
        }

        if (errorCode === "SUBSCRIPTION_REQUIRED") {
          toast.error("شما اشتراک فعال ندارید. لطفاً اشتراک خود را تمدید کنید.")
          return
        }

        toast.error(axiosError.response?.data.detail || "خطا در انتشار مقاله!")
      }
      else {
        toast.error("خطایی رخ داده است.")
      }
    },
    onSuccess() {
      toast.success("مقاله با موفقیت منتشر شد")
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