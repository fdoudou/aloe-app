import { Outlet,Link } from "react-router-dom";
import Cart from "./Cart";
import Footer from "./Footer";

const Nopage = () => {
    return (
        <>
            <div>
                <h3 className="jma-pdg-16">
                    <p>Erreur</p>
                    <p>Désolé, cette page est introuvable!</p>
                </h3>
            </div>
            <Cart/>
        </>
    )
}

export default Nopage;