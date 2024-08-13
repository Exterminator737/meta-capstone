import React from "react";
import logo from "../images/Logo .svg"

export default function Nav() {

    const [isMenuVisible, setIsMenuVisible] = React.useState(false)

    function openMenu() {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <nav className={`navbar ${isMenuVisible ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt = ""/>
            </a>
            {/*NavBar for mobile devices */}
                <div className="menu-icon" onClick={openMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`links ${isMenuVisible ? "visible" : ""}`}>
                    <li><a href= "/">Home</a></li>

                    <li><a href= "/">About</a></li>
               
                    <li><a href= "/">Services</a></li>
                
                    <li><a href= "/">Menu</a></li>
                
                    <li><a href= "/">Reservations</a></li>
                
                    <li><a href= "/booking">Order Online</a></li>
                
                    <li><a href= "/">Login</a></li>
                </ul>
        </nav>
    )
}