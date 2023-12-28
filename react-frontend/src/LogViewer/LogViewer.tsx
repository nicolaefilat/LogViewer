import useLogViewer from "./useLogViewer.tsx";

export const LogViewer = () => {
	
	const {messages, loaded} = useLogViewer()
	
	if (!loaded) {
		return <p>Loading...</p>
	}
	
	const listItems = messages.map((message, index) =>
		<li key={index} className="text-lg">
			<i>{index}. </i>
			<pre className="inline">{message}</pre>
		</li>
	);
	return (<ul className="text-white text-xl">{listItems}</ul>);
}
