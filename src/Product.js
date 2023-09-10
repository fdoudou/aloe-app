import { Outlet,Link,useParams } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";
import { MyContext } from "../Contextor";
import { useContext } from "react";
import Footer from "./Footer";
import "../style.css";
import { useState } from "react";

const Product = () => {
    const {id} = useParams();
    const {plantlist} = useContext(MyContext);

    const [quantity,setQuantity] = useState(1);

    const addOne = () => {
        setQuantity(quantity + 1);
    }

    const minusOne = () => {
        setQuantity(quantity - 1);
    }

    const [cart,setCart] = useState([{"item":1,"qty":2}]);

    const addToCart = (id,qty) => {
        //let itemId = id;
        let newCart = [...cart];
        setCart([...newCart,{"item":id,"qty":qty}]);
        //setCart([...newCart,{"item":itemId,"qty":quantity}]);
    }

    const removeFromCart = (id,olCart) => {
        let oldCart = olCart.splice(id,1);
        setCart([...oldCart]);
    }

    const imagesThumbnails = plantlist[id].images.map((img,index)=> {
        return (
            <img key={index} className="jma-mrg" src={img} style={{width:"100px",height:"100px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>
        )
    })

    const myCart = cart.map((c)=>{
        return cart[0].item + " " + cart[0].qty;
    })

    return (
            <>  
                <div>
                    My cart: {myCart}
                </div>
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
                                <button onClick={minusOne} className="jma-pdg-16">-</button>
                                <input style={{width:"30px",border:"none",textAlign:"center"}} className="jma-pdg-16" value={quantity} min="1"/>
                                <button onClick={addOne} className="jma-pdg-16">+</button>
                            </div>

                            <button onClick={addToCart} className="jma-pdg-16 jma-anim-zoom">Ajouter aux favoris</button>
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
                <Footer/>
            </>
            
    )
}

export default Product;