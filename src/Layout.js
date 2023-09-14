import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext } from "react";

const Layout = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);
    return (
        <div style={{width:"100%",height:"75px",background:"teal",zIndex:"9"}}>
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

                <button className="jma-pdg-8" onClick={()=>{viewCart('#x-modal-popup')}}>
                    search <svg style={{display:"inline",verticalAlign:"middle"}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                </button>
                
                <button className="jma-pdg-8" onClick={()=>{viewCart('#z-modal-popup')}}> cart <svg style={{display:"inline",verticalAlign:"middle"}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokLinejoin="round">
                        <circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                    </svg><span style={{background:"teal",borderRadius:"18px",color:"white",padding:"3px 5px",fontSize:"10px"}}>{cart.length}</span>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg> */}
                </button>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout