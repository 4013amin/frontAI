import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import API from "@/lib/axios"

const deleteSite = (id: number) => API.delete(`/sites/${id}/`)

const useDeleteSite = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteSite,
    onSuccess: () => {
      toast.success("سایت با موفقیت حذف شد")
      queryClient.invalidateQueries({ queryKey: ["my-sites"] })
      onSuccessCallback?.()
    },
    onError: () => {
      toast.error("حذف سایت ناموفق بود")
    }
  })

  return mutation
}

export default useDeleteSite