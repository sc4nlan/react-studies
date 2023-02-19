function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //n envia a resposta para o backend
        console.log("Cadastrou o usuario");
    }

    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
            
        </>
    )
}

export default Form;
