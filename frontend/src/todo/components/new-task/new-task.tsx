import React from "react"

interface NewTaskProps {
  onAdd: (title: string) => void
  onCheckAll: () => void
}

export const NewTask = ({ onAdd, onCheckAll }: NewTaskProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const title = event.currentTarget.value

      if (title.length !== 0) {
        onAdd(title)
        event.currentTarget.value = ""
      }
    }
  }

  return (
    <div>
      <button onClick={onCheckAll}>Check all</button>
      <input type="text" name="new-task" placeholder="What needs to be done?" onKeyDown={handleKeyDown} />
    </div>
  )
}
