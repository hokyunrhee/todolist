import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Footer } from "./footer"

const useRouter = jest.spyOn(require("next/router"), "useRouter")
const router = { push: jest.fn() }
const mockHandleClearCompleted = jest.fn()

const setup = () => render(<Footer onClearCompleted={mockHandleClearCompleted} taskCount={3} />)

describe("Footer", () => {
  it('clicks "all" button', () => {
    useRouter.mockReturnValue(router)
    setup()

    const button = screen.getByRole("button", { name: /all/i })
    userEvent.click(button)
    expect(useRouter).toHaveBeenCalled()
    expect(router.push).toHaveBeenCalledTimes(1)
    expect(router.push).toHaveBeenCalledWith("/")
  })

  it('clicks "active" button', () => {
    useRouter.mockReturnValue(router)
    setup()

    const button = screen.getByRole("button", { name: /active/i })
    userEvent.click(button)

    expect(router.push).toHaveBeenCalledTimes(1)
    expect(router.push).toHaveBeenCalledWith("/active")
  })

  it('clicks "completed" button', () => {
    useRouter.mockReturnValue(router)
    setup()

    const button = screen.getByRole("button", { name: /^completed$/i })
    userEvent.click(button)

    expect(router.push).toHaveBeenCalledTimes(1)
    expect(router.push).toHaveBeenCalledWith("/completed")
  })

  it("renders number of tasks in active", () => {
    setup()

    const taskCount = screen.getByText("3")

    expect(taskCount).toBeInTheDocument()
  })

  it('clicks "clear completed" button', () => {
    setup()

    const button = screen.getByRole("button", { name: /clear completed/i })
    userEvent.click(button)

    expect(mockHandleClearCompleted).toHaveBeenCalledTimes(1)
  })
})
