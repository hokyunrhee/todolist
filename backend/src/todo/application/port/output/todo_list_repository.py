import abc

from src.todo.domain.todo_item import TodoItem


class TodoListRepository(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def create(self, todo_item: TodoItem) -> TodoItem:
        raise NotImplementedError
