import React from "react";
import { link } from react-router-dom;

const Nav = () => {
    return (
        <nav>
            <ul>
            <li><link to= "/html">HTML</link></li>
            <li><link to= "/css">CSS</link></li>
            <li><link to= "/javascript">Javascript</link></li>
            <li><link to= "/react">React</link></li>
            <li><link to= "/sanity">Sanity</link></li>

                
            </ul>
        </nav>
    )
}

export default Nav;