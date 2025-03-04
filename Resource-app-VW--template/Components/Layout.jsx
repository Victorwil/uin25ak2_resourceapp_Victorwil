import Nav from "./Nav"

const layout = ({ children }) => {
    return (
        <div> 
            <Nav />
            <main>{children}</main>
        </div>
    )
};

export default layout