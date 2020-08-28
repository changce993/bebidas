import React from 'react'
import './header.css'

const Header = ({ titulo }) => {
    return (
        <header>
            <h1 className="container">{titulo}</h1>
        </header>
    )
}

export default Header
