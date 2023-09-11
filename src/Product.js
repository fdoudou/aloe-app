import { Outlet,Link,useParams } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";
import { MyContext } from "../Contextor";
import { useContext } from "react";
import Footer from "./Footer";
import "../style.css";
import { useState } from "react";



const Product = () => {

    function viewCart (target) {
        //document.querySelector(target).classList.toggle('jma-show');
        if (document.querySelector('#z-modal-popup').className === 'modal-parent') {
            document.querySelector('#z-modal-popup').className = 'jma-show';
        }   else {
            document.querySelector('#z-modal-popup').className = 'modal-parent';
        }
    }

    const {id} = useParams();
    const {plantlist,cart,addToCart,removeFromCart} = useContext(MyContext);

    const [quantity,setQuantity] = useState(1);

    const addOne = () => {
        setQuantity(quantity + 1);
    }

    const minusOne = () => {
        setQuantity(quantity - 1);
    }

    const myCart = cart.map((c)=>{
        return (
            <div className="grid-c-2" style={{height:"150px"}}>
                <img src={plantlist[c.item].images[0]} style={{width:"115px",height:"115px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>

                <p onClick={()=>{removeFromCart(c.item)}}>
                    <div className="jma-mrg-tb" style={{fontSize:"16px"}}>{plantlist[c.item].name}</div>
                    <div className="jma-mrg-tb" style={{fontSize:"18px"}}>{plantlist[c.item].price} FCFA</div>

                    <div className="jma-mrg-tb">
                        <button onClick={minusOne} className="jma-pdg-8">-</button>
                        <input style={{width:"30px",border:"none",textAlign:"center"}} className="jma-pdg-8" value={quantity} min="1"/>
                        <button onClick={addOne} className="jma-pdg-8">+</button>
                    </div>
                </p>
            </div>
        )
    });

    const imagesThumbnails = plantlist[id].images.map((img,index)=> {
        return (
            <img key={index} className="jma-mrg" src={img} style={{width:"100px",height:"100px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>
        )
    })


    return (
            <>  
                <div>
                    My cart: 
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

                    <div className='modal-parent' id='z-modal-popup'>
                        <div className='modal-underlay' onClick={viewCart}></div>
                        <div className='jma-modal jma-anim-right'>
                            <h4>My Cart</h4>
                            <button onClick={viewCart}>&times;</button>

                            <div>
                                {myCart}
                                <button onClick={()=>{}} className="jma-mrg-bottom jma-pdg-16 jma-anim-zoom">Acheter maintenant</button>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </>
    )
}

export default Product;