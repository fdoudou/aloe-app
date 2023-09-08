import { useReducer,useRef,useState } from "react";
import { Routes,Route } from "react-router-dom";
import { MyContext } from "./Contextor";

import aloeh from "./images/aloeh.jpg";
import aloeh1 from "./images/aloeh-1.png";

import Home from "./src/Home";
import Category from "./src/Category";
import Product from "./src/Product";
import Nopage from "./src/Nopage";
import Layout from "./src/Layout";
import Cart from "./src/Cart";

export default function App(props) {

    const plantlist = [
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                {aloeh1},
                {aloeh1},
                {aloeh1},
                {aloeh1},
                {aloeh1}
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloeh,
                aloeh,
                aloeh,
                aloeh,
                aloeh
            ]
        }
    ]

    const [cart,setCart] = useState([]);

    const addToCart = (id) => {
        setCart([...cart,id]);
    }

    const removeFromCart = (id,olCart) => {
        let oldCart = olCart.splice(id,1);
        setCart([...oldCart]);
    }
    // function handleCart(state = cart,action) {
    //     switch (action.type) {
    //         case "ADD_TO_CART":
    //             return [...state,...action.payloads];
    //         case "REMOVE_FROM_CART":
    //             let newcart = state.splice(action.id,1);
    //             return newcart
    //         case "INCREMENT_QTY":

    //         case "DECREMENT_QTY":
                
    //         //     break;
    //         default:
    //             return state;
    //     }
    // }

    // function handleFilter(state = plantlist,action) {
    //     switch (action.type) {
    //         case "SEARCH_ITEM":
    //             return [...state,...action.payloads];
    //         case "FILTER_DESC":
    //             let newcart = state.splice(action.id,1);
    //             return newcart
    //         case "FILTER_ASC":
                
    //             break;
    //         default:
    //             return state;
    //     }
    // }
    
    return (
            <MyContext.Provider value={{plantlist}}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}>
                        
                        </Route>
                        <Route path="category" element={<Category/>}>
                        
                        </Route>
                        <Route path="product" element={<Product/>}>
                        
                        </Route>
                        <Route path="cart" element={<Cart/>}>
                        
                        </Route>
                        <Route path="*" element={<Nopage/>}>
                        
                        </Route>
                    </Route>
                </Routes>
            </MyContext.Provider>
            
    )
}