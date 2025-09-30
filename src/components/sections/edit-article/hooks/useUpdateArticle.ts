import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import type { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import API from "@/lib/axios"

// نوع داده‌ای که برای آپدیت مقاله می‌فرستیم
interface UpdateArticlePayload {
  title: string
  content: string
}

// درخواست ویرایش مقاله
const requestUpdateArticle = (id: number, payload: UpdateArticlePayload) => {
  return API.put(`update_article/${id}/`, payload)
}

const useUpdateArticle = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const {
    mutate: updateArticle,
    data,
    error,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: ({ id, payload }: { id: number, payload: UpdateArticlePayload }) => requestUpdateArticle(id, payload),

    onError: (error: unknown) => {
      console.error(error)
      if (error && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error_code?: string, detail?: string }>
        const errorCode = axiosError.response?.data.error_code

        if (axiosError.status === 500) {
          toast.error("خطا در ویرایش مقاله توسط سرور!")
          return
        }

        if (errorCode === "SUBSCRIPTION_REQUIRED") {
          toast.error("شما اشتراک فعال ندارید. لطفاً اشتراک خود را تمدید کنید.")
          return
        }

        toast.error(axiosError.response?.data.detail || "خطا در ویرایش مقاله!")
      }
      else {
        toast.error("خطایی رخ داده است.")
      }
    },

    onSuccess() {
      toast.success("مقاله با موفقیت ویرایش شد")
      queryClient.invalidateQueries({ queryKey: ["articles"] })
      router.push("/panel/articles")
    }
  })

  return {
    updateArticle, // (id, payload) صداش بزن
    data: data?.data,
    error,
    isPending,
    isError,
    isSuccess
  }
}

export default useUpdateArticle