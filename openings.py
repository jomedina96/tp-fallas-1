class Opening(object):
    def __init__(self, name = None, color = None, position = None, difficulty = None):
        self._name = name
        self._color = color
        self._position = position
        self._difficulty = difficulty

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
    def name(self):
        return self._name

    @property
    def color(self):
        return self._color

    @property
    def position(self):
        return self._position

    @property
    def difficulty(self):
        return self._difficulty

    @color.setter
    def color(self, value):
        self._color = value
    
    @name.setter
    def name(self, value):
        self._name = value

    @position.setter
    def position(self, value):
        self._position = value
    
    @difficulty.setter
    def difficulty(self, value):
        self._difficulty = value


class ItalianOpening(Opening):
    def __init__(self):
        super(ItalianOpening, self).__init__(name="Italian", color="white", position="open", difficulty=1)

class RuyLopezOpening(Opening):
    def __init__(self):
        super(RuyLopezOpening, self).__init__(name="Ruy Lopez", color="white", position="open", difficulty=3)

class ChigorinOpening(Opening):
    def __init__(self):
        super(ChigorinOpening, self).__init__(name="French Defense: Chingorin variation", color="white", position="semi-open", difficulty=3)

class LondonOpening(Opening):
    def __init__(self):
        super(LondonOpening, self).__init__(name="London System", color="white", position="closed", difficulty=1)

class KingsIndianAttackOpening(Opening):
    def __init__(self):
        super(KingsIndianAttackOpening, self).__init__(name="Kings Indian Attack", color="white", position="closed", difficulty=4)

class KingsIndianDefenseOpening(Opening):
    def __init__(self):
        super(KingsIndianDefenseOpening, self).__init__(name="Kings Indian Defense", color="black", position="closed", difficulty=2)

class CaroKannOpening(Opening):
    def __init__(self):
        super(CaroKannOpening, self).__init__(name="Caro Kann", color="black", position="semi-open", difficulty=3)

class HungarianDefenseOpening(Opening):
    def __init__(self):
        super(HungarianDefenseOpening, self).__init__(name="Hungarian Defense", color="black", position="closed", difficulty=5)

class GrecoOpening(Opening):
    def __init__(self):
        super(GrecoOpening, self).__init__(name="Greco Defense", color="black", position="open", difficulty=2)

class ScandinavianOpening(Opening):
    def __init__(self):
        super(ScandinavianOpening, self).__init__(name="Scandinavian Defense", color="black", position="semi-open", difficulty=1)


class UserOpening(Opening):
    def __init__(self, color, position, difficulty):
        super(UserOpening, self).__init__(name="User opening", color=color, position=position, difficulty=difficulty)
