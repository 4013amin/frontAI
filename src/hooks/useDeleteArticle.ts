import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import API from "@/lib/axios"

const deleteArticle = (id: number) => API.delete(`deleted_article/${id}`)

const useDeleteArticle = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      toast.success("مقاله با موفقیت حذف شد")
      queryClient.invalidateQueries({ queryKey: ["articles"] })
      onSuccessCallback?.()
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error)
      toast.error("حذف مقاله ناموفق بود")
    }
  })

  return mutation
}

export default useDeleteArticle