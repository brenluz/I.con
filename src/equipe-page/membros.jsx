import styles from "./equipe.module.css";

const Membro = ({ foto, nome, cargo }) => {
	return (
		<div className={styles.memberContainer}>
			<div className={styles.avatarContainer}>
				<img className={styles.avatar} src={foto} alt="Foto do iconico" />
			</div>
			<h3 style={{margin: 0}}>{nome}</h3>
			<p className={styles.cargo}>{cargo}</p>
		</div>
	);
};

export default Membro;
