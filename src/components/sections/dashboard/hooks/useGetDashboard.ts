import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse, AxiosError } from "axios"
import API from "@/lib/axios"
import type { IDashboard } from "@/types/globa_types"

type IDashboardResponse = AxiosResponse<IDashboard>

const requestDashboard = (): Promise<IDashboardResponse> => {
  return API.get("/dashboard/")
}

const useGetDashboard = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<IDashboardResponse, AxiosError>({
    queryKey: ["dashboard"],
    queryFn: requestDashboard,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 2,
    staleTime: 1000 * 60 * 1 // 1 دقیقه
  })

  const dashboardData = data?.data

  return {
    dashboardData,
    isLoading,
    isError,
    isSuccess,
    error,

    refetch
  }
}

export default useGetDashboard