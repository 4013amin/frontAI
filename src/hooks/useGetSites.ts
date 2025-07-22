import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { ISite } from "@/types/globa_types"

type ISitesResponse = AxiosResponse<ISite[]>

const requestFn = (): Promise<ISitesResponse> => {
  return API.get("/sites/")
}

const useGetSites = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<ISitesResponse>({
    queryKey: ["my-sites"],
    queryFn: requestFn,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 2 // 5 min
  })

  const sites = data?.data

  return {
    sites,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetSites