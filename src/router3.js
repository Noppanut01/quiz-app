import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from "./home"
import Products from "./products"
import Member from "./member"
import "./navlink.css"
function Router3() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active_menu" : "menu"}
                    style={({ isActive }) => { return { fontWeight: isActive ? "bold" : "" } }}>
                    Home</NavLink> -&nbsp;
                <NavLink to="/products" className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Products</NavLink> -&nbsp;
                <NavLink to="/member" className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Member</NavLink> -&nbsp;
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                    Contact</NavLink>
            </nav>
            <Routes style={{ margin: "20px" }}>
                <Route path="/" element={<Home />} />
                <Route path="/products" Component={Products} />
                <Route path="/member" Component={Member} />
                <Route path="/contact" element={<div style={{ textAlign: "center" }}>Contact Page</div>} />
                <Route path="/*" element={<div style={{ textAlign: "center" }}>Error 404 Not Found</div>} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router3