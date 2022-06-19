import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { TaskRow } from "./task-row"
import { tasks } from "@/todo/__fixtures__/tasks"
import { TaskItem } from "@/todo/domain/task-item"

const task = tasks[0]
const mockOnCheck = jest.fn()
const mockOnDelete = jest.fn()
const mockOnUpdate = jest.fn()
const taskItem = new TaskItem(task)
const setup = () =>
  render(<TaskRow taskItem={taskItem} onCheck={mockOnCheck} onDelete={mockOnDelete} onUpdate={mockOnUpdate} />)

describe("Task Item", () => {
  it("renders with title and checkbox", () => {
    setup()

    const title = screen.getByText(task.title)
    const checkbox = screen.getByRole("checkbox")

    expect(title).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it("clicks checkbox", () => {
    setup()

    const checkbox = screen.getByRole("checkbox")
    userEvent.click(checkbox)

    expect(mockOnCheck).toBeCalledTimes(1)
    expect(mockOnCheck).toBeCalledWith(task.id, !task.completed)
  })

  it("clicks delete button", () => {
    setup()

    const deleteButton = screen.getByRole("button")
    userEvent.click(deleteButton)

    expect(mockOnDelete).toBeCalledTimes(1)
    expect(mockOnDelete).toBeCalledWith(task.id)
  })

  it("updates title with text", () => {
    setup()

    const title = screen.getByText(task.title)
    userEvent.dblClick(title)
    const input = screen.getByRole("textbox")

    expect(input).toHaveValue(task.title)

    userEvent.clear(input)
    const newTitle = "grab a coffee"
    userEvent.type(input, `${newTitle}{enter}`)

    expect(mockOnUpdate).toBeCalledTimes(1)
    expect(mockOnUpdate).toBeCalledWith(task.id, newTitle)
  })

  it("updates title with empty text", () => {
    setup()

    const title = screen.getByText(task.title)
    userEvent.dblClick(title)
    const input = screen.getByRole("textbox")

    expect(input).toHaveValue(task.title)

    userEvent.clear(input)
    const newTitle = ""
    userEvent.type(input, `${newTitle}{enter}`)

    expect(mockOnDelete).toBeCalledTimes(1)
    expect(mockOnDelete).toBeCalledWith(task.id)
  })

  it("can't open edit field with completed task", () => {
    render(
      <TaskRow
        taskItem={new TaskItem({ ...task, completed: true })}
        onCheck={mockOnCheck}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    )

    const title = screen.getByText(task.title)

    userEvent.dblClick(title)
    const input = screen.queryByRole("textbox")

    expect(input).not.toBeInTheDocument()
  })
})
