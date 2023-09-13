import { NavLink, Outlet } from "react-router-dom"
import "../styles/index.css"

function RootLayout () {
    return (
        <>
            <NavLink 
                className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} 
                style={{
                    marginRight: "10px",
                    fontSize: "18px"
                }}
                to="/"
                >Home</NavLink>
            | <NavLink 
                style={{
                    margin: "10px",
                    fontSize: "18px"
                }}
                to="/blog"
                >Blog</NavLink> 
            | <NavLink
                style={{
                    margin: "10px",
                    fontSize: "18px"
                }}
                to="/about"
                >About</NavLink>
            <br/>
            <Outlet/>
        </>
    )
}

export default RootLayout