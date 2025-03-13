import React from "react"
//Importerer React for å kunne bruke JSX

//Importerer resources-arrayet fra ressurser.js, som inneholder informasjon om ulike ressurser
import { resources } from "./ressurser.js"

//Definerer Resources-komponenten som viser en liste med ressurser basert på valgt kategori
const Resources = ({ category }) => {

    //Logger hvilken kategori som er mottatt som prop
    console.log(" Recived Category:", category);

    //Jeg brukte ai her får å se hvordan jeg kunne få til å "bytte" navnet på sanity til headless-cms
    //Konverterer "sanity" til "headless-cms" fordi ressurser.js bruker dette navnet
    const mappedcategory = category === "sanity" ? "headless-cms": category;

    //Filtrerer ressursene basert på den tilpassede kategorien
    const filteredResources = resources.filter(res => res.category === mappedcategory);

    //Logger de filtrerte ressursene for debugging
    console.log("filteredResources:", filteredResources)


    //Viser en melding hvis det ikke finnes ressurser for den valgte kategorien
    if (filteredResources.length === 0) {
        return <div>Ingen ressurser tilgjengelig for denne kategorien.</div>;
    }

    //Returnerer en liste med ressurser for den valgte kategorien
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
//Her har jeg brukt ai som hjelp. Prompt, hvordan får jeg en liste med ressurser for kategorien. Gå også ai-en kontekst for ett bedre svar. 

//Eksporterer Resources-komponenten slik at den kan brukes i andre filer
export default Resources