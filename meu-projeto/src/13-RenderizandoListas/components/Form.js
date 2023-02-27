import { useState } from "react";

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //n envia a resposta para o backend
        console.log("Cadastrou o usuario");
        console.log(name);
        console.log(`Usuario ${name}, Senha ${password}`)
    }

    const [name, setName] = useState(); //dentro de useState() pode-se setar um valor default
    const [password, setPassword] = useState();
    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password"
                    id="password"
                    placeholder="Digite a sua senha"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
            
        </>
    )
}

export default Form;
