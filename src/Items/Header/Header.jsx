import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/headerLogo.jpg"
import './header.css';


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">

                <Link className="nav-link" to={"/"}> <img className="logoImage" src={logo} alt="..." /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/clients"}>Clients</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/rentals"}>Rentals</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;