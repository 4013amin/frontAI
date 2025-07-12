import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import API from "@/lib/axios"
import { IFullName } from "@/components/types"


// Request Function 
const requestFn = ({ full_name }: IFullName) => {
  return API.put("/profile/complete/", { full_name })
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
      navigation.replace("/panel")
    },
    onError: () => {
      toast.error("اطلاعات ذخیره نشد!")
    }
  })

  return {
    mutate, isPending, isError, isSuccess 
  }
}

export default useSubmitRegister