import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import List from './components/List'

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <br/>
      <Pessoa nome="matheus" idade="20" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
