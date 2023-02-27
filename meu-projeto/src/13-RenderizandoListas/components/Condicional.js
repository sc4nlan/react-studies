import { useState } from "react";

function Condicional(){
    const [email, setMail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(){
        setUserEmail('');
    }

    return(
        <>
            <h4>Cadastre o seu email:</h4>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e)=> setMail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail && //forma de condicional utilizada em react, se email for true &&, entrar no condicional
                <div>
                    <p>O email do usuário eh: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            }
        </>
    )
}

export default Condicional;