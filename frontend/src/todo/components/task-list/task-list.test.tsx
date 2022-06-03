import { render, screen } from "@testing-library/react"

import { TaskList } from "./task-list"
import { tasks } from "./__fixtures__/tasks"
import { TaskItem } from "@/todo/domain/task-item"

const mockOnCheck = jest.fn()
const mockOnDelete = jest.fn()
const mockOnUpdate = jest.fn()
const taskItems = tasks.map((task) => new TaskItem(task))

const setup = () =>
  render(<TaskList taskItems={taskItems} onCheck={mockOnCheck} onDelete={mockOnDelete} onUpdate={mockOnUpdate} />)

describe("TaskList", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("renders list of items with provided tasks", () => {
    setup()

    const listItem = screen.getAllByRole("listitem")
    expect(listItem).toHaveLength(3)
  })
})
