from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask import send_from_directory
from openings import Opening, UserOpening
import os
import json
import random

app = Flask(__name__, template_folder="")
openings = {}
with open("static/aperturas.json") as json_data:
    openings = json.load(json_data)


@app.route("/favicon.ico")
def favicon():
    return send_from_directory(
        os.path.join(app.root_path, "static"),
        "favicon.ico",
        mimetype="image/vnd.microsoft.icon",
    )


@app.route("/")
def home():
    return render_template("fallas.html")


@app.route("/result", methods=["POST"])
def result():
    body = request.get_json()
    user_opening = None
    if body["difficulty"] != "" and body["minimum_time"] != "":
        user_opening = UserOpening(
            color=body["color"],
            position=body["position"],
            difficulty=int(body["difficulty"]),
            style=body["style"],
            minimum_time=int(body["minimum_time"]),
            objective=body["objective"],
        )
    elif body["difficulty"] != "":
        user_opening = UserOpening(
            color=body["color"],
            position=body["position"],
            difficulty=int(body["difficulty"]),
            style=body["style"],
            minimum_time=None,
            objective=body["objective"],
        )
    else:
        user_opening = UserOpening(
            color=body["color"],
            position=body["position"],
            difficulty=None,
            style=body["style"],
            minimum_time=None,
            objective=body["objective"],
        )

    opening_selected = None
    max_hit = 0
    hitted_map = {}

    for child in Opening.__subclasses__():
        if child == UserOpening:
            continue

        count_field = child().compareFields(user_opening)
        if max_hit <= count_field:
            max_hit = count_field
            hitted_map[max_hit] = child()

    opening_selected = None
    print(hitted_map)
    if max_hit >= 4:
        opening_selected = hitted_map[max_hit]
    opening_data = {"name": ""}

    if opening_selected != None:
        opening_name = opening_selected.name
        opening_data = {"name": opening_name}

        opening_data.update(openings.get(opening_name))

    return jsonify(opening_data), 200


@app.route("/result2", methods=["POST"])
def result2():
    body = request.get_json()
    answers = body["answers"]
