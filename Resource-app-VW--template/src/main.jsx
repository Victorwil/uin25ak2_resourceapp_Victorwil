import React from "react"
// Importerer React for å kunne bruke JSX og React-funksjonalitet

import ReactDOM from "react-dom/client"
// Importerer ReactDOM for å rendre React-komponenter til DOM-en

import App from "./Components/App.jsx";
// Importerer hovedkomponenten App fra Components-mappen

import "./styles/main.scss";
// Importerer hovedstilen fra SCSS-filen

// Finner HTML-elementet med id "root" og rendrer React-applikasjonen der
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
