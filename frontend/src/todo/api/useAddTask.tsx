import { useQueryClient } from "react-query"

import { usePost } from "@/utils/use-post"
import { endpoints } from "./endpoints"
import { Task } from "./types"

type Title = Pick<Task, "title">

export const useAddTask = () => {
  const queryClient = useQueryClient()

  return usePost<Task, Title>(`${endpoints.todos}`, {
    onSettled: () => {
      queryClient.invalidateQueries([endpoints.todos])
    },
  })
}
