import { useMutation, UseMutationOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

export const useUpdate = <T, U extends { id: string }>(url: string, options?: UseMutationOptions<T, Error, U>) => {
  return useMutation<T, Error, U>(
    (data) => httpClient.patch(`${url}/${data.id}`, data).then(({ data }) => data),
    options
  )
}
