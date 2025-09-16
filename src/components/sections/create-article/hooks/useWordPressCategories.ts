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
  const query = useQuery<IWordPressCategory[], AxiosError>({
    queryKey: ["wordpress-categories", siteUrl],
    queryFn: () => fetchCategories(siteUrl),
    enabled: Boolean(siteUrl),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true
  })


  return {
    categories: query.data || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    isFetching: query.isFetching
  }
}