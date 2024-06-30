import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

const Form = () => {

	const { register, handleSubmit } = useForm();
	const [data, setData] = useState("");

	const onSubmit = (formData) => {
		setData(JSON.stringify(formData));
		console.log(data);
	}

	return (
		<form className="w-full flex justify-center" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col w-full p-0.5 gap-y-4 md:max-w-screen-md" >
				<div className="flex flex-row md:flex-col justify-center items-center gap-x-4 md:gap-x-0 md:gap-y-4">
					<input
						{...register("name")}
						className="form-input rounded-md bg-[#353a3e] text-slate-100 placeholder:text-slate-400 w-full focus:text-black focus:bg-white border-none focus:outline-none focus:ring-0"
						placeholder="Seu nome aqui"
						type="text"
					/>
					<input
						{...register("email")}
						className="form-input rounded-md bg-[#353a3e] text-slate-100 placeholder:text-slate-400 w-full focus:text-black focus:bg-white border-none focus:outline-none focus:ring-0"
						placeholder="Seu E-mail"
						type="email"
					/>
				</div>
				<input
					{...register("message")}
					className="form-input h-28 rounded-md bg-[#353a3e] text-slate-100 placeholder:text-slate-400 w-full focus:text-black focus:bg-white border-none focus:outline-none focus:ring-0"
					placeholder="Mensagem"
					type="text"
				/>
				<button className="bg-main text-slate-100 flex justify-center items-center w-max px-5 py-3 md:py-4 rounded-md hover:bg-slate-100 hover:text-main" type="submit">
					<HiOutlineMail size={20} className="hover:text-main"/>
					<span className="font-semibold pl-2">Enviar</span> 
				</button>
			</div>
		</form>
	);
};

export default Form;
