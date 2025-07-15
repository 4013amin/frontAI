import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { ISite } from "@/types/globa_types"

type ISitesResponse = AxiosResponse<{ sites: ISite[] }>

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
  } = useQuery<ISitesResponse, Error, ISite[]>({
    queryKey: ["my-sites"],
    queryFn: requestFn,
    select: res => res.data.sites,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 5 // 5 min
  })

  return {
    sites: data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetSites