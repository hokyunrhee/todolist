import abc


class TodoQuery(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def get_todo_list(self):
        raise NotImplementedError
