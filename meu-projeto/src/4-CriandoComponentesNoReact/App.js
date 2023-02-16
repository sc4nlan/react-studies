import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {
  const name = 'Santigas';
  const newName = name.toUpperCase();

  function sum(a,b){
    return a+b;
  }

  const url = "https://via.placeholder.com/150"

  //Os elementos JSX devem estar dentro de um className
  return (
    <div className="App"> 
      <h1>Alterando o JSX</h1>
      <p>Olá {newName}</p>
      <p>Soma {sum(2,4)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
