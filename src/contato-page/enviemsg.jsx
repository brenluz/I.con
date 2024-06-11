import styles from './contato.module.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import Formulario from './formulario.jsx'

const Enviemsg = () => {
    return (
    <div className = {styles.backgroundc2}>
    <p className = {styles.mensagem}>Envie sua mensagem</p>
    <Formulario mensagem= 'Seu nome aqui'/>
    <Formulario mensagem= 'Seu E-mail'/>
    <Formulario mensagem= 'Mensagem' />
    </div>  
    )
}
export default Enviemsg