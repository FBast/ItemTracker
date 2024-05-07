import React from 'react';

function Navbar({ title }) {
    return (
        <header className="navbar">
            <h1>{title}</h1>
        </header>
    );
}

export default Navbar;