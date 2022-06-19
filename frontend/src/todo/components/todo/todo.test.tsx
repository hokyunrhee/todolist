import { render, screen, waitFor } from "@/utils/test-utils"
import userEvent from "@testing-library/user-event"

import { Todo } from "./todo"

const setup = () => render(<Todo />)

describe("Todo", () => {
  it("add new task", async () => {
    setup()

    const newTitle = "learn GO"
    const textBox = screen.getByPlaceholderText(/what needs to be done/i)
    userEvent.type(textBox, `${newTitle}{enter}`)

    let taskItem = await screen.findByText(newTitle)
    expect(taskItem).toBeInTheDocument()

    userEvent.type(textBox, `take a shower{enter}`)
    userEvent.type(textBox, `buy more qqq{enter}`)
    userEvent.type(textBox, `take a nap{enter}`)
    userEvent.type(textBox, `grab a coffee{enter}`)
    taskItem = await screen.findByText(/grab a coffee/i)
    expect(taskItem).toBeInTheDocument()

    const taskItems = await screen.findAllByRole("listitem")
    expect(taskItems).toHaveLength(5)
  })

  it("complete task", async () => {
    setup()

    const checkbox = await screen.findByRole("checkbox", { name: /grab a coffee/i })
    userEvent.click(checkbox)

    expect(await screen.findByRole("checkbox", { name: /grab a coffee/i, checked: true })).toBeChecked()

    userEvent.click(checkbox)

    expect(await screen.findByRole("checkbox", { name: /grab a coffee/i, checked: false })).not.toBeChecked()
  })

  it("delete task", async () => {
    setup()

    // eslint-disable-next-line testing-library/no-node-access
    const deleteButton = (await screen.findByText(/learn go/i)).nextSibling as Element
    userEvent.click(deleteButton)

    await waitFor(() => {
      expect(screen.queryByText(/learn go/i)).not.toBeInTheDocument()
    })
  })

  it("edit task title", async () => {
    setup()

    const title = "grab a coffee"
    const taskTitle = await screen.findByText(title)
    userEvent.dblClick(taskTitle)
    const taskTitleInput = await screen.findByDisplayValue(title)
    userEvent.clear(taskTitleInput)
    const newTitle = "book a flight"
    userEvent.type(taskTitleInput, `${newTitle}{enter}`)

    const taskItem = await screen.findByText(newTitle)
    expect(taskItem).toBeInTheDocument()
  })

  it("delete task when empty title is passed", async () => {
    setup()

    const title = "book a flight"
    const taskTitle = await screen.findByText(title)
    userEvent.dblClick(taskTitle)
    const taskTitleInput = await screen.findByDisplayValue(title)
    userEvent.clear(taskTitleInput)
    const newTitle = ""
    userEvent.type(taskTitleInput, `${newTitle}{enter}`)

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument()
    })
  })

  it("render active task count", async () => {
    setup()

    const taskCount = await screen.findByText("3")
    const numberOfActiveTasks = (await screen.findAllByRole("checkbox", { checked: false })).length

    expect(taskCount).toHaveTextContent(numberOfActiveTasks.toString())
  })

  it("check all tasks", async () => {
    setup()

    const checkAllButton = screen.getByRole("button", { name: /check all/i })
    userEvent.click(checkAllButton)

    await waitFor(() => {
      expect(screen.queryAllByRole("checkbox", { checked: false }).length).toBe(0)
    })
  })

  it("clear completed tasks", async () => {
    setup()

    const clearCompletedButton = screen.getByRole("button", { name: /clear completed/i })
    userEvent.click(clearCompletedButton)

    await waitFor(() => {
      expect(screen.queryAllByRole("listitem").length).toBe(0)
    })
  })
})
