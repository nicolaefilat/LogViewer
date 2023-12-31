import {ClickableButton} from "./ClickableButton.tsx";
import {LogViewer} from "./LogViewer/LogViewer.tsx";
import {user} from "../utility/user.ts";
import ThemeToggle from "./ThemeToggle.tsx";
import {CustomButton} from "./CustomButton.tsx";


const App = () => {
	return (
		<div
			className="h-full flex flex-col gap-5 p-10 items-center bg-gradient-45 from-purple-200 to-sky-300 dark:from-gray-800 dark:to-violet-950">
			<img src="https://cdn-icons-png.flaticon.com/512/1960/1960242.png" alt="logo" className="fixed left-5 top-5 w-10 visible dark:invisible"/>
			
			<svg onClick={()=>{window.location.href = "http://www.google.com"}} className="fixed left-5 top-5 w-10 invisible dark:visible" xmlns="http://www.w3.org/2000/svg" version="1.1"  width="512" x="0" y="0" viewBox="0 0 56 60" ><g><path d="M12 60h40a4 4 0 0 0 4-4V10.83a2.984 2.984 0 0 0-.255-1.2.459.459 0 0 0-.033-.062 2.975 2.975 0 0 0-.592-.861L47.294.88a2.975 2.975 0 0 0-.861-.592.459.459 0 0 0-.062-.033A2.984 2.984 0 0 0 45.17 0H12a4 4 0 0 0-4 4v28H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6v2a4 4 0 0 0 4 4zM52.586 9H49.88A2.883 2.883 0 0 1 47 6.12V3.414zM10 4a2 2 0 0 1 2-2h33v4.12A4.885 4.885 0 0 0 49.88 11H54v45a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2h24a2 2 0 0 0 2-2V34a2 2 0 0 0-2-2H10zM2 34h32v18H2z" fill="#ffffff" opacity="1" data-original="#000000" className=""></path><path
				d="M15 9h24a1 1 0 0 0 0-2H15a1 1 0 0 0 0 2zM15 14h24a1 1 0 0 0 0-2H15a1 1 0 0 0 0 2zM15 19h34a1 1 0 0 0 0-2H15a1 1 0 0 0 0 2zM15 24h34a1 1 0 0 0 0-2H15a1 1 0 0 0 0 2zM50 28a1 1 0 0 0-1-1H15a1 1 0 0 0 0 2h34a1 1 0 0 0 1-1zM49 32h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM49 37h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM49 42h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM49 47h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM49 52h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zM17 49a4 4 0 0 0 4-4v-4a4 4 0 1 0-8 0v4a4 4 0 0 0 4 4zm-2-8a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zM12 48a1 1 0 0 0-1-1H7v-9a1 1 0 0 0-2 0v9a2 2 0 0 0 2 2h4a1 1 0 0 0 1-1zM27 49a4 4 0 0 0 4-4v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1a2 2 0 1 1-4 0v-4a2 2 0 0 1 3.887-.667 1 1 0 0 0 1.884-.666A4 4 0 0 0 23 41v4a4 4 0 0 0 4 4z"
				fill="#ffffff" opacity="1" data-original="#000000" className=""></path></g>
			</svg>
			<ThemeToggle/>
			<h1 className="text-2xl font-bold dark:text-white"> Logging Project</h1>
			<div className="flex w-3/4 justify-center gap-5 max-md:grid max-md:grid-cols-2 max-md:gap-x-5">
				<ClickableButton text="Button 1" color="blue"/>
				<ClickableButton text="Button 2" color="blue"/>
				<CustomButton color="red" text="Reset" onClick={() => {
					user.clear_user_session();
					location.reload()
				}}/>
				<CustomButton color="green" text="Refresh" onClick={() => location.reload()}/>
			</div>
			<h1 className="text-xl font-semibold dark:text-white">Console</h1>
			<div
				className="grow w-1/2 max-md:w-3/4 px-4 py-2 overflow-scroll rounded-md bg-slate-600 shadow-lg shadow-slate-900 dark:bg-gray-800 dark:shadow-xl dark:shadow-gray-950">
				<LogViewer/>
			</div>
		</div>
	)
}

export default App
