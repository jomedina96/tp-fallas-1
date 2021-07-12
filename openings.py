class Opening(object):
    def __init__(self, name = None, color = None, first_piece = None):
        self._name = name
        self._color = color
        self._first_piece_moved = first_piece

    def __str__(self):
        return self._name

    @classmethod
    def learn_openings(self, intellect):
        openings = self.__subclasses__()
        for opening in openings:
            if opening == UserOpening:
                continue
            intellect.learn(opening())

    @property
    def color(self):
        return self._color

    @property
    def name(self):
        return self._name
    
    @property
    def first_piece_moved(self):
        return self._first_piece_moved

    @color.setter
    def color(self, value):
        self._color = value
    
    @name.setter
    def name(self, value):
        self._name = value

    @name.setter
    def first_piece_moved(self, value):
        self._first_piece_moved = value

class ItalianOpening(Opening):
    def __init__(self):
        super(ItalianOpening, self).__init__(name="Italian", color="white")

class RetiOpening(Opening):
    def __init__(self):
        super(RetiOpening, self).__init__(name="Reti", color="white")

class KingsIndianOpening(Opening):
    def __init__(self):
        super(KingsIndianOpening, self).__init__(name="Kings Indian Defense", color="black")

class CaroKannOpening(Opening):
    def __init__(self):
        super(CaroKannOpening, self).__init__(name="Caro Kann", color="black")

class UserOpening(Opening):
    def __init__(self, color):
        super(UserOpening, self).__init__(name="User opening", color=color)
