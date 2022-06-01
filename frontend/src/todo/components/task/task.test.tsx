import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Task } from "./task"
import { task } from "./__fixtures__/task"

const mockOnCheck = jest.fn()
const mockOnDelete = jest.fn()
const mockOnUpdate = jest.fn()
const setup = () => render(<Task {...task} onCheck={mockOnCheck} onDelete={mockOnDelete} onUpdate={mockOnUpdate} />)

describe("Task", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

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
    expect(mockOnCheck).toBeCalledWith(task.id)
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
      <Task {...{ ...task, completed: true }} onCheck={mockOnCheck} onDelete={mockOnDelete} onUpdate={mockOnUpdate} />
    )

    const title = screen.getByText(task.title)

    userEvent.dblClick(title)
    const input = screen.queryByRole("textbox")

    expect(input).not.toBeInTheDocument()
  })
})
