import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <label className="nav-logo">
                        CAR SELLER
                    </label>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/allcars"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                SEE MORE CAR
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/login"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Login
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/register"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;