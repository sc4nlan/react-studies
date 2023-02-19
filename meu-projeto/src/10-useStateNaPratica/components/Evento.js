function Evento(){

    function meuEvento({numero}){
        console.log(`Opa,fui disparado! ${numero}`)
    }

    return(
        <>
            <p>Cique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento;