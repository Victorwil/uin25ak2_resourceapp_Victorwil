import React from "react"
//Importerer React for å kunne bruke JSX og komponenter

import Nav from "./Nav" 
//Importerer navigasjonskomponenten

import PageTitle from "./Pagetitle.jsx"
//Importerer pagetitle komponenten som viser tittelen basert på kategori

//Definerer layout komponenten  
const Layout = ({ category, children}) => {
    return (
        <div>
            <header>
                <Nav />
                <PageTitle category={category} />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

//Eksporterer layout slik at den kan brukes i andre filer
export default Layout