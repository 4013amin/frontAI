import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { AxiosResponse } from "axios"
import z from "zod"
import API from "@/lib/axios"
import { TicketMessageSchema } from "@/lib/schemas"


type INewMessage = z.infer<typeof TicketMessageSchema>

const requestFn = (
  ticketId: number,
  message: INewMessage
): Promise<AxiosResponse> => {
  return API.post(`/tickets/${ticketId}/messages/`, message, { headers: { "Content-Type": "multipart/form-data" } })
}

const useSendTicketMessage = (ticketId: number) => {
  const queryClient = useQueryClient()

  const {
    mutate: sendMessage,
    isPending,
    isError,
    isSuccess,
    data
  } = useMutation({
    mutationFn: (msg: INewMessage) => requestFn(ticketId, msg),
    onSuccess: response => {
      if (response.status === 201) {
        // invalidate 
        queryClient.invalidateQueries({ queryKey: ["ticket", String(ticketId)] })

        toast.success("پیام با موفقیت ارسال شد", { duration: 4000 })
      }
      else {
        toast.warning("درخواست موفق بود اما پیام ثبت نشد!")
      }
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("ارسال پیام ناموفق بود!")
    }
  })

  return {
    sendMessage,
    isPending,
    isError,
    isSuccess,
    data
  }
}

export default useSendTicketMessage