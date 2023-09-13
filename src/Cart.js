import { Outlet,Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext, useState } from "react";


const Cart = () => {
    const {plantlist,cart,addToCart,removeFromCart,updateQty,viewCart} = useContext(MyContext);

    const [query,setQuery] = useState("");

    let resultset;

    const searchItem = (event) => {

        let qu = event.target.value;
        setQuery(event.target.value);

        resultset = cart.filter((q)=>{
            if (q === qu) {
                return {q};
            }
        });
    }

    const myCart = cart.map((c,index)=>{
        return (
            <div key={index} className="grid-c-2 grid-m-2" style={{height:"150px"}}>
                <img src={plantlist[c.item].images[0]} style={{width:"115px",height:"115px",objectFit:"cover",objectPosition:"",borderRadius:"15px"}}></img>

                <div>
                    <div onClick={()=>{removeFromCart(index)}} className="jma-mrg-tb" style={{fontSize:"16px"}}>{plantlist[c.item].name}</div>
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
            <button onClick={()=>{}}><Link to="/category/A">Explore Category A</Link></button>
            <div className='modal-parent' id='z-modal-popup'>
                <div className='modal-underlay' onClick={()=>{viewCart('#z-modal-popup')}}></div>
                    <div className='jma-modal jma-anim-right'>
                        <h4>My Cart <button onClick={()=>{viewCart('#z-modal-popup')}}>&times;</button></h4>
                            
                        <div>
                            {myCart}
                            {cart.length >= 1 && <button onClick={()=>{}} className="jma-mrg-bottom jma-pdg-16 jma-anim-zoom">Acheter maintenant</button>}
                            {cart.length === 0 && <h2 className="jma-mrg-bottom jma-pdg-16">Votre liste de favoris est vide!</h2>}
                    </div>
                </div>
            </div>

            <div className='modal-parent' id='x-modal-popup'>
                <div className='modal-underlay' onClick={()=>{viewCart('#x-modal-popup')}}></div>
                    <div className='jma-modal jma-anim-right'>
                        <h4>Search something <button onClick={()=>{viewCart('#x-modal-popup')}}>&times;</button></h4>
                        
                        <input className="jma-pdg-8 jma-mrg" type="search" value={query} onChange={searchItem}/>

                        <div>
                            {cart.length === 0 && <h2 className="jma-mrg-bottom jma-pdg-16">Vos resultats s'affichent ici!</h2>}
                            {resultset}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;