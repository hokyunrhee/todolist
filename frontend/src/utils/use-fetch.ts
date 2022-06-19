import { useQuery, UseQueryOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

export const useFetch = <T>(url: string, options?: UseQueryOptions<T, Error, T>) => {
  return useQuery<T, Error, T>([url], () => httpClient.get<T>(url).then(({ data }) => data), options)
}
