import React from "react"
import image from "../images/react-logo-1.png"

export default function Navbar() {
    return (
        <nav>
            <img src={image} alt="react logo" className="nav-logo"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React course - Project 1</h4>
        </nav>
    )
}