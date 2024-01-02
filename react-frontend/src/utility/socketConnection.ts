import {io} from 'socket.io-client';

const API_HTTP_URL = "http://localhost:5000/"
const API_SOCKET_URL = "ws://localhost:5000"

const apiFetch = (url: string): Promise<Response> => {
	return fetch(API_HTTP_URL + url)
}

const socketMessages = {
	button_event: "button_event",
}
const socketConnection = io(API_SOCKET_URL);

export {
	socketConnection,
	API_HTTP_URL,
	socketMessages,
	apiFetch
};


