import logo from './logo.svg';
import './App.css';

//JSX é como um HTML, porem dentro do codigo JS,
//O HTML tem de estar correto, ou n ira compilar

function App() {
  const name = 'Santigas';
  const newName = name.toUpperCase();

  function sum(a,b){
    return a+b;
  }

  const url = "https://via.placeholder.com/150"


  return (
    <div className="App"> //Os elementos JSX devem estar dentro de um className
      <h1>Alterando o JSX</h1>
      <p>Olá {newName}</p>
      <p>Soma {sum(2,4)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
