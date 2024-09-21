import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className="badge bg-light fs4 text-dark">News Daily</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link active" onClick={() => setCategory("business")}>Business</div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
