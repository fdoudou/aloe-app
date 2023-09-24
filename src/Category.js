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
                
                <button className="fav-btn" onClick={()=>{viewCart('#z-modal-popup');addToCart(index,1)}}>Ajouter aux favoris</button>
            </div>
        )
    })

    return (
        <>  
            <div className="jma-mrg-tb">
                <div className="jma-mrg-tb" style={{margin:"auto auto",display:"flex",overflow:"scroll"}}>
                    <button className="jma-mrg-tb jma-mrg-32" onClick={()=>{}}><Link to="/category/A">Plantes mixtes</Link></button>
                    <button className="jma-mrg-tb jma-mrg-32" onClick={()=>{}}><Link to="/category/B">Plantes d'intérieur</Link></button>
                    <button className="jma-mrg-tb jma-mrg-32" onClick={()=>{}}><Link to="/category/C">Plantes d'extérieur</Link></button>
                </div>
                <div className="grid-c-3" style={{minHeight:"450px",maxWidth:"768px",gridGap:"20px 15px",position:"relative",margin:"auto 30px",justifyContent:"center"}}>
                    {productList}
                </div>

                <Cart/>
                <Footer/>
            </div>
        </>
    )
}

export default Category;