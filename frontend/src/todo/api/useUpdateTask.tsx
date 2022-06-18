import { useQueryClient } from "react-query"

import { useUpdate } from "@/utils/use-update"
import { endpoints } from "./endpoints"
import { Task } from "./types"

type Params = Pick<Task, "id"> & Partial<Pick<Task, "title" | "completed">>

export const useUpdateTask = () => {
  const queryClient = useQueryClient()

  return useUpdate<Task, Params>(`${endpoints.todos}`, {
    onSettled: () => {
      queryClient.invalidateQueries([endpoints.todos])
    },
  })
}
