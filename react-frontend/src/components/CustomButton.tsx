import React from "react";

/*
## Waning
If another color is need you must add it to tailwind.config.js too:

Example
pattern: /bg-(red|green|blue)-(500|600|700)/

Check tailwind docs on supported colors https://tailwindcss.com/docs/text-color
 */
type CustomButtonColor = "red" | "blue" | "green"

interface CustomButtonProps {
    text: string
	color: CustomButtonColor
	onClick?: ((event: MouseEvent<T>) => void)
}


export const CustomButton = (props: CustomButtonProps) => {
	return (
		<button
			className={`bg-${props.color}-500 hover:bg-${props.color}-600 active:${props.color}-700 ` + "p-4 max-md:p-2 text-xl max-md:text-xl rounded-md text-white grow basis-0"}
			onClick={props.onClick}>
			{props.text}
		</button>
	)
}