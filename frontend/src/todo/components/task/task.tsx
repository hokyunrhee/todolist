import React, { useState } from "react"

import { TaskProps } from "@/todo/domain/interface"

export const Task = ({ id, title, completed, onCheck, onDelete, onUpdate }: TaskProps) => {
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
        defaultValue={title}
        onBlur={(event) => handleBlur(event, id)}
        onKeyDown={(event) => handleKeyDown(event, id)}
      />
    </li>
  ) : (
    <li>
      <input type="checkbox" defaultChecked={completed} onClick={() => onCheck(id)} />
      <label onDoubleClick={() => handleDoubleClick(completed)}>{title}</label>
      <button onClick={() => onDelete(id)} />
    </li>
  )
}
