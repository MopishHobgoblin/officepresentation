import React from 'react';
import { navLinks, dropDown, homePage } from '../../js/pageLinks';

export const NavBar = () => {
    return (
        <div className="NavBarFunction">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href={`${homePage.hash}${homePage.link}`}>{homePage.name}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                    {/*Mapping the navLinks declared in the pageLinks.js file*/}
                        {navLinks.map(item => {
                            return (<li className="nav-item">
                                <a className="nav-link" href={`${item.hash}${item.link}`}>{item.name}</a>
                            </li>)
                        })}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href={`${homePage.hash}`} id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Office365 Products</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {/*Mapping the dropDown menu links declared in the pageLinks.js file*/}
                        {dropDown.map(item => {
                            return (<a className="dropdown-item" href={`${item.hash}${item.link}`}>{item.name}</a>)
                        })}
                        </div>
                    </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}
