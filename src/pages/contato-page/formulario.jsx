import styles from "./contato.module.css";
import { useState } from "react";

const Formulario = (props) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputValue);
	};

	return (
		<form className="flex flex-col w-full p-0.5" onSubmit={handleSubmit}>
			<input
				className={`${props.className} form-input rounded-md bg-zinc-500 placeholder:text-slate-100`}
				placeholder={props.mensagem}
				type={props.type}
				value={inputValue}
				onChange={handleChange}
			/>
		</form>
	);
};
export default Formulario;
