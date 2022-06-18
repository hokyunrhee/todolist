import { useFetch } from "@/utils/use-fetch"
import { endpoints } from "./endpoints"
import { Tasks } from "./types"

export const useGetTasks = () => {
  return useFetch<Tasks>(`${endpoints.todos}`)
}
