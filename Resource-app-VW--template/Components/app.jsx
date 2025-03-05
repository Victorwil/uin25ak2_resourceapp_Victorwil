import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Layout from "./Layout.jsx"
import Resources from "./Resources.jsx"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                path="/html"
                element={<Layout category="html"><Resources category="html" /></Layout>}
                />
                 <Route
                path="/css"
                element={<Layout category="css"><Resources category="css" /></Layout>}
                />
                 <Route
                path="/javascript"
                element={<Layout category="javascript"><Resources category="javascript" /></Layout>}
                />
                 <Route
                path="/react"
                element={<Layout category="react"><Resources category="react" /></Layout>}
                />
                 <Route
                path="/sanity"
                element={<Layout category="sanity"><Resources category="sanity" /></Layout>}
                />
            </Routes>
        </Router>
    )
} 

export default App