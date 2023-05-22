import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>|
            <Link to="/newproject">Contact</Link>|
            <Link to="/contact">NewProject</Link>
        </div>
    )
}

export default Navbar