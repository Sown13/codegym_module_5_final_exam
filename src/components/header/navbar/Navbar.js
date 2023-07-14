import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return(
    <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
                <Link className="navbar-link" to={"/"}>
                    Trang chủ
                </Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to={"/many"}>
                    Danh sách Tour du lịch
                </Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to={"/one"}>
                    About
                </Link>
            </li>
        </ul>
    </nav>
    )
}