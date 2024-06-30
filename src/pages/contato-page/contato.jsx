import EntreContato from "./encontato.jsx";
import styles from "./contato.module.css";
import Enviemsg from "./enviemsg.jsx";
import Waves from "../Components/Waves.jsx";

const Contato = () => {
	return (
		<div>
			<EntreContato />
			<Enviemsg />
			<Waves color= "#fec400" />
		</div>
	);
};
export default Contato;
