import styles from "./equipe.module.css";
import Membro from "./membros";
import data from "../../assets/membros.json";

const QuemSomos = () => {
	return (
		<div className={styles.equipe}>
			<div className={styles.divTexto}>
				<h2 className={styles.textoEquipe}>
					<span className={styles.colorEquipe}>QUEM </span>
					NÓS SOMOS?
				</h2>
				<span className={styles.about}>
					Acima de tudo, somos um conjunto de pessoas interessadas em realizar
					pesquisa e desenvolver projetos interdisciplinares envolvendo novas
					tecnologias.
				</span>
			</div>
			<div className={styles.membersContainer}>
				{data.members.map((membro) => (
          <Membro
            key={membro.name}
            nome={membro.name}
            cargo={membro.job}
            foto={membro.image}
          />
        ))}
			</div>
		</div>
	);
};

export default QuemSomos;
