from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask import send_from_directory
from intellect.Intellect import Intellect
from intellect.Intellect import Callable
from openings import Opening, UserOpening
import os
import json
import random

app = Flask(__name__, template_folder='')
openings = {}
with open('static/aperturas.json') as json_data:
    openings = json.load(json_data)


@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

class MyIntellect(Intellect):
    def __init__(self):
        super(MyIntellect, self).__init__()
        self._recomended_openings = []
        self._user_opening = None

    @Callable
    def set_recomended_opening(self, recomended_opening):
        self._recomended_openings.append(recomended_opening)

    @Callable
    def get_user_opening(self):
        return self._user_opening

    def set_user_opening(self, opening):
        self._user_opening = opening

    def get_recomended_opening(self):
        if len(self._recomended_openings) == 0:
            return ""
        return random.choice(self._recomended_openings)

@app.route("/")
def home():
    return render_template('fallas.html')

@app.route("/result", methods=['POST'])
def result():
    body = request.get_json()
    user_opening = UserOpening(color=body["color"],
                        position=body["position"],
                        difficulty=int(body["difficulty"]),
                        style=body["style"],
                        minimum_time=int(body["minimum_time"]),
                        objective=body["objective"])
    
    myIntellect = MyIntellect()
    myIntellect.set_user_opening(user_opening)
    rules = myIntellect.learn(Intellect.local_file_uri("./rulesets/rules.policy"))
    Opening.learn_openings(myIntellect)

    myIntellect.reason()
    opening_data = {"name": ""}
    opening_name = myIntellect.get_recomended_opening()

    if opening_name != "":
        opening_data["name"] = opening_name
        opening_data.update(openings.get(opening_name))

    return jsonify(opening_data), 200

@app.route("/result2", methods=['POST'])
def result2():
    body = request.get_json()
    answers = body['answers']
