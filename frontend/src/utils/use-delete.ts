import { useMutation, UseMutationOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

export const useDelete = <T>(url: string, options?: UseMutationOptions<unknown, Error, T>) => {
  return useMutation<unknown, Error, T>((id) => httpClient.delete(`${url}/${id}`), options)
}
