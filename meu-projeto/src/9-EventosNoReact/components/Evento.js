import Button from './Button';

function Evento(){
    function meuEvento(){
        console.log(`Opa, fui disparado! ${numero}`)
    }

    return(
        <>  
            <p>Cique para disparar um evento:</p>
            <Button text="primeiro evento"/>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento;