import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation" 
import { toast } from "sonner"
import axios from "axios"
import API from "@/lib/axios"
import { IFullName } from "@/components/types"


// Request Function 
const requestFn = ({ full_name }: IFullName) => {
  return API.patch("/profile/complete/", { full_name })
}

const useSubmitRegister = () => {
  const navigation = useRouter()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (full_name: string) => requestFn({ full_name }),
    onSuccess: () => {
      toast.success("اطلاعات شما با موفقیت بروزرسانی شد", { duration: 5000 })
      navigation.replace("/panel/subscription")
    },
    onError: error => {
      if (axios.isAxiosError(error)) {
        const errorStatus = error.response?.status
        const errorMessage = error.response?.data.error

        // BLOCK unAuthorised
        if(errorStatus === 401) {
          toast.error("شما احراز هویت نشده اید!")
          // eslint-disable-next-line no-console
          console.log(errorMessage)
          navigation.replace("/auth/login")
        }
        else {
          // eslint-disable-next-line no-console
          console.log(error)
          toast.error("اطلاعات ذخیره نشد!")
        }
      }
    }
  })

  return {
    mutate, isPending, isError, isSuccess 
  }
}

export default useSubmitRegister