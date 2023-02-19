import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import Item from './components/Item';

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <br/>
      <Pessoa nome="matheus" idade="20" foto="https://via.placeholder.com/150"/>
      <ol>
        <Item marca="Chevrolet" anoLancamento={1989}/>
        <Item marca="Renault" anoLancamento={2012}/>
        <Item marca="Ferrari" anoLancamento={2019}/>
        <Item/>
      </ol>
    </div>
  );
}

export default App;
