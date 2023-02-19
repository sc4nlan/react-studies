import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento/>
      <Evento/>
      <Form />
    </div>
  )
}

export default App;
