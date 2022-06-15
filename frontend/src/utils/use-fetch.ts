import { useQuery, UseQueryOptions } from "react-query"

import { httpClient } from "@/todo/utils/http-client"

interface useFetchProps<T> {
  url: string
  validate: (data: T) => T
  options?: UseQueryOptions<T, Error, T>
}

export const useFetch = <T>({ url, validate, options }: useFetchProps<T>) => {
  return useQuery<T, Error, T>([url], () => httpClient.get<T>(url).then((res) => validate(res.data)), options)
}
