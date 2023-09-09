import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = () => {
    return (
        <div style={{width:"100%",height:"200px",background:"skyblue",zIndex:"9",position:"relative",bottom:"0px"}}>
            <div>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/Category">Category</Link>
                </span>
                {/* <span>
                    <Link to="/Product">Product</Link>
                </span> */}
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

export default Footer