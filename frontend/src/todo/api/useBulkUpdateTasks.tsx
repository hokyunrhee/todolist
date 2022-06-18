import { useQueryClient, useMutation } from "react-query"

import { httpClient } from "@/utils/http-client"
import { endpoints } from "./endpoints"
import { Task } from "./types"

type Bulk = (Pick<Task, "id"> & Partial<Pick<Task, "title" | "completed">>)[]

export const useBulkUpdateTasks = () => {
  const queryClient = useQueryClient()

  return useMutation<unknown, Error, Bulk>((data) => httpClient.patch(`${endpoints.todos}`, data), {
    onSettled: () => {
      queryClient.invalidateQueries([endpoints.todos])
    },
  })
}
