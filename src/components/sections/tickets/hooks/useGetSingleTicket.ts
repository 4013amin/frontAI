import { useQuery } from "@tanstack/react-query"
import API from "@/lib/axios"
import { ITicket } from "@/types/globa_types"

const fetchSingleTicket = async (id: string): Promise<ITicket> => {
  const res = await API.get(`/tickets/${id}/`)
  return res.data
}

const useGetSingleTicket = (id: string) => {
  return useQuery<ITicket>({
    queryKey: ["ticket", id],
    queryFn: () => fetchSingleTicket(id),
    enabled: !!id // فقط وقتی id موجود باشه اجرا میشه
  })
}

export default useGetSingleTicket