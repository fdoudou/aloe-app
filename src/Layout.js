import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext } from "react";
import aloelogo from "../assets/aloe-logo-w.png"

const Layout = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    // function viewMenu (target) {
    //     if (document.querySelector(target).className === 'modal-parent') {
    //         document.querySelector(target).className = 'jma-show';
    //     }   else {
    //         document.querySelector(target).className = 'modal-parent';
    //     }
    // }

    return (
        <>
            <div style={{background:"teal",zIndex:"9"}}>
                <div className="jma-pdg-16 jma-mrg- flex-header">
                    <span className="jma-pdg-16"><Link to="/">Acceuil</Link></span>
                    <span className="jma-pdg-16" onClick={()=>{}}><Link to="/category/B">Plantes d'intérieur</Link></span>
                    <span className="jma-pdg-16" onClick={()=>{}}><Link to="/category/C">Plantes d'extérieur</Link></span>
                    <span className="jma-pdg-16" onClick={()=>{}}><Link to="/category/A">Plantes mixtes</Link></span>
                    <span className="jma-pdg-16"><Link to="/nopage">Page d'erreur</Link></span>
                </div>
                <div className=" action-btn">
                    <button className="flex-btn jma-pdg-8 c-btn" onClick={()=>{viewCart('#c-modal-popup')}}>
                        <svg className="jma-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                sz        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                    <span style={{position:"relative",textAlign:"center",transform:"translate(0,-90px)",left:"90px"}} className="flex-btn jma-pdg-8"><Link to="/">{/*<img className="flex-btn jma-pdg-8 c-btn" src={aloelogo} width="20px" height="20px"/>*/}Aloe</Link></span>

                    <button className="jma-pdg-8 jma-right c-btn" onClick={()=>{viewCart('#x-modal-popup')}}>
                        <svg className="jma-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                        
                    <button className="jma-pdg-8 jma-right c-btn" onClick={()=>{viewCart('#z-modal-popup')}}>
                        <svg className="jma-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                        </svg><span style={{background:"turquoise",borderRadius:"18px",color:"white",padding:"3px 5px",fontSize:"10px"}}>{cart.length}</span>
                    </button>
                </div>
                    
            </div>

            <div className='modal-parent'  id="c-modal-popup">
                <div className='modal-underlay' onClick={()=>{viewCart('#c-modal-popup')}}></div>
                <div className='jma-modal jma-anim-right overlay-content'>
                    <span className="jma-pdg-16"><Link style={{color:"teal"}} to="/">Acceuil</Link></span>
                    <span className="jma-pdg-16" onClick={()=>{}}><Link style={{color:"teal"}} to="/category/B">Plantes d'intérieur</Link></span>
                    <span className="jma-pdg-16" onClick={()=>{}}><Link style={{color:"teal"}} to="/category/C">Plantes d'extérieur</Link></span>
                    <span className="jma-pdg-16" onClick={()=>{}}><Link style={{color:"teal"}} to="/category/A">Plantes mixtes</Link></span>
                    <span className="jma-pdg-16"><Link style={{color:"teal"}} to="/nopage">Page d'erreur</Link></span>
                    <button style={{fontSize:"16px"}} onClick={()=>{viewCart('#c-modal-popup')}}>&times;</button>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout