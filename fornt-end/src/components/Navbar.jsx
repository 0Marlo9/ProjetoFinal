import { Link } from "react-router-dom"
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar"> 
    
        <ul>

            <li>
                <Link to={`/btn`} className="new-btn">Menu</Link>
            </li>
            <li>
                <Link to={`/btn1`} className="new-btn"> Postagens </Link>
            </li>
            <li>
                <Link to={`/btn3`} className="new-btn"> Postar </Link>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar
