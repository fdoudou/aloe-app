import { useReducer,useRef,useState } from "react";
import { Routes,Route } from "react-router-dom";
import { MyContext } from "./Contextor";

import aloe1 from "./images/aloe-1.png";
import aloe2 from "./images/aloe-2.png";
import aloe3 from "./images/aloe-3.png";
import aloe4 from "./images/aloe-4.png";
import aloe5 from "./images/aloe-5.png";
import aloe6 from "./images/aloe-6.png";
import aloe7 from "./images/aloe-7.png";
//import * as img from "./images";

import Home from "./src/Home";
import Category from "./src/Category";
import Product from "./src/Product";
import Nopage from "./src/Nopage";
import Layout from "./src/Layout";
import Cart from "./src/Cart";
import Footer from "./src/Footer";

export default function App(props) {

    const plantlist = [
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe1,
                aloe1,
                aloe1,
                aloe1,
                aloe1
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe2,
                aloe2,
                aloe2,
                aloe2,
                aloe2
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe3,
                aloe3,
                aloe3,
                aloe3,
                aloe3
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe4,
                aloe4,
                aloe4,
                aloe4,
                aloe4
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe5,
                aloe5,
                aloe5,
                aloe5,
                aloe5
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe6,
                aloe6,
                aloe6,
                aloe6,
                aloe6
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe7,
                aloe7,
                aloe7,
                aloe7,
                aloe7
            ]
        },
        {
            name:"aloe",
            price:15.92,
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe3,
                aloe3,
                aloe3,
                aloe3,
                aloe3
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
                        <Route path="product/:id" element={<Product/>}>
                        
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