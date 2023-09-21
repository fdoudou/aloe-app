import { Outlet,Link,useParams } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";
import { MyContext } from "../Contextor";
import { useContext } from "react";
import Cart from "./Cart";
import Footer from "./Footer";

import om from "../assets/om.jpeg";
//import wave from "../assets/wave.png";
import wari from "../assets/wari.jpeg";

const Checkout = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    let sumPrice = 0;

    const myCart = cart.map((c,index)=>{
        sumPrice += plantlist[c.item].price;
        return (
            <div key={index} className="grid-c-2 grid-m-2" style={{height:"150px",width:"100%"}}>
                <img src={plantlist[c.item].images[0]} style={{width:"115px",height:"115px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>

                <div>
                    <div onClick={()=>{}} className="jma-mrg-tb" style={{fontSize:"16px"}}>{plantlist[c.item].name} <button style={{position:"relative",right:"16px"}} onClick={()=>{removeFromCart(index)}}>supprimer &times;</button></div>
                    
                    <div className="jma-mrg-tb" style={{fontSize:"18px"}}>{plantlist[c.item].price} FCFA</div>

                    <div className="jma-mrg-tb">
                        <button onClick={()=>{updateQty(index,"MINUS_ONE")}} className="jma-pdg-8">-</button>
                        <input style={{width:"30px",border:"none",textAlign:"center"}} className="jma-pdg-8" value={c.qty} min="1"/>
                        <button onClick={()=>{updateQty(index,"ADD_ONE")}} className="jma-pdg-8">+</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
            <div className="jma-mrg-tb jma-pdg" style={{fontSize:"22px"}}>
                Réglez vos paiements
            </div>
            <div className="grid-c-2 jma-mrg">
                <div >
                    {myCart}
                </div>
                <div>
                    <p>
                        <span>Sous-total: </span>
                        <span className="jma-large jma-pdg" style={{fontSize:"22px"}}>
                            {sumPrice} FCFA
                        </span>
                    </p>

                    <div style={{height:"255px"}}>
                        <div>
                            <span className="jma-large jma-pdg-tb jma-pdg-16" style={{fontSize:"22px"}}>Selectionnez une méthode de paiement:</span>
                        </div>
                        <div>
                            <label for='v-type-2'>
                                <img className="jma-zoom-out" src={wari} style={{width:"100px",height:"100px",objectFit:"contain",borderRadius:"180px"}}/>
                            </label>
                            <input className='jma-hide' id="v-type-2" type="radio" name="vtype" value="2"/>
                        </div>

                        <div className=" jma-zoom-out">
                            <label for='v-type-3'>
                                <img className="jma-zoom-out" src={om} style={{width:"100px",height:"100px",objectFit:"contain",borderRadius:"180px"}}/>
                            </label>
                            <input className='jma-hide' id="v-type-3" type="radio" name="vtype" value="3"/>
                        </div>
                    </div>
                    
                    <button className="jma-large jma-pdg-16 jma-zoom-out" style={{width:"150px"}}>
                        Payer
                    </button>
                </div>
            </div>

            <Cart/>
            <Footer/>
        </>
    )
}

export default Checkout;