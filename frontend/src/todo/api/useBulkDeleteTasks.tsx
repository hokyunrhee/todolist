import { useQueryClient, useMutation } from "react-query"

import { httpClient } from "@/utils/http-client"
import { endpoints } from "./endpoints"
import { Task } from "./types"

type Ids = Task["id"][]

export const useBulkDeleteTasks = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, Error, Ids>(
    (ids) => {
      const params = new URLSearchParams()
      ids.forEach((id) => params.append("id", id))

      return httpClient.delete(`${endpoints.todos}`, { params })
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries([endpoints.todos])
      },
    }
  )
}
