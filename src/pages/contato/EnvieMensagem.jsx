import Form from "./Form.jsx";

const EnvieMensagem = () => {
	return (
		<div className="bg-[#222629] flex flex-col h-max py-8 px-10 gap-x-2 items-center justify-center">
			<div className="mb-10">
				<p className="text-slate-100 text-2xl font-bold md:text-4xl">Envie sua mensagem</p>
			</div>
			<Form />
		</div>
	);
};
export default EnvieMensagem;
