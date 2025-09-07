import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { AxiosResponse } from "axios"
import z from "zod"
import { useRouter } from "nextjs-toploader/app"
import API from "@/lib/axios"
import { NewTicketFormSchema } from "@/lib/schemas"

type ICreateTicket = z.infer<typeof NewTicketFormSchema>

// Request Function 
const requestFn = (ticket: ICreateTicket): Promise<AxiosResponse> => {
  return API.post("/tickets/", ticket)
}

const useCreateTicket = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const {
    mutate: createTicket,
    isPending,
    isError,
    isSuccess,
    data
  } = useMutation({
    mutationFn: requestFn,
    onSuccess: response => {
      if (response.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["tickets"] })
        router.push("/panel/tickets")
        toast.success("تیکت جدید با موفقیت ایجاد شد", { duration: 5000 })
      }
      else {
        toast.warning("درخواست موفق بود اما تیکت ایجاد نشد!")
      }
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("عملیات ایجاد تیکت ناموفق بود!")
    }
  })

  return {
    createTicket,
    isPending,
    isError,
    isSuccess,
    data
  }
}

export default useCreateTicket