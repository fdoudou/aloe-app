import { Outlet,Link,useParams } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";
import { MyContext } from "../Contextor";
import { useContext } from "react";

const Product = () => {
    const {id} = useParams();
    const {plantlist} = useContext(MyContext)
    return (
            <div>
                <div >
                    <Link to={`product/${id}`}>
                        <img src={plantlist[id].images[0]} style={{width:"200px",height:"250px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plantlist[id].name}</span><br/>
                            <span>{plantlist[id].price}</span>
                        </p>
                    </Link>
                </div>
                
                <button>Ajouter aux favoris</button>
                <p>
                    {plantlist[id].desciption}<br/>
                    {plantlist[id].availableQty}
                </p>
            </div>
    )
}

export default Product;