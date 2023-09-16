import { Outlet,Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext, useState } from "react";


const Cart = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    const [query,setQuery] = useState("");

    const [resultset,setResultset] = useState([]);

    let myResultset = [];

    function searchResult(plant) {
        return plant.name.includes(query) === true;
    }

    const searchItem = (event) => {
        let qu = event.target.value;
        setQuery(event.target.value);
        if (qu === "") {
            setResultset(plantlist.filter(searchResult));
        } else {
            setResult();
        }
    }

    const setResult = () => {
        setResultset(plantlist.filter(searchResult));
        //myResultset = plantlist.filter(searchResult);
    }
    
    myResultset = resultset.map((plant,index) => {
        return (
            <Link to={`product/${index}`} key={index} className="grid-c-2 grid-m-2" style={{height:"150px"}}>
                <img src={plant.images[0]} style={{width:"115px",height:"115px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>

                <div>
                    <div onClick={()=>{}} className="jma-mrg-tb" style={{fontSize:"16px"}}>{plant.name}
                    </div>
                    
                    <div className="jma-mrg-tb" style={{fontSize:"18px"}}>{plant.price} FCFA</div>
                </div>
            </Link>
        )
    });
        //}

    const myCart = cart.map((c,index)=>{
        return (
            <div key={index} className="grid-c-2 grid-m-2" style={{height:"150px"}}>
                <img src={plantlist[c.item].images[0]} style={{width:"115px",height:"115px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>

                <div>
                    <div onClick={()=>{}} className="jma-mrg-tb" style={{fontSize:"16px"}}>{plantlist[c.item].name} <button style={{position:"absolute",right:"16px"}} onClick={()=>{removeFromCart(index)}}>supprimer &times;</button></div>
                    
                    <div className="jma-mrg-tb" style={{fontSize:"18px"}}>{plantlist[c.item].price} FCFA</div>

                    <div className="jma-mrg-tb">
                        <button onClick={()=>{updateQty(index,"MINUS_ONE")}} className="jma-pdg-8">-</button>
                        <input style={{width:"30px",border:"none",textAlign:"center"}} className="jma-pdg-8" value={c.qty} min="1"/>
                        <button onClick={()=>{updateQty(index,"ADD_ONE")}} className="jma-pdg-8">+</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className='modal-parent' id='z-modal-popup'>
                <div className='modal-underlay' onClick={()=>{viewCart('#z-modal-popup')}}></div>
                    <div className='jma-modal jma-anim-right'>
                        <h4>My Cart <span style={{background:"teal",borderRadius:"18px",color:"white",padding:"3px 5px",fontSize:"10px"}}>{cart.length}</span> <button onClick={()=>{viewCart('#z-modal-popup')}}>&times;</button></h4>
                            
                        <div>
                            {myCart}
                            {cart.length >= 1 && <button onClick={()=>{}} className="jma-mrg-tb jma-pdg-16 jma-zoom-out">Acheter maintenant</button>}
                            {cart.length === 0 && <h2 className="jma-mrg-bottom jma-pdg-16">Votre liste de favoris est vide!</h2>}
                    </div>
                </div>
            </div>

            <div className='modal-parent' id='x-modal-popup'>
                <div className='modal-underlay' onClick={()=>{viewCart('#x-modal-popup')}}></div>
                    <div className='jma-modal jma-anim-right'>
                        <h4>Rechercher quelquechose <button onClick={()=>{viewCart('#x-modal-popup')}}>&times;</button></h4>
                        
                        <input style={{height:"45px",width:"250px",border:"1px solid #ddd",borderRadius:"9px"}} className="jma-pdg-8 jma-mrg" type="search" value={query} onChange={searchItem} placeholder="Tapez ici pour rechercher" autoFocus/>

                        <div className="jma-mrg-16">
                            { myResultset.length === 0 ? <h2 className="jma-mrg-bottom jma-pdg-16">Vos resultats de recherches s'affichent ici!</h2> : myResultset }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;