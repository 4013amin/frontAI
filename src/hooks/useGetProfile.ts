import { useQuery } from "@tanstack/react-query"
import API from "@/lib/axios"
import { IProfile } from "@/types/globa_types"

const requestFn = (): Promise<{ data: IProfile }> => {
  return API.get("/profile/")
}

const useGetProfile = () => {
  const {
    data: profile,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  } = useQuery<{ data: IProfile }, Error, IProfile>({
    queryKey: ["profile"],
    queryFn: requestFn,
    select: res => res.data,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2
  })

  return {
    profile,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch
  }
}

export default useGetProfile