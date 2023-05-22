import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './componets/pages/Home'
import Contact from './componets/pages/Contact';
import NewProject from './componets/pages/NewProject';

import Container from './componets/layout/Container';
import Navbar from './componets/layout/Navbar';
import Footer from './componets/layout/Footer'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Container>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/newproject" element={<NewProject/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Container>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
