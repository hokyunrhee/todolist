import abc

from backend.src.todo.domain.todo_item import TodoItem


class UpdateTodoCommand:
    def __init__(self, id, title):
        self.id = id
        self.title = title


class UpdateTodoUsecase(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def update(self, update_todo_item: UpdateTodoCommand) -> TodoItem:
        raise NotImplementedError
