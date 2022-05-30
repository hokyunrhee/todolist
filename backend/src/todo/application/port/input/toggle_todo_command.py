import abc

from backend.src.todo.domain.todo_item import TodoItem


class ToggleTodoCommand:
    id: int

    def __init__(self, id):
        self.id = id


class ToggleTodoUsecase(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def toggle(self, todo_item: ToggleTodoCommand) -> TodoItem:
        raise NotImplementedError

