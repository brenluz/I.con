import styles from './contato.module.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';

const Formulario = (props) => {

    const  [inputValue, setInputValue] =  useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputValue);
    }
    return(
        <form className={styles.formulario} onSubmit= {handleSubmit}>
            <input className={styles.textoform} placeholder= {props.mensagem} type="text" value={inputValue} onChange= {handleChange}/>
        </form>
    )
}
export default Formulario;