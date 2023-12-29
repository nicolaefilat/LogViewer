import {ClickableButton} from "./ClickableButton.tsx";
import {LogViewer} from "./LogViewer/LogViewer.tsx";
import {user} from "../utility/user.ts";
import ThemeToggler from "./ThemeToggler.tsx";


const App = () => {
	
	
	return (
		<div className="h-full flex flex-col gap-5 p-10 items-center bg-gradient-45 from-purple-200 to-sky-300
		        dark:from-gray-800 dark:to-violet-950">
			<ThemeToggler />
			<h1 className="text-2xl font-bold dark:text-white"> Logging Project</h1>
			<div className="flex gap-5">
				<ClickableButton text="Button 1"/>
				<ClickableButton text="Button 2"/>
				<button
					onClick={() => {
						user.clear_user_session();
						location.reload()
					}}
					className="bg-red-500 hover:bg-red-600 active:bg-red-700 p-4 text-2xl rounded-md text-white"> Reset
				</button>
				<button
					onClick={() => location.reload()}
					className="bg-green-500 hover:bg-green-600 active:bg-green-700 p-4 text-2xl rounded-md text-white"> Refresh
				</button>
			</div>
			<h1 className="text-xl font-semibold dark:text-white"> Log</h1>
			<div
				className="grow w-1/2 px-4 py-2 overflow-scroll rounded-md bg-slate-600 shadow-lg shadow-slate-900 dark:bg-gray-800 dark:shadow-xl dark:shadow-gray-950">
				<LogViewer/>
			</div>
		</div>
	)
}

export default App
