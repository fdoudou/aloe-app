import { Outlet,Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext,useState } from "react";
import frontimage from "../images/aloeh.jpg";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = () => {

    const {plantlist,allPlant,frontPlant,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    const firstRow = frontPlant.map((plant,index) => {
        return (
            <div key={index}>
                <div >
                    <Link to={`product/${plant.id}`}>
                        <img className="front-img" src={plant.images[0]} style={{objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plant.name}</span><br/>
                            <span>{plant.price} FCFA</span>
                        </p>
                    </Link>
                </div>
                
                <button className="fav-btn jma-zoom-out" onClick={()=>{viewCart('#z-modal-popup');addToCart(plant.id,1)}}>Ajouter aux favoris</button>
            </div>
        )
    })

    const productList = plantlist.map((plant,index) => {
        return (
            <div key={index} className="jma-mrg-tb">
                <div >
                    <Link to={`product/${plant.id}`}>
                        <img src={plant.images[0]} style={{width:"100%",height:"250px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plant.name}</span><br/>
                            <span>{plant.price} FCFA</span>
                        </p>
                    </Link>
                </div>
                
                <button className="fav-btn jma-zoom-out" onClick={()=>{viewCart('#z-modal-popup');addToCart(plant.id,1)}}>Ajouter aux favoris</button>

            </div>
        )
    })

    return (
        <>
            <div className="jma-mrg-tb">
            <div style={{height:"430px"}}>
                <img src={frontimage} style={{width:"100%",height:"400px",objectFit:"cover",objectPosition:"center",borderRadius:"30px"}}></img>
                <p className="jma-mrg-16" style={{height:"30px",width:"95%",top:"195px",position:"absolute",textShadow:"10px 0px 20px black",color:"white",fontSize:"30px",textOverflow:"ellipsis"}}>
                    Bienvenu à Aloeh!    Aloe est une plateforme qui commercialise des plantes de type aloe vera d'excellentes qualités!
                </p>
            </div>

            <div className="grid-c-2" style={{maxWidth:"768px",gridGap:"20px 15px",position:"relative",margin:"auto 50px",justifyContent:"center",justifyItems:"center"}}>
                {firstRow}
            </div>

            <div className="grid-c-3" style={{maxWidth:"768px",position:"relative",margin:"auto 50px"}}>
                {productList}
            </div>
            
            </div>
            <Cart/>
            <Footer/>
        </>
    )
}

export default Home;