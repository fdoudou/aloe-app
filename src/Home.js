import { Outlet,Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext,useState } from "react";
import frontimage from "../images/aloeh.jpg";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = () => {

    const {plantlist,frontPlant,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    const firstRow = frontPlant.map((plant,index) => {
        return (
            <div key={index}>
                <div >
                    <Link to={`product/${index}`}>
                        <img src={plant.images[0]} style={{width:"350px",height:"300px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plant.name}</span><br/>
                            <span>{plant.price} FCFA</span>
                        </p>
                    </Link>
                </div>
                
                <button onClick={()=>{viewCart('#z-modal-popup');addToCart(index,1)}}>Ajouter aux favoris</button>
            </div>
        )
    })

    const productList = plantlist.map((plant,index) => {
        return (
            <div key={index} className="jma-mrg-tb">
                <div >
                    <Link to={`product/${index}`}>
                        <img src={plant.images[0]} style={{width:"100%",height:"250px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plant.name}</span><br/>
                            <span>{plant.price} FCFA</span>
                        </p>
                    </Link>
                </div>
                
                <button onClick={()=>{viewCart('#z-modal-popup');addToCart(index,1)}}>Ajouter aux favoris</button>

            </div>
        )
    })

    return (
        <>
            <div className="jma-mrg-tb">
            <div>
                <img src={frontimage} style={{width:"100%",height:"400px",objectFit:"cover",objectPosition:"center",borderRadius:"30px"}}></img>
                <p className="jma-mrg-16">
                    Welcome to Aloeh!
                </p>
            </div>

            <div className="grid-c-2" style={{maxWidth:"768px",gridGap:"20px 15px",position:"relative",margin:"auto 50px",justifyContent:"center"}}>
                {firstRow}
            </div>

            <div className="grid-c-3" style={{maxWidth:"768px",position:"relative",margin:"auto 50px"}}>
                {productList}
            </div>

            {/* <div>
                <img style={{width:"100%",height:"100px",objectFit:"cover"}} src={frontimage}></img>
            </div> */}
            
            </div>
            <Cart/>
            <Footer/>
        </>
    )
}

export default Home;