import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import type { AxiosError } from "axios"
import API from "@/lib/axios"

// Request function for /ai/generate-titles/
const requestGenerateTitles = (tags: string) => {
  return API.post("/ai/generate-titles/", { keywords: tags })
}

const useGenerateTitles = () => {
  const {
    mutate: generateTitles,
    data,
    error,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: requestGenerateTitles,
    onError: (error: unknown) => {
      // eslint-disable-next-line no-console
      console.log(error)
      if (error && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error_code?: string, detail?: string }>
        const errorCode = axiosError.response?.data.error_code

        if (axiosError.status === 503) {
          toast.error("خطا در ایجاد عناوین توسط سرور!")
          return
        }

        if (errorCode === "SUBSCRIPTION_REQUIRED") {
          toast.error("شما اشتراک فعال ندارید. لطفاً اشتراک خود را تمدید کنید.")
          return
        }

        toast.error(axiosError.response?.data.detail || "خطا در دریافت عناوین!")
      }
      else {
        toast.error("خطایی رخ داده است.")
      }
    }
  })

  return {
    generateTitles,
    data: data?.data,
    error,
    isPending,
    isError,
    isSuccess
  }
}

export default useGenerateTitles