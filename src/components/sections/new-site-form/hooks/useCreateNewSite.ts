import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import API from "@/lib/axios"
import { ISite } from "@/types/globa_types"


// Request Function 
const requestFn = (site: ISite) => {
  return API.post("/sites/", site)
}

const useCreateNewSite = () => {
  const queryClient = useQueryClient()

  const {
    mutate,
    isPending,
    isError,
    isSuccess
  } = useMutation({
    mutationFn: (site: ISite) => requestFn(site),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-sites"] })
        
      toast.success("وبسایت جدید ایجاد شد", { duration: 5000 })
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("عملیات ناموفق بود!")
    }
  })

  return {
    mutate, isPending, isError, isSuccess
  }
}

export default useCreateNewSite