import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { IArticle } from "@/types/globa_types"

type IArticlesResponse = AxiosResponse<IArticle[]>

const requestFn = (): Promise<IArticlesResponse> => {
  return API.get("/articles/")
}

const useGetArticles = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<IArticlesResponse>({
    queryKey: ["articles"],
    queryFn: requestFn,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 2 // 5 min
  })

  const articles = data?.data

  return {
    articles,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetArticles