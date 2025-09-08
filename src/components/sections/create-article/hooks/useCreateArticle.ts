"use client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import type { AxiosError } from "axios"
import API from "@/lib/axios"
import { IArticle } from "@/types/globa_types"
import { useGlobalLoading } from "@/hooks/useGlobalLoading"

export type CreateArticleRequest = {
  title: string
  wordpress_site_id: string | number
  article_language: string
  custom_language?: string
  generate_image_option: boolean
  image_field?: File
}

const requestCreateArticle = (data: CreateArticleRequest) => {
  return API.post<IArticle>(
    "/ai/create-article/", 
    data, { headers: { "Content-Type": "multipart/form-data" } }
  )
}

const useCreateArticle = () => {
  const { showLoading, hideLoading } = useGlobalLoading()

  const {
    mutate: createArticle,
    data,
    error,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: async (data: CreateArticleRequest) => {
      showLoading("درحال ایجاد مقاله...")
      return await requestCreateArticle(data)
    },
    onError: (error: unknown) => {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error_code?: string, detail?: string }>
        const message = axiosError.response?.data.detail || "خطا در ایجاد مقاله!"
        
        if(axiosError.status === 503) {
          toast.error("مقاله به دلیل خطای سرور ایجاد نشد!")
        }
        else{
          toast.error(message)
        }
        
        // eslint-disable-next-line no-console
        console.log(axiosError)
      }
      else {
        toast.error("خطایی رخ داده است.")
      }
      hideLoading()
    },
    onSuccess: () => {
      toast.success("مقاله با موفقیت ایجاد شد.")
      hideLoading()
    }
  })

  return {
    createArticle,
    data: data?.data,
    error,
    isPending,
    isError,
    isSuccess
  }
}


export default useCreateArticle