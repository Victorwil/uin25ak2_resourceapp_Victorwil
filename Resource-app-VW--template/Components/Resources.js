import {resources} from "../ressurser.js"

const Resources = ({ category }) => {
    const FilteredResources = resources.find(res => res.category === category);

    return (
        <div>
            <h2>{FilteredResources?.category.toUpperCase()}</h2>
            <p>{FilteredResources?.text}</p>
            <ul>
                {FilteredResources?.sources.map((source, index) => (
                    <li key = {index}>
                      <a href={source.url} target="_blank" rel ="noopener noreferrer">
                        {source.title}
                        </a>                          
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Resources;