import styles from './equipe.module.css';
import Membro from './membros';
import data from '../assets/membros.json'

const QuemSomos = () => {
  return (
    <div className={styles.equipe}>
      <div className={styles.divTexto}>
        <h2 className={styles.textoEquipe}>
          <span className={styles.colorEquipe}>QUEM </span>
          NÓS SOMOS?
        </h2>
        <span className={styles.about}>Acima de tudo, somos um conjunto de pessoas interessadas em realizar pesquisa e desenvolver projetos interdisciplinares envolvendo novas tecnologias.</span>
      </div>
      <div>
         {data.members.map((membro, index) => {
        return (
        <Membro key={index} foto={membro.foto} nome={membro.nome} cargo={membro.cargo} />
        )
      })} </div>
    </div>
  )
}

export default QuemSomos;