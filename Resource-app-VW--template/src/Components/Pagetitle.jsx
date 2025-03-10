import React from "react"

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

export default PageTitle;


