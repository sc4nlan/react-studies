import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Footer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Empresa/>}/>
        <Route path="/empresa" element={<Contato/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
