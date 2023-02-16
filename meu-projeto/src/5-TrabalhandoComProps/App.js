import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {
  const nome = "Maria";
  return (
    <div className="App"> 
      <SayMyName nome="Sr.White"/>
      <SayMyName nome="Jessie"/>
      <SayMyName nome={nome}/>
      <br/>
      <Pessoa idade="20" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
