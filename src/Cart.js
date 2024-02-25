import { Outlet, Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext, useState } from "react";


const Cart = () => {
    const { allPlant, cart, addToCart, removeFromCart, updateQty, viewCart } = useContext(MyContext);

    const [query, setQuery] = useState("");

    const [resultset, setResultset] = useState([]);

    let myResultset = [];

    function searchResult(plant) {
        return plant.name.includes(query) === true;
    }

    const searchItem = (event) => {
        let qu = event.target.value;
        setQuery(event.target.value);
        if (qu === "") {
            setResultset(allPlant.filter(searchResult));
        } else {
            setResult();
        }
    }

    const setResult = () => {
        setResultset(allPlant.filter(searchResult));
        //myResultset = allPlant.filter(searchResult);
    }

    myResultset = resultset.map((plant, index) => {
        return (
            <Link to={`/product/${plant.id}`} key={index} className="grid-c-2 grid-m-2" style={{ height: "150px" }} onClick={() => { viewCart('#x-modal-popup') }}>
                <img src={plant.images[0]} style={{ width: "115px", height: "115px", objectFit: "cover", objectPosition: "", borderRadius: "15px" }}></img>

                <div>
                    <div onClick={() => { }} className="jma-mrg-tb" style={{ fontSize: "16px" }}>{plant.name}
                    </div>

                    <div className="jma-mrg-tb" style={{ fontSize: "18px" }}>{plant.price} FCFA</div>
                </div>
            </Link>
        )
    });
    //}

    const myCart = cart.map((c, index) => {
        return (
            <div key={index} className="grid-c-2 grid-m-2" style={{ height: "150px" }}>
                <Link to={`/product/${c.item}`}>
                    <img src={allPlant[c.item].images[0]} style={{ width: "115px", height: "115px", objectFit: "cover", objectPosition: "", borderRadius: "15px" }} onClick={() => { viewCart('#z-modal-popup') }}></img>
                </Link>

                <div>
                    <div onClick={() => { }} className="jma-mrg-tb btn" style={{ fontSize: "16px" }}><Link to={`/product/${c.item}`}>{allPlant[c.item].name}</Link> <button style={{ position: "absolute", right: "16px" }} onClick={() => { removeFromCart(index) }}>supprimer &times;</button></div>

                    <div className="jma-mrg-tb" style={{ fontSize: "18px" }}>{allPlant[c.item].price} FCFA</div>

                    <div className="jma-mrg-tb">
                        <button onClick={() => { updateQty(index, "MINUS_ONE") }} className="jma-pdg-8">-</button>
                        <input style={{ width: "30px", border: "none", textAlign: "center" }} className="jma-pdg-8" value={c.qty} min="1" />
                        <button onClick={() => { updateQty(index, "ADD_ONE") }} className="jma-pdg-8">+</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className='modal-parent' id='z-modal-popup'>
                <div className='modal-underlay' onClick={() => { viewCart('#z-modal-popup') }}></div>
                <div className='jma-modal jma-anim-right'>
                    <h4>Mes favoris <span style={{ background: "teal", borderRadius: "18px", color: "white", padding: "3px 5px", fontSize: "10px" }}>{cart.length}</span> <button onClick={() => { viewCart('#z-modal-popup') }}>&times;</button></h4>

                    <div>
                        {myCart}
                        {cart.length >= 1 ?
                            <div className="b-btn">
                                <Link to="/checkout">
                                    <button className="jma-mrg-tb jma-pdg-16 jma-zoom-out">Acheter maintenant</button></Link>
                            </div> :
                            <div className="">
                                <h2 className="jma-mrg-bottom jma-pdg-16">Votre liste de favoris est vide!</h2>
                                <svg className="jma-svg cart-svg" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                                </svg>

                                <div className="b-btn">
                                    <button className="jma-mrg-tb jma-pdg-16 jma-zoom-out" onClick={() => { viewCart('#z-modal-popup') }}>Continuer ma navigation</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='modal-parent' id='x-modal-popup'>
                <div className='modal-underlay' onClick={() => { viewCart('#x-modal-popup') }}></div>
                <div className='jma-modal jma-anim-right'>
                    <h4>Rechercher quelquechose <button onClick={() => { viewCart('#x-modal-popup') }}>&times;</button></h4>

                    <input style={{ height: "45px", width: "250px", border: "1px solid #ddd", borderRadius: "9px" }} className="jma-pdg-8 jma-mrg" type="search" value={query} onChange={searchItem} placeholder="Tapez ici pour rechercher" autoFocus />

                    <div className="jma-mrg-16">
                        {myResultset.length === 0 ? <h2 className="jma-mrg-bottom jma-pdg-16">Vos resultats de recherches s'affichent ici!</h2> : myResultset}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;