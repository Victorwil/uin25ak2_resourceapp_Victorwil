import React from "react"
import { resources } from "./ressurser.js"

const Resources = ({ category }) => {
    console.log(" Recived Category:", category);

    const filteredResources = resources.filter(res => res.category === category);

    console.log("filteredResources:", filteredResources)


    if (!filteredResources || !filteredResources.sources || filteredResources.sources.length === 0) {
        return <div>Ingen ressurser tilgjengelig for denne kategorien.</div>;
    }
    

    return (
        <div>
             <h2>{category.toUpperCase()} Resources</h2>
            <ul>
                {filteredResources.sources.map((source, index) => (
                <li key={index}>
                    <a href={source.url} target ={"_blank"} rel="noopener noreferrer">
                        {source.title}
                    </a>
                </li>                    
                ))}
            </ul>
        </div>
    )
}


export default Resources