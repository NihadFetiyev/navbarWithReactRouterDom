import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.css"

function Navbar() {
    return (
        <>
            <div className="navLinks">
                <Link className={"leftLink"} to={"/"}>Dazzling Demo</Link>
                <div className="rightside">
                    <button>
                        <NavLink to={"/"} activeClassName="active">Home</NavLink>
                    </button>
                    <button>
                        <NavLink activeClassName="active" to={"/Gallery"}>Gallery</NavLink >
                    </button>
                    <button>
                        <NavLink activeClassName="active" to={"/Languages"}>Languages</NavLink >
                    </button>
                    <button>
                        <NavLink activeClassName="active" to={"/about"}>About</NavLink >
                    </button>
                    <button>
                        <NavLink activeClassName="active" to={"/Shortcodes"}>Shortcodes</NavLink >
                    </button>
                    <button>
                        <Link to={"/login"}>Login</Link >
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar