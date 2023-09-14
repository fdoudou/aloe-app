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
import aloe8 from "./images/aloeh.jpg";
//import * as img from "./images";

import Home from "./src/Home";
import Category from "./src/Category";
import Product from "./src/Product";
import Nopage from "./src/Nopage";
import Layout from "./src/Layout";
import Cart from "./src/Cart";
import Footer from "./src/Footer";

export default function App(props) {

    let frontPlant = [
        {
            id:1,
            name:"aloe",
            price:6000,
            category:"A",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe3,
                aloe3,
                aloe3,
                aloe3
            ]
        },
        {
            id:2,
            name:"aloe",
            price:9800,
            category:"B",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe2,
                aloe2,
                aloe2,
                aloe2
            ]
        }
    ]

    let plantlist = [
        
        {
            id:3,
            name:"aloe",
            price:3500,
            category:"C",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe3,
                aloe3,
                aloe3,
                aloe3
            ]
        },
        {
            id:4,
            name:"aloe",
            price:15.92,
            category:"A",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe4,
                aloe4,
                aloe4,
                aloe4
            ]
        },
        {
            id:5,
            name:"aloe",
            price:15.92,
            category:"B",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe5,
                aloe5,
                aloe5,
                aloe5
            ]
        },
        {
            id:6,
            name:"aloe",
            price:15.92,
            category:"C",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe6,
                aloe6,
                aloe6,
                aloe6
            ]
        },
        {
            id:7,
            name:"aloe",
            price:15.92,
            category:"A",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe7,
                aloe7,
                aloe7,
                aloe7
            ]
        },
        {
            id:8,
            name:"aloe",
            price:15.92,
            category:"B",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe8,
                aloe8,
                aloe8,
                aloe8
            ]
        },
    {
            id:9,
            name:"aloe",
            price:15.92,
            category:"C",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe7,
                aloe7,
                aloe7,
                aloe7
            ]
        },
        {
            id:10,
            name:"aloe",
            price:15.92,
            category:"A",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe8,
                aloe8,
                aloe8,
                aloe8
            ]
        },
        {
            id:11,
            name:"aloe",
            price:15.92,
            category:"B",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe5,
                aloe5,
                aloe5,
                aloe5
            ]
        }
    ]

    plantlist = [...plantlist,...frontPlant];

    // const [cart,setCart] = useState([{"item":0,"qty":2}]);

    // const addToCart = (id,) => {
    //     let itemId = id;
    //     let newCart = [...cart];
    //     setCart([...newCart,{"item":itemId,"qty":qty}]);
    // }

    // const removeFromCart = (id,olCart) => {
    //     let oldCart = olCart.splice(id,1);
    //     setCart([...oldCart]);
    // }
    

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

    //const initialState = 
    function viewCart (target) {
        //document.querySelector(target).classList.toggle('jma-show');
        if (document.querySelector(target).className === 'modal-parent') {
            document.querySelector(target).className = 'jma-show';
        }   else {
            document.querySelector(target).className = 'modal-parent';
        }
    }
    
    
    const [cart,setCart] = useState([]);

    const addToCart = (id,qty) => {
        for (let c = 0; c < cart.length; c++) {
            if (id === cart[c].item) {
                return;
            }
        }
        setCart([...cart,{"item":id,"qty":qty}]);
    }

    const removeFromCart = (id) => {
        const oldCart = [...cart]
        oldCart.splice(id,1);
        setCart([...oldCart]);
    }

    const updateQty = (id,action) => {
        let oldCart = [...cart];
        
        if (action === "ADD_ONE") {
            oldCart[id].qty = oldCart[id].qty + 1;
        } else if (action === "MINUS_ONE") {
            oldCart[id].qty = oldCart[id].qty - 1;
        }
        setCart([...oldCart]);
    }

    return (
            <MyContext.Provider value={{plantlist,frontPlant,cart,addToCart,removeFromCart,updateQty,viewCart}}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}>
                        
                        </Route>
                        <Route path="category/:category" element={<Category/>}>
                        
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