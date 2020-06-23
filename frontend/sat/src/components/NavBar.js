
import React from 'react';

const NavBar = () => {

return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <a className="navbar-brand" href="/">Infor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/collectors">Sumo Logic Collectors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/audit">Sumo Logic Audit</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Rumble</a>
                </li>
            </ul>
        </div>
    </nav>
    </>

    );
}
    export default NavBar;
