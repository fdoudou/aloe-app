import { Outlet,Link } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";

const Product = () => {
    return (
        <div>
            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
            <span>ProductName</span><br/>
            <span>Price</span>
        </div>
    )
}

export default Product;