import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import API from "@/lib/axios"
import { IPhoneNumber } from "@/components/types"


// Request Function 
const requestFn = ({ phone }: IPhoneNumber) => {
  return API.post("/auth/otp/request/", { phone_number: phone })
}

const useRequestOtp = () => {
  const navigation = useRouter()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (phone: string) => requestFn({ phone: phone }),
    onSuccess: () => {
      toast.success("کد تایید با موفقیت ارسال شد", { duration: 5000 })
      navigation.replace("/auth/verify")
    },
    onError: () => {
      toast.error("کد تایید ارسال نشد!")
    }
  })

  return {
    mutate, isPending, isError, isSuccess 
  }
}

export default useRequestOtp