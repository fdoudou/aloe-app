import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/Category">Category</Link>
                </span>
                <span>
                    <Link to="/Product">Product</Link>
                </span>
                <span>
                    <Link to="/Nopage">Nopage</Link>
                </span>
                <span>
                    <Link to="/Cart">Cart</Link>
                </span>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout