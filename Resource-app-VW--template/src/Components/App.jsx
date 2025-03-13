import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
//Importerer nødvendige moduler fra react routing

import Layout from "./Layout.jsx"
//Importerer layout komponenten

import Resources from "./Resources.jsx"
//importerer resources komponenten som viser innhold basert på kategori

//definerer komponenten app
const App = () => {
    return (
        <Router>
            <Layout>
                 <Routes>
                    <Route path="/" element={<Resources category="html" />} />
                    <Route path="/html" element={<Resources category="html" />} />
                    <Route path="/css" element={<Resources category="css" />} />
                    <Route path="/javascript" element={<Resources category="javascript" />} />
                    <Route path="/react" element={<Resources category="react" />} />
                    <Route path="/sanity" element={<Resources category="sanity" />} />
                </Routes>
            </Layout>
        </Router>
    )
} 

//Eksporterer app komponenten slik at den kan brukes i andre filer
export default App
