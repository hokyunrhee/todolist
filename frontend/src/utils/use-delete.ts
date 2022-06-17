import { useMutation, UseMutationOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

interface UseDeleteProps<T> {
  url: string
  options?: UseMutationOptions<unknown, Error, T>
}

export const useDelete = <T>({ url, options }: UseDeleteProps<T>) => {
  return useMutation<unknown, Error, T>(() => httpClient.delete(url), options)
}
