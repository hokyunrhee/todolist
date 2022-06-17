import { useQuery, UseQueryOptions } from "react-query"

import { httpClient } from "@/utils/http-client"

interface useFetchProps<T> {
  url: string
  options?: UseQueryOptions<T, Error, T>
}

export const useFetch = <T>({ url, options }: useFetchProps<T>) => {
  return useQuery<T, Error, T>([url], () => httpClient.get<T>(url).then(({ data }) => data), options)
}
