import React from "react";

import "../Styles/Nav.css";

function Navbar() {
    return (
        <div className="nav-main-div">
            <div className="nav-left">
                <button className="nav-btn">Logo</button>
                <button className="nav-btn">Problems</button>
                <button className="nav-btn">Discuss</button>
            </div>

            <div className="nav-right">
                <button className="nav-btn">Register</button>
                <button className="nav-btn">Sign In</button>
            </div>
        </div>
    )
}

export default Navbar