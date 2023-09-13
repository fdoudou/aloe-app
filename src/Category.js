import { Outlet,Link, useParams } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";
import { MyContext } from "../Contextor";
import { useContext } from "react";
import Cart from "./Cart";
import Footer from "./Footer";

const Category = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    const {category} = useParams();

    function categoryProduct(plant) {
        if (plant.category === category) {
            return {plant};
        }
    }

    let productList = plantlist.filter(categoryProduct);

    productList.map((plant,index) => {
        return (
            <div key={index}>
                <div >
                    <Link to={`product/${index}`}>
                        <img src={plant.images[0]} style={{width:"200px",height:"250px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plant.name}</span><br/>
                            <span>{plant.price} FCFA</span>
                        </p>
                    </Link>
                </div>
                
                <button onClick={()=>{viewCart();addToCart(index,1)}}>Ajouter aux favoris</button>

            </div>
        )
    })

    return (
        <>
            <div style={{maxWidth:"768px",display:"grid",gridTemplateColumns:"25% 25% 25% 25%",gridGap:"20px 15px"}}>
                {productList}
            </div>

            <Cart/>
            <Footer/>
        </>
    )
}

export default Category;