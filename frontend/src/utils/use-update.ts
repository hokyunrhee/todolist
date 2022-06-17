import { useMutation, UseMutationOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

interface UseUpdateProps<T, U> {
  url: string
  options?: UseMutationOptions<T, Error, U>
}

export const useUpdate = <T, U>({ url, options }: UseUpdateProps<T, U>) => {
  return useMutation<T, Error, U>((data) => httpClient.patch(url, data).then(({ data }) => data), options)
}
