import React from "react"
//Importerer React for å kunne bruke JSX og komponenter

//Definerer pagetitle 
const PageTitle = ({ category }) => {
    const titles = {
        html: "HTML resources",
        css: "CSS resources",
        javascript: "Javascript resources",
        react: "React Resources",
        sanity: "Sanity Resources"
    }

    return (
        <h2>{titles[category] || "Ressurser"}</h2>
    )
}

//Eksporterer pageitlte slik at den kan brukes
export default PageTitle;


