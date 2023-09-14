import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = () => {
    return (
        <div className="jma-pdg-16" style={{width:"100%",height:"200px",background:"teal",position:"relative",bottom:"0px"}}>
            <div>
                <span className="jma-pdg-16">
                    <Link to="/">Home</Link>
                </span>
                <span className="jma-pdg-16">
                    <Link to="/Category">Category</Link>
                </span>
                {/* <span>
                    <Link to="/Product">Product</Link>
                </span> */}
                <span className="jma-pdg-16">
                    <Link to="/Nopage">Nopage</Link>
                </span>
                <span className="jma-pdg-16">
                    <Link to="/Cart">Cart</Link>
                </span>
            </div>
            <Outlet/>
        </div>
    )
}

export default Footer