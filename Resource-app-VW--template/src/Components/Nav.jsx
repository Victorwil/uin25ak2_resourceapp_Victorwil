import React from "react";
//Importerer React for å kunne bruke JSX og komponenter

import { Link } from "react-router-dom";
//Importerer nødvendige moduler fra react routing

//Definerer Nav
const Nav = () => {
    return (
        <nav>
             <ul>
                <li><Link to="/html">HTML</Link></li>
                <li><Link to="/css">CSS</Link></li>
                <li><Link to="/javascript">Javascript</Link></li>
                <li><Link to="/react">React</Link></li>
                <li><Link to="/sanity">Sanity</Link></li>
            </ul>
        </nav>
    )
}

//Eksporterer nav slik at den kan brukes i andre filer
export default Nav;