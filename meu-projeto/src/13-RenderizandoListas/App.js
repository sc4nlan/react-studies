import logo from './logo.svg';
import './App.css';
import OutrasListas from './components/OutrasListas';

//Componentes permitem dividir a aplicacao em partes, App.js eh um

function App() {

  const meusItems = ['React', 'Vue', 'Angular', 'Next'];

  return (
    <div className="App">
      <h1>Renderizando Listas</h1>
      <OutrasListas itens={meusItems}/>
      <OutrasListas itens={[]}/>
    </div>
  )
}

export default App;
