import random

from flask import Flask, request, Response
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

import uuid

user_id_dictionary = {}

BUTTON_RESPONSE_STRING = "button_response"
BUTTON_CLICK_STRING = "button_event"


@app.route("/get_session")
def get_session_id():
    user_id = uuid.uuid4()
    user_id_dictionary[user_id] = []
    return str(user_id)


@app.route("/get_messages")
def get_messages():
    user_id_param = request.args.get('user_id')
    if not user_id_param:
        return Response(status=400)
    user_id = uuid.UUID(user_id_param)
    print(user_id_dictionary, user_id)
    if user_id not in user_id_dictionary:
        return Response("No such user", status=404)
    return user_id_dictionary[user_id]


@socketio.on(BUTTON_CLICK_STRING)
def get_random_choice(json):
    app.logger.info(f'received json {json} on channel button_event')

    button_name = json.get("button")
    if not button_name:
        app.logger.error("The received json does not have `button` as field.")
        return

    user_id_param = json.get("user_id")
    if not user_id_param:
        app.logger.error("The received json does not have `user_id` as field.")
        return

    user_id = uuid.UUID(user_id_param)


    if user_id not in user_id_dictionary:
        return Response("No such user", status=404)

    random_choices = ["success", "failure"]
    choice = random.choice(random_choices)
    max_length = max(list(map(lambda x: len(x), random_choices)))
    choice_padded = choice.ljust(max_length)
    message = f"{choice_padded} - {button_name}"


    user_id_dictionary[user_id].append(message)
    app.logger.info(f"The user id {user_id_param} will receive this message: '{message}'")

    emit(BUTTON_RESPONSE_STRING, message)


if __name__ == '__main__':
    socketio.run(app)
