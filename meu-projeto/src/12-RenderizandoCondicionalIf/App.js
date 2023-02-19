import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional';

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {
  return (
    <div className="App">
      <h1>Renderizando Condicionais</h1>
      <Condicional/>
    </div>
  )
}

export default App;
