import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"
import { IArticle } from "@/types/globa_types"

interface UpdateArticlePayload {
  id: number;
  title: string;
  content: string;
  status: "published" | "rejected" | "draft" | string;
}

const updateArticle = async (payload: UpdateArticlePayload) => {
  const { id, ...data } = payload;
  const response = await api.put(`/panel/articles/${id}/`, data);
  return response.data;
};

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"]
      });
    },
  });
};
