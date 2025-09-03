import { useQuery } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import API from "@/lib/axios"
import { ITicket } from "@/types/globa_types"


type ITicketsResponse = AxiosResponse<ITicket[]>

// request to api function
const requestFn = (): Promise<ITicketsResponse> => {
  return API.get("/tickets/")
}

// get tickets hook
const useGetTickets = () => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<ITicketsResponse, Error, ITicket[]>({
    queryKey: ["tickets"],
    queryFn: requestFn,
    select: res => res.data,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
    staleTime: 1000 * 60 * 2 // 2 دقیقه
  })
  

  return {
    tickets: data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetTickets