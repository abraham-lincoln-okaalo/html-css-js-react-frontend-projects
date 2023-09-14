import React from "react"

export default function Navbar(){
    return (
        <nav>
            <img src={require("../images/react-icon-small.png" )} className="nav--icon" />
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Introduction</h4>
        </nav>
    )
}