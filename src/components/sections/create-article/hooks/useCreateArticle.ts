"use client"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import type { AxiosError } from "axios"
import API from "@/lib/axios"
import { IArticle } from "@/types/globa_types"

export type CreateArticleRequest = {
  title: string
  wordpress_site_id: string | number
  article_language: string
  custom_language?: string
  generate_image_option: boolean
}

const requestCreateArticle = (data: CreateArticleRequest) => {
  return API.post<IArticle>("/ai/create-article/", data)
}

const useCreateArticle = () => {
  const {
    mutate: createArticle,
    data,
    error,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: requestCreateArticle,
    onError: (error: unknown) => {
      console.log(error)
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error_code?: string, detail?: string }>
        const message = axiosError.response?.data.detail || "خطا در ایجاد مقاله!"
        toast.error(message)
      }
      else {
        toast.error("خطایی رخ داده است.")
      }
    },
    onSuccess: () => {
      toast.success("مقاله با موفقیت ایجاد شد.")
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