import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbar">
            <Link to="/">
                <h1>Home</h1>
            </Link>

            <Link to="/login">
                <h1>login</h1>
            </Link>

            <Link to="/register">
                <h1>register</h1>
            </Link>
        </div>
    )

}

export default Navbar;