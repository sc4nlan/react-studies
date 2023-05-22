import Home from './componets/pages/Home'
import Contact from './componets/pages/Contact';
import NewProject from './componets/pages/NewProject';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div>
            <Link to="/">Home</Link>|
            <Link to="/newproject">Contact</Link>|
            <Link to="/contact">NewProject</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <p>Footer</p>
    </BrowserRouter>

  )
}

export default App;
