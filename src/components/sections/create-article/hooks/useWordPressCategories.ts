"use client"
import { useQuery } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import API from "@/lib/axios"
import { IWordPressCategory } from "@/types/globa_types"


const fetchCategories = async (siteUrl: string): Promise<IWordPressCategory[]> => {
  if (!siteUrl) return []
  const { data } = await API.get<IWordPressCategory[]>(`${siteUrl.replace(/\/$/, "")}/wp-json/wp/v2/categories`)

  return data
}

export const useWordPressCategories = (siteUrl: string) => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching
  } = useQuery<IWordPressCategory[], AxiosError>({
    queryKey: ["wordpress-categories", siteUrl],
    queryFn: () => fetchCategories(siteUrl),
    enabled: Boolean(siteUrl), // فقط وقتی url داریم اجرا بشه

    staleTime: 0,  // 👈 همیشه تازه باشه
    refetchOnWindowFocus: true, // هر بار فوکوس شد دوباره بگیره
    refetchOnMount: true,       // هر بار کامپوننت لود شد دوباره بگیره
    refetchOnReconnect: true   // وقتی اینترنت برگشت دوباره بگیره
  })

  return {
    categories: data || [],
    error,
    isLoading,
    isError,
    refetch,
    isFetching
  }
}