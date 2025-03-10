import React from "react"
import Nav from "./Nav" 
import PageTitle from "./Pagetitle.jsx"

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

export default Layout