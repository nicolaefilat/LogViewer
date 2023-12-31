import {useEffect, useState} from "react";
import {user} from "../../utility/user.ts";
import {apiFetch, socketConnection, socketMessages} from "../../utility/socketConnection.ts";


const useLogViewer = () => {
	const [messages, setMessages] = useState<string[]>([])
	const [loaded, setLoaded] = useState(false)
	
	const restorePreviousLogMessages = (user_session: string) => {
		apiFetch("/get_messages?user_id=" + user_session).then(data => data.json()).then(messages => {
			setMessages(messages)
			setLoaded(true)
			console.log("Loaded messages")
		}).catch(error => {
			console.error("Error in get previous Messages", error)
		})
	}
	
	useEffect(() => {
		const restoreLog = async () => {
			if (!user.has_user_session()) {
				await apiFetch("/get_session").then(response => response.text()).then(session => {
					console.log("Session", session)
					user.set_user_session(session)
				})
			}
			restorePreviousLogMessages(user.get_user_session())
		};
		restoreLog()
	}, [])
	
	useEffect(() => {
		const addMessage = (msg: string) => setMessages(prevMessages => [...prevMessages, msg]);
		socketConnection.on(socketMessages.button_event, addMessage)
		
		// remove socket handler
		return () => {
			socketConnection.off(socketMessages.button_event, addMessage)
		}
	}, [])
	
	return {
		messages,
		loaded
	}
}

export default useLogViewer;