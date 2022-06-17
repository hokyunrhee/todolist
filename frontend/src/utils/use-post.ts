import { useMutation, UseMutationOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

interface UsePostProps<T, U> {
  url: string
  options?: UseMutationOptions<T, Error, U>
}

export const usePost = <T, U>({ url, options }: UsePostProps<T, U>) => {
  return useMutation<T, Error, U>((data) => httpClient.post(url, data).then(({ data }) => data), options)
}
