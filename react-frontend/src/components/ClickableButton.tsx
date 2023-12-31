import {socketConnection, socketMessages} from "../utility/socketConnection.ts";
import {user} from "../utility/user.ts";
import {CustomButton} from "./CustomButton.tsx";


interface ClickableButton {
	text: string,
	color: CustomButtonColor
}

export const ClickableButton = (props: ClickableButton) => {
	
	const sendApiRequest = async () => {
		const user_id = user.get_user_session()
		socketConnection.emit(socketMessages.button_event, {button: props.text, user_id: user_id});
	}
	
	return (
		<CustomButton text={props.text} color={props.color} onClick={sendApiRequest}/>
	)
}

