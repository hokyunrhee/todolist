import { rest } from "msw"

import { Tasks } from "@/todo/api/types"
import { tasks } from "./db"

export const getTasks = rest.get<Tasks>("/api/tasks", (_, res, ctx) => {
  return res(ctx.json(tasks))
})
