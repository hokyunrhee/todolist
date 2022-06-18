import { useQueryClient } from "react-query"

import { useDelete } from "@/utils/use-delete"
import { endpoints } from "./endpoints"
import { Task } from "./types"

type Id = Task["id"]

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useDelete<Id>(`${endpoints.todos}`, {
    onSettled: () => {
      queryClient.invalidateQueries([endpoints.todos])
    },
  })
}
