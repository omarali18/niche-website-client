import { Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const { user, handleLogout } = useAuth()

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
                        {user.email && <li className="nav-item">
                            <NavLink
                                exact
                                to="/dashboard"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Dashboard
                            </NavLink>
                        </li>}


                        {
                            user.email ?

                                <li className="nav-item">
                                    <NavLink
                                        exact
                                        to="/login"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        <Button className="logout-btn" sx={{ color: "white" }} onClick={handleLogout}>logOut</Button>
                                    </NavLink>
                                </li>
                                :
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
                        }


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