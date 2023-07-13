import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return(
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
                <Link className="navbar-link" to={"/"}>
                    Home
                </Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to={"/many"}>
                    Many
                </Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to={"/one"}>
                    One
                </Link>
            </li>
        </ul>
    </nav>
    )
}