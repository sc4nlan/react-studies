import Frase from './Frase'

function HelloWorld(){ //a funcao normalmente possui o mesmo nome do arquivo(componente)

    return(
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <Frase/>
        </div>
    )

}

export default HelloWorld