import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { toast } from "sonner"
import { useRouter } from "nextjs-toploader/app"
import API from "@/lib/axios"

interface ISubmitPaymentReceiptInput {
  transaction_ref: string
  payment_receipt: File
  plan: number
}

const requestFn = (data: ISubmitPaymentReceiptInput): Promise<AxiosResponse> => {
  const formData = new FormData()
  formData.append("transaction_ref", data.transaction_ref)
  formData.append("plan", String(data.plan))
  formData.append("payment_receipt", data.payment_receipt)

  return API.post(
    "/subscription/payment-requests/",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  )
}

const useSubmitPaymentReceipt = () => {
  const navigator = useRouter()
  const queryClient = useQueryClient()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: requestFn,
    onSuccess: response => {
      if (response.status === 201) {
        toast.success("فیش با موفقیت ثبت شد.", { duration: 5000 })

        // ❗ invalidate subscription-payments query
        queryClient.invalidateQueries({ queryKey: ["subscription-payments"] })

        setTimeout(() => {
          navigator.push("/panel/payments")
        }, 3000)
      }
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("عملیات ناموفق بود!")
    }
  })

  return {
    mutate,
    isPending,
    isError,
    isSuccess
  }
}

export default useSubmitPaymentReceipt