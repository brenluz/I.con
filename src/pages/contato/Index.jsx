import EntreContato from "./EmContato.jsx";
import EnvieMensagem from "./EnvieMensagem.jsx"

const Contato = () => {
	return (
		<div id="contato">
				<EntreContato />
				<EnvieMensagem />
				<div className="bg-slate-100 flex flex-col justify-center items-center bg-[url(/wave.png)] bg-repeat-x bg-top py-16"/>
		</div>
	);
};
export default Contato;
