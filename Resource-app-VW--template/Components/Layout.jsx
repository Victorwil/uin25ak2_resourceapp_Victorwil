import React, { Children } from "react"
import Nav from "./Nav.jsx"
import PageTitle from "./Pagetitle.jsx"

const Layout = ({ category, Children}) => {
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