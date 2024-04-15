const Membro = ({foto,nome,cargo}) => {
    return (
        <>
            <img src={foto}/>
            <h3>{nome}</h3>
            <p>{cargo}</p>
        </>
    )
}

export default Membro;