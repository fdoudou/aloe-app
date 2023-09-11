import { Outlet,Link } from "react-router-dom";
import Cart from "./Cart";
import Footer from "./Footer";

const Nopage = () => {
    return (
        <>
            <div>
                <h3>
                    Erreur <br/>
                    Désolé, cette page est introuvable!
                </h3>
            </div>
            <Cart/>
        </>
    )
}

export default Nopage;