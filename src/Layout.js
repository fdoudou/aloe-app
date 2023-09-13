import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext } from "react";

const Layout = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);
    return (
        <div style={{width:"100%",height:"75px",background:"skyblue",zIndex:"9"}}>
            <div className="jma-pdg-16 jma-mrg-">
                <span className="jma-pdg-16">
                    <Link to="/">home</Link>
                </span>
                {/*<span className="jma-pdg-16">
                    <Link to="/category">category</Link>
                </span>
                 <span>
                    <Link to="/Product">Product</Link>
                </span> */}
                <span className="jma-pdg-16">
                    <Link to="/nopage">nopage</Link>
                </span>

                <span className="jma-pdg-16">
                    <Link to="/cart">category</Link>
                </span>

                <button className="jma-pdg-16" onClick={()=>{viewCart('#x-modal-popup')}}>
                    search
                </button>
                
                <button className="jma-pdg-16" onClick={()=>{viewCart('#z-modal-popup')}}>
                    cart
                </button>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout