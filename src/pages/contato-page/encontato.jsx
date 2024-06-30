import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const EntreContato = () => {
	return (
		// Waves controladas via png e repetidas
		<div className="bg-main flex flex-col justify-center items-center bg-[url(/wave.png)] bg-repeat-x bg-top py-16">
			<h2 className="text-5xl uppercase text-slate-100 font-bold text-center hover:text-red-500">ENTRE EM CONTATO</h2>
			<p className="text-slate-100 text-center">
				Estamos abertos para dialogar e desenvolver pesquisa e projetos em
				parceria!
			</p>
			<span className="flex justify-center items-center gap-x-1 text-slate-100 font-bold">
				<HiOutlineMail/>
				icon@ufba.br
			</span>
			<div className="flex flex-col items-center">
				<FaLocationDot fill="white"/>
				<span className="text-slate-100">Universidade Federal da Bahia</span>
				<span className="text-slate-100">Instituto de Humanidades, Artes e Ciências</span>
				<span className="text-slate-100">Rua Barão de Jeremoabo, s/n, PAF-5, Sala 202</span>
				<span className="text-slate-100">Ondina – CEP 40170-115</span>
				<span className="text-slate-100">Salvador – Bahia – Brasil</span>
			</div>
		</div>
	);
};
export default EntreContato;
