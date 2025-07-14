import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import API from "@/lib/axios"


// Request Function 
const requestFn = () => {
  return API.get("/profile/")
}

const useGetProfile = () => {


  const {
    mutate,
    isPending,
    isError,
    isSuccess,
    data,
    error
  } = useMutation({
    mutationFn: () => requestFn(),
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("دریافت اطلاعات از سرور انجام نشد!")
    }
  })

  const profile = data?.data

  return {
    mutate, isPending, isError, isSuccess, profile, error
  }
}

export default useGetProfile