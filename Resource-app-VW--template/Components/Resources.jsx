import React from "react"
import { resources } from "./ressurser.js"

const Resources = ({ category }) => {
    const filteredResources = resources.find(res => res.category === category)
    if (!filteredResources){
        return <div>Ingen ressurser funnet</div>
    }

    return (
        <div>
            <p>{filteredResources}</p>
            <ul>
                {filteredResources.sources.map((source, index) => (
                <li key={index}>
                    <a href={source.url} target ={_blank} rel="noopener noreferrer">
                        {source.title}
                    </a>
                </li>                    
                ))}
            </ul>
        </div>
    )
}

export default Resources