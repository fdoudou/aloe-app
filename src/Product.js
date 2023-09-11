import { Outlet,Link,useParams } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";
import { MyContext } from "../Contextor";
import { useContext } from "react";
import Footer from "./Footer";
import Cart from "./Cart";
import "../style.css";
import { useState } from "react";



const Product = () => {

    const {id} = useParams();
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    const [quantity,setQuantity] = useState(1);

    const addOne = () => {
        setQuantity(quantity + 1);
    }

    const minusOne = () => {
        setQuantity(quantity - 1);
    }

    

    const imagesThumbnails = plantlist[id].images.map((img,index)=> {
        return (
            <img key={index} className="jma-mrg" src={img} style={{width:"100px",height:"100px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>
        )
    })


    return (
            <>  
                <div className="grid-c-2 column-gap-3 jma-mrg-tb " style={{position:"relative",margin:"auto 50px",transform:""}}>
                    <div style={{height:"550px"}}>
                        <img src={plantlist[id].images[0]} style={{width:"460px",height:"450px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>
                        <div>
                            {imagesThumbnails}
                        </div>
                    </div>

                    <div>
                        <div>
                        <p>
                            <div className="jma-mrg-tb" style={{fontSize:"32px"}}>{plantlist[id].name}</div>
                            <div className="jma-mrg-tb" style={{fontSize:"20px"}}>{plantlist[id].price} FCFA</div>
                        </p>

                        <div>
                            <p>Quantité disponible: {plantlist[id].availableQty}</p>
                            <p>Dimensions: {plantlist[id].dimensions}</p>
                        </div>
                        </div>

                        <div className="grid-c-1">
                            <div className="jma-mrg-tb">
                                <button onClick={addToCart} className="jma-pdg-16">-</button>
                                <input style={{width:"30px",border:"none",textAlign:"center"}} className="jma-pdg-16" value={quantity} min="1"/>
                                <button onClick={addOne} className="jma-pdg-16">+</button>
                            </div>

                            <button onClick={()=>{viewCart();addToCart(id,quantity)}} className="jma-pdg-16 jma-anim-zoom">Ajouter aux favoris</button>
                        </div>
                        
                        <details className="jma-mrg-tb" open>
                            <summary>
                                <h4>
                                DETAILS
                                </h4>
                            </summary>
                            
                            <p className="jma-pdg-tb">
                                {plantlist[id].description}
                            </p>
                        </details>
                        <p>
                            <button className="jma-pdg-16 jma-round jma-mrg jma-anim-zoom">A</button>
                            <button className="jma-pdg-16 jma-round jma-mrg jma-anim-zoom">B</button>
                            <button className="jma-pdg-16 jma-round jma-mrg jma-anim-zoom">C</button>
                        </p>
                    </div>
                </div>

                    <Cart/>
                <Footer/>
            </>
    )
}

export default Product;