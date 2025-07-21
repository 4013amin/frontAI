import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"
import API from "@/lib/axios"
import { IPlanId } from "@/components/types"


// Request Function 
const requestFn = (planId: IPlanId) => {
  return API.post("/subscription/select-plan/", { plan_id: planId })
}


const useActiveTrialPlan = () => {
  const queryClient = useQueryClient()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (planId: IPlanId) => requestFn(planId),
    onSuccess: data => {
      const status = data.status
      const message = data.data.message

      if (status === 200) {
        if (message === "Trial plan activated successfully.") {
          toast.success("اشتراک رایگان با موفقیت برای شما فعال شد")
        
          //   Refatch Current Plan
          queryClient.invalidateQueries({ queryKey: ["profile"] })
        }
      }
    },
    onError: error => {
      if (axios.isAxiosError(error)) {
        // Get error from Axios
        const errorMessage = error.response?.data.error

        if (errorMessage === "You have already used the trial plan.") {
          toast.error("پلن رایگان قبلا فعال شده است!")
          return
        }
      }
      else {
        // eslint-disable-next-line no-console
        console.log(error)
        toast.error("عملیات با شکست مواجه شد!")
      }
    }
  })


  return {
    mutate, isPending, isError, isSuccess 
  }
}

export default useActiveTrialPlan