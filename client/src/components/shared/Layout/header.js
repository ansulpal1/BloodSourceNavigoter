import React from "react";
import './header.css';

import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    // logout handler
    const handleLogout = () => {

        toast.success("Logout Successfully");
        localStorage.clear();
        window.location.reload();
        setTimeout(() => {
            navigate(location.state || "/login")
        }, 3000);
    };

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <div className="navbar-brand h1 ">
                        <NavLink className="navbar-brand" to="/">
                            <img src="/logo.png" alt="logo" className='logo' />
                        </NavLink>
                    </div>


                    <div >
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item mx-3">
                                <p className="nav-link">
                                    <BiUserCircle className="fs-2" /> Welcome{" "}
                                    {user?.name || user?.hospitalName || user?.organisationName}
                                    &nbsp;
                                    <span className="badge bg-secondary">{user?.role}</span>
                                </p>
                            </li>
                            {location.pathname === "/" ||
                                location.pathname === "/donar" ||
                                location.pathname === "/hospital" ? (
                                <li className="nav-item mx-3">
                                    <Link to="/analytics" className="nav-link">
                                         Get Location
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item mx-3">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active"
                                        exact
                                        to="/">Home</NavLink>
                                </li>
                            )}
                            {location.pathname === "/login" ||
                                location.pathname === "/register" ? (<li className="nav-item mx-3">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active"
                                        to="/login">
                                        <button className='btn btn-danger'>Login</button>
                                    </NavLink>
                                </li>) : (
                                <li className="nav-item mx-3">


                                    <button className="btn btn-danger" onClick={handleLogout}>
                                        Logout
                                    </button>

                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav> */}



            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <div className="navbar-brand h1 ">
                        <NavLink className="navbar-brand" to="/">
                            <img src="/logo.png" alt="logo" className='logo' />
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className=" d-flex justify-content-end">
                        <div className="collapse navbar-collapse  " id="navbarScroll">



                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <p className="nav-link">
                                        <BiUserCircle className="fs-2" /> Welcome{" "}
                                        {user?.name || user?.hospitalName || user?.organisationName}
                                        &nbsp;
                                        <span className="badge bg-secondary">{user?.role}</span>
                                    </p>
                                </li>
                                <li className="nav-item ">
                                    <NavLink
                                        className="nav-link"
                                        activeClassName="active"
                                        exact
                                        to="/home">Home</NavLink>
                                </li>
                                {location.pathname === "/" ||

                                    location.pathname === "/hospital" ? (
                                    <li className="nav-item ">
                                        <Link to="/analytics" className="nav-link">
                                            Analytics
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="nav-item ">
                                        <NavLink
                                            className="nav-link"
                                            activeClassName="active"
                                            exact
                                            to="/">Inventory</NavLink>
                                    </li>
                                )}
                                {location.pathname === "/login" ||
                                    location.pathname === "/register" ? (<li className="nav-item mx-3">
                                        <NavLink
                                            className="nav-link"
                                            activeClassName="active"
                                            to="/login">
                                            <button className='btn btn-danger'>Login</button>
                                        </NavLink>
                                    </li>) : (
                                    <li className="nav-item">


                                        <button className="btn btn-danger" onClick={handleLogout}>
                                            Logout
                                        </button>

                                    </li>
                                )}
                            </ul>
                        </div>


                    </div>
                </div>
            </nav>




        </>




    );
};

export default Header;