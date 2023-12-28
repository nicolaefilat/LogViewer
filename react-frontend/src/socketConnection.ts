import {io} from 'socket.io-client';

const API_BASE_URL = "localhost:5000"
const API_HTTP_URL = "http://localhost:5000"
const API_SOCKET_URL = "ws://" + API_BASE_URL
const socketMessages = {
	button_response_event: "button_response",
	button_click_event: "button_event"
}
const socketConnection = io(API_SOCKET_URL);

export {
	socketConnection,
	API_HTTP_URL,
	socketMessages
};


