import { Link } from "react-router-dom";
import '../../assets/styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-info" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"> 
                            <Link className="navbar-brand" to={"/"}><FontAwesomeIcon icon={faHome} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to={"/contact"}><FontAwesomeIcon icon={faAddressBook} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

