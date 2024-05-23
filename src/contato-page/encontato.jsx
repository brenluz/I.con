import styles from './contato.module.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const Entre_contato = () => {
    return (
        <div className= {styles.background}>

            <h2 className= {styles.texto1}>Entre em Contato</h2>
            <p className= {styles.texto2}>Estamos abertos para dialogar e desenvolver pesquisa e projetos em parceria!</p>
            <p className= {styles.email}><HiOutlineMail/>icon@ufba.br</p>
            <p className= {styles.info}>
                <FaLocationDot/><br/>
                Universidade Federal da Bahia<br/>
                Instituto de Humanidades, Artes e Ciências<br/>
                Rua Barão de Jeremoabo, s/n, PAF-5, Sala 202<br/>
                Ondina – CEP 40170-115.<br/>
                Salvador – Bahia – Brasil.
            </p>

        </div>
  
    );
};
export default Entre_contato