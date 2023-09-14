import React from 'react';

export default function Navbar(){
    return (
        <nav>
            <img src={require("../img/airbnb-logo.png")} className='nav--logo' alt='nav logo'/>
        </nav>
    )
}