function OutrasListas({itens}){
    return(
        <>
            <h3>Lista de coisas:</h3>
            {itens.length > 0 ? ( //o '?' serve como um 'entao isto' em um condicional if, deve ser seguido do else
                itens.map((item, index) => <p key={index}>{item}</p>) 
            ) : ( //o ':' eh o else
                <p>Lista vazia</p>
            )}
        </>
    )
}

export default OutrasListas;


/*
BEM BASICO(retorna erro de key):
        <>
            <h3>Lista de coisas:</h3>
            {
                itens.map((item) => 
                <p>{item}</p>
            )}
        </>

COMO O ANTERIOR(porem sem retornar erro de key):
        <>
            <h3>Lista de coisas:</h3>
            {
                itens.map((item, index) => 
                <p key={index}>{item}</p>
            )}
        </>
*/