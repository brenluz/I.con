import Formulario from "./formulario.jsx";

const Enviemsg = () => {
	return (
		<div className="bg-[#222629] flex flex-col h-max py-5 px-10 gap-y-1 gap-x-2">
			<p className="text-slate-100 text-4xl font-bold">Envie sua mensagem</p>
			<div className="flex flex-col md:flex-row">
				<Formulario mensagem="Seu nome aqui" type="text" />
				<Formulario mensagem="Seu E-mail" type="email" />
			</div>
			<Formulario mensagem="Mensagem" type="text" className="bg-red-500" />
		</div>
	);
};
export default Enviemsg;
