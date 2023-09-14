import React from "react"

export default function Header(){
    return (
        <header className="header">
            <img 
                src={require("../img/troll-face.png")}
                className="header--image"
                alt="troll-face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"> Project Meme Generator</h4>
        </header>
    )
}