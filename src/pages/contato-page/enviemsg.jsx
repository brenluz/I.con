import styles from "./contato.module.css";
import Formulario from "./formulario.jsx";

const Enviemsg = () => {
	return (
		<div className={styles.backgroundc2}>
			<p className={styles.mensagem}>Envie sua mensagem</p>
			<Formulario mensagem="Seu nome aqui" />
			<Formulario mensagem="Seu E-mail" />
			<Formulario mensagem="Mensagem" />
		</div>
	);
};
export default Enviemsg;
