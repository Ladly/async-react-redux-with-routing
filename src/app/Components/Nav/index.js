import React from 'react'

import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Testing</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                
                    <li className="nav-item active">
                        <Link to="./homepage" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./showspage" className="nav-link">Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="./statefull" className="nav-link">Statefull</Link>
                    </li>
                </ul>
                    <input className="form-control col-3" type="search" placeholder="Search" aria-label="Search"/>
            </div>
        </nav>
    )
}