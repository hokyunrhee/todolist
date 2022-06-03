import React, { useState } from "react"

import { TaskItem } from "@/todo/domain/task-item"

interface TaskRowProps {
  taskItem: TaskItem
  onCheck: (id: string) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export const TaskRow = ({ taskItem, onCheck, onDelete, onUpdate }: TaskRowProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleUpdateTitle = (event: React.FormEvent<HTMLInputElement>, id: string) => {
    const title = event.currentTarget.value

    if (title.length === 0) {
      onDelete(id)
    } else {
      onUpdate(id, title)
    }

    setIsEditing(false)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>, id: string) => {
    handleUpdateTitle(event, id)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (event.key === "Enter") {
      handleUpdateTitle(event, id)
    }
  }

  const handleDoubleClick = (completed: boolean) => {
    if (!completed) {
      setIsEditing(true)
    }
  }

  return isEditing ? (
    <li>
      <input
        type="text"
        defaultValue={taskItem.title}
        onBlur={(event) => handleBlur(event, taskItem.id)}
        onKeyDown={(event) => handleKeyDown(event, taskItem.id)}
      />
    </li>
  ) : (
    <li>
      <input type="checkbox" defaultChecked={taskItem.completed} onClick={() => onCheck(taskItem.id)} />
      <label onDoubleClick={() => handleDoubleClick(taskItem.completed)}>{taskItem.title}</label>
      <button onClick={() => onDelete(taskItem.id)} />
    </li>
  )
}
