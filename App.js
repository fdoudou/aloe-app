import { useEffect, useReducer,useRef,useState } from "react";
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
import Checkout from "./src/Checkout";

export default function App(props) {

    let frontPlant = [
        {
            id:1,
            name:"aloe a",
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
            name:"aloe b",
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
            name:"aloe c",
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
            name:"aloe d",
            price:4000,
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
            name:"aloe e",
            price:3500,
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
            name:"aloe f",
            price:3000,
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
            name:"aloe g",
            price:5500,
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
            name:"aloe h",
            price:3500,
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
            name:"aloe i",
            price:6000,
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
            name:"aloe j",
            price:5000,
            category:"A",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla Blabla blabla blabla",
            images: [
                aloe1,
                aloe1,
                aloe1,
                aloe1
            ]
        },
        {
            id:11,
            name:"aloe k",
            price:3500,
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
 
    function viewCart (target) {
        if (document.querySelector(target).className === 'modal-parent') {
            document.querySelector(target).className = 'jma-show';
        }   else {
            document.querySelector(target).className = 'modal-parent';
        }
    }
    
    let cstate = localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart'));
    
    const [cart,setCart] = useState(cstate);

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

    useEffect (
        ()=>{
            localStorage.setItem('cart',JSON.stringify([...cart]));
        },[cart]
    )

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
                        <Route path="checkout" element={<Checkout/>}>
                        
                        </Route>
                    </Route>
                </Routes>
            </MyContext.Provider>
    )
}