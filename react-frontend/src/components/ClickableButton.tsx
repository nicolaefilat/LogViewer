import {socketConnection, socketMessages} from "../utility/socketConnection.ts";
import {user} from "../utility/user.ts";

type ClickableButtonProps = {
	text: string
}


export const ClickableButton = (props: ClickableButtonProps) => {
	
	const sendApiRequest = async () => {
		const user_id = user.get_user_session()
		socketConnection.emit(socketMessages.button_click_event, {button: props.text, user_id: user_id});
	}
	
	return (
		<button
			onClick={sendApiRequest}
			className={`bg-blue-500 hover:bg-blue-600 active:bg-blue-700 p-4 text-2xl rounded-md text-white`}>{props.text}
		</button>
	)
}