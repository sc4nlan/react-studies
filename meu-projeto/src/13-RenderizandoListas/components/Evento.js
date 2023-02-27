import Button from './Button';

function Evento(){
    function meuEvento(){
        console.log("Ativando primeiro evento");
    }

    function segundoEvento(){
        console.log("Ativando segundo evento");
    }

    return(
        <>  
            <p>Cique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </>
    )
}

export default Evento;