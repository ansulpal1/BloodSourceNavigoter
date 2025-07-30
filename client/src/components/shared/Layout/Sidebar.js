import React from "react";
//import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
    //GET USER STATE
    const { user } = useSelector((state) => state.auth);

    const location = useLocation();

    return (
        <div>
            <div className="sidebar">
                <div className="menu">
                    {user?.role === "organisation" && (
                        <>
                            <div
                                className={`menu-item ${location.pathname === "/" && "activee"}`}
                            >
                                <i className="fa-solid fa-warehouse"></i>
                                <Link to="/">Inventory</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/donar" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-hand-holding-medical"></i>
                                <Link to="/donar">Donor</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/hospital" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-hospital"></i>
                                <Link to="/hospital">Hospital</Link>
                            </div>
                        </>
                    )}
                    {user?.role === "admin" && (
                        <>
                            <div
                                className={`menu-item ${location.pathname === "/donar-list" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-warehouse"></i>
                                <Link to="/donar-list">Donor List</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/hospital-list" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-hand-holding-medical"></i>
                                <Link to="/hospital-list">Hospital List</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/org-list" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-hospital"></i>
                                <Link to="/org-list">Organisation List</Link>
                            </div>
                        </>
                    )}
                    {(user?.role === "donar" || user?.role === "hospital") && (
                        <div
                            className={`menu-item ${location.pathname === "/orgnaisation" && "activee"
                                }`}
                        >
                            <i className="fa-sharp fa-solid fa-building-ngo"></i>
                            <Link to="/orgnaisation">Organization</Link>
                        </div>
                    )}
                    {user?.role === "hospital" && (
                        <>
                            <div
                                className={`menu-item ${location.pathname === "/consumer" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-hospital-user"></i>
                                <Link to="/consumer">Consumer</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/find-donar" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-hand-holding-medical"></i>
                                <Link to="/find-donar">Find  Donors</Link>
                            </div>
                        </>
                    )}
                    {user?.role === "donar" && (
                        <>
                            <div
                                className={`menu-item ${location.pathname === "/donation" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-droplet" style={{ color: "#d41616" }}></i>
                                <Link to="/donation">Donation</Link>
                            </div>
                            <div
                                className={`menu-item ${location.pathname === "/notification" && "activee"
                                    }`}
                            >
                                <i className="fa-solid fa-bell"></i>
                                <Link to="/notification">Notifications</Link>
                            </div>
                        </>
                    )}

                    {/* {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                className={`menu-item ${isActive && "active"}`}
                key={menu.name}
              >
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })} */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;