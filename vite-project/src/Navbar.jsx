import { Link } from "react-router-dom";
import './App.css';

function Navbar() {

    return (
        <div className="navbar">
            <h1 id="website_name">
                <Link to="/">Foodie Restoru</Link>
            </h1>
            <div className="nav_middle_links">
                <Link to="/cart" className="link">
                    Cart
                </Link>
                <Link to="/favourite" className="link">
                    Favourite
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
