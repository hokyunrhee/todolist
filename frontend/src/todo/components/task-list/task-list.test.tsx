import { render, screen } from "@testing-library/react"

import { TaskList } from "./task-list"
import { tasks } from "./__fixtures__/tasks"

const mockOnCheck = jest.fn()
const mockOnDelete = jest.fn()
const mockOnUpdate = jest.fn()
const setup = () =>
  render(<TaskList tasks={tasks} onCheck={mockOnCheck} onDelete={mockOnDelete} onUpdate={mockOnUpdate} />)

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
