import { addTask } from "./addTask"
import { getTasks } from "./getTasks"
import { removeTask } from "./removeTask"
import { updateTask } from "./updateTask"

export const todoHandlers = [addTask, getTasks, removeTask, updateTask]
