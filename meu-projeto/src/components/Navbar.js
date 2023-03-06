import { Link } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";

function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>            
        </ul>
    )
}

export default Navbar;