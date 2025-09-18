import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { IArticle } from "@/types/globa_types"

type IArticleResponse = AxiosResponse<IArticle>

const requestFn = (id: number | string): Promise<IArticleResponse> => {
  return API.get(`/articles/${id}/`)
}

const useGetArticle = (id: number | string, enabled = true) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<IArticleResponse>({
    queryKey: ["article", id],
    queryFn: () => requestFn(id),
    enabled: Boolean(id) && enabled,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 2
  })

  const article = data?.data

  return {
    article,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetArticle