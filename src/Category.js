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
        // if (plant.category === category) {
        //     return plant.category;
        // }
        return plant.category === category
    }

    let productList = plantlist.filter(categoryProduct);

    productList = productList.map((plant,index) => {
        return (
            <div key={index}>
                <div >
                    <Link to={`/product/${index}`}>
                        <img src={plant.images[0]} style={{width:"90%",height:"250px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
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
                <div className="jma-mrg-tb" style={{margin:"auto auto"}}>
                    <button onClick={()=>{}}><Link to="/category/A">Explore Category A</Link></button>
                    <button onClick={()=>{}}><Link to="/category/B">Explore Category B</Link></button>
                    <button onClick={()=>{}}><Link to="/category/C">Explore Category C</Link></button>
                </div>
                <div className="grid-c-3" style={{minHeight:"450px",maxWidth:"768px",gridGap:"20px 15px",position:"relative",margin:"auto auto"}}>
                    {productList}
                </div>

                <Cart/>
                <Footer/>
            </div>
        </>
    )
}

export default Category;