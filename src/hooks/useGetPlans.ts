import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import API from "@/lib/axios"


// Request Function 
const requestFn = () => {
  return API.get("/subscription/plans/")
}

const useGetPlans = () => {


  const {
    mutate,
    isPending,
    isError,
    isSuccess,
    data,
    error
  } = useMutation({
    mutationFn: () => requestFn(),
    onSuccess: () => {


    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("دریافت اطلاعات از سرور انجام نشد!")
    }
  })

  const plans = data?.data.plans

  return {
    mutate, isPending, isError, isSuccess, plans, error
  }
}

export default useGetPlans