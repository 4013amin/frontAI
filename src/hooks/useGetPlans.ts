import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { IPlan } from "@/types/globa_types"

type IPlansResponse = AxiosResponse<{ plans: IPlan[] }>

const requestFn = (): Promise<IPlansResponse> => {
  return API.get("/subscription/plans/")
}

const useGetPlans = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<IPlansResponse, Error, IPlan[]>({
    queryKey: ["subscription-plans"],
    queryFn: requestFn,
    select: res => res.data.plans,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 2 // 5 min
  })

  return {
    plans: data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetPlans