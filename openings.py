class Opening(object):
    def __init__(self, name = None, color = None, position = None, difficulty = None, style = None, minimum_time = None, objective = None):
        self._name = name
        self._color = color
        self._position = position
        self._difficulty = difficulty
        self._style = style
        self._minimum_time = minimum_time
        self._objective = objective

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

    @property
    def style(self):
        return self._style
    
    @property
    def minimum_time(self):
        return self._minimum_time

    @property
    def objective(self):
        return self._objective

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

    @style.setter
    def style(self, value):
        self._style = value

    @minimum_time.setter
    def minimum_time(self, value):
        self._minimum_time = value

    @objective.setter
    def objective(self, value):
        self._objective = value


class ItalianOpening(Opening):
    def __init__(self):
        super(ItalianOpening, self).__init__(name="Italian Opening", color="white", position="open", difficulty=1, style="dinamic", minimum_time=1, objective="win")

class RuyLopezOpening(Opening):
    def __init__(self):
        super(RuyLopezOpening, self).__init__(name="Ruy Lopez", color="white", position="open", difficulty=3, style="dinamic", minimum_time=2, objective="win")

class ChigorinOpening(Opening):
    def __init__(self):
        super(ChigorinOpening, self).__init__(name="French Defense: Chingorin variation", color="white", position="semi-open", difficulty=3, style="dinamic", minimum_time=1, objective="stalemate")

class LondonOpening(Opening):
    def __init__(self):
        super(LondonOpening, self).__init__(name="London System", color="white", position="closed", difficulty=1, style="positional", minimum_time=2, objective="stalemate")

class KingsIndianAttackOpening(Opening):
    def __init__(self):
        super(KingsIndianAttackOpening, self).__init__(name="Kings Indian Attack", color="white", position="closed", difficulty=4, style="positional", minimum_time=3, objective="win")

class KingsIndianDefenseOpening(Opening):
    def __init__(self):
        super(KingsIndianDefenseOpening, self).__init__(name="Kings Indian Defense", color="black", position="closed", difficulty=2, style="positional", minimum_time=2, objective="stalemate")

class CaroKannOpening(Opening):
    def __init__(self):
        super(CaroKannOpening, self).__init__(name="Caro Kann", color="black", position="semi-open", difficulty=3, style="positional", minimum_time=3, objective="win")

class HungarianDefenseOpening(Opening):
    def __init__(self):
        super(HungarianDefenseOpening, self).__init__(name="Hungarian Defense", color="black", position="closed", difficulty=5, style="dinamic", minimum_time=3, objective="stalemate")

class GrecoOpening(Opening):
    def __init__(self):
        super(GrecoOpening, self).__init__(name="Greco Defense", color="black", position="open", difficulty=2, style="dinamic", minimum_time=1, objective="win")

class ScandinavianOpening(Opening):
    def __init__(self):
        super(ScandinavianOpening, self).__init__(name="Scandinavian Defense", color="black", position="semi-open", difficulty=1, style="dinamic", minimum_time=1, objective="win")

class StonewallAttackOpening(Opening):
    def __init__(self):
        super(StonewallAttackOpening, self).__init__(name="Stonewall Attack", color="white", position="closed", difficulty=2, style="positional", minimum_time=2, objective="stalemate")

class GrunfeldDefenceOpening(Opening):
    def __init__(self):
        super(GrunfeldDefenceOpening, self).__init__(name="Grunfeld Defense", color="black", position="closed", difficulty=5, style="positional", minimum_time=3, objective="win")

class AlekhineDefenceOpening(Opening):
    def __init__(self):
        super(AlekhineDefenceOpening, self).__init__(name="Alekhine's Defense", color="black", position="open", difficulty=4, style="positional", minimum_time=3, objective="win")

class RetiOpening(Opening):
    def __init__(self):
        super(RetiOpening, self).__init__(name="Reti Opening", color="white", position="semi-open", difficulty=4, style="positional", minimum_time=2, objective="win")

class TorreAttackOpening(Opening):
    def __init__(self):
        super(TorreAttackOpening, self).__init__(name="Torre Attack", color="white", position="open", difficulty=2, style="dinamic", minimum_time=2, objective="win")


class UserOpening(Opening):
    def __init__(self, color, position, difficulty, style, minimum_time, objective):
        super(UserOpening, self).__init__(name="User opening", color=color, position=position, difficulty=difficulty, style=style, minimum_time=minimum_time, objective=objective)
