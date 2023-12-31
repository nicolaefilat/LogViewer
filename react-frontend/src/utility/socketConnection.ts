import {io} from 'socket.io-client';

const API_HTTP_URL = "/"
const API_SOCKET_URL = "/"

const apiFetch = (url: string): Promise<Response> => {
	return fetch("/api" + url)
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


