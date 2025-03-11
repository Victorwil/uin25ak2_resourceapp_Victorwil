import React from "react"
import { resources } from "./ressurser.js"

const Resources = ({ category }) => {
    console.log(" Recived Category:", category);

    const mappedcategory = category === "sanity" ? "headless-cms": category;

    const filteredResources = resources.filter(res => res.category === mappedcategory);

    console.log("filteredResources:", filteredResources)


    
    if (filteredResources.length === 0) {
        return <div>Ingen ressurser tilgjengelig for denne kategorien.</div>;
    }


    return (
        <div>
             <h2>{category.toUpperCase()} Resources</h2>
            <ul>
                {filteredResources.map((res) => (
                <li key={res.url}>
                    <a href={res.url} target ={"_blank"} rel="noopener noreferrer">
                        {res.title}
                    </a>
                </li>                    
                ))}
            </ul>
        </div>
    )
}


export default Resources