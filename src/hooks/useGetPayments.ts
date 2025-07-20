import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { IPayment } from "@/types/globa_types"

type IPaymentsResponse = AxiosResponse<IPayment[]>

const requestFn = (): Promise<IPaymentsResponse> => {
  return API.get("/subscription/payment-history")
}

const useGetPayments = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<IPaymentsResponse, Error, IPayment[]>({
    queryKey: ["subscription-payments"],
    queryFn: requestFn,
    select: res => res.data,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 5
  })

  return {
    payments: data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetPayments