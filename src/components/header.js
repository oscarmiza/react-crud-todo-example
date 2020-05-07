import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


function Header(props) {
    const { pathname } = props.location;

    //show style on hover
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === "/" && "bg-dark text-white"}`} to="/">
                            todo
            </Link>
                    </li>
                </ul>
            </div>
        </nav>


</>
    );
}

export default withRouter(Header);
