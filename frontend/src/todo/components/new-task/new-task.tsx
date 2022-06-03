import React from "react"

interface NewTaskProps {
  onAdd: (title: string) => void
  onCheckAll: () => void
  isToggleAllShow: boolean
}

export const NewTask = ({ onAdd, onCheckAll, isToggleAllShow }: NewTaskProps) => {
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
      {isToggleAllShow && <button onClick={onCheckAll}>Check all</button>}
      <input type="text" name="new-task" onKeyDown={handleKeyDown} />
    </div>
  )
}
