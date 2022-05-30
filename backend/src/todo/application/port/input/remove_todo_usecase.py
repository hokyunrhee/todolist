import abc


class RemoveTodoUsecase(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def remove(self,id):
        raise NotImplementedError
