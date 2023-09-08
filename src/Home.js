import { Outlet,Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext,useState } from "react";
import frontimage from "../images/aloeh.jpg";

const Home = () => {

    const {plantlist} = useContext(MyContext);

    const productList = plantlist.map((plant,index) => {
        return (
            <div>
                <div >
                    <img src={plant.images[0]} style={{width:"100px",height:"100px",objectFit:"fill",objectPosition:"center",borderRadius:"11px"}}></img>
                    <p>
                        <span>{plant.name}</span><span>{plant.price}</span>
                    </p>
                </div>
                
                <button>Ajouter aux favoris</button>

            </div>
        )
    })

    return (
        
        <div>
            <div style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",gridGap:"20px 15px"}}>
                {productList}
            </div>
            
            <img src={frontimage} style={{width:"100%",height:"400px",objectFit:"fill",objectPosition:"center",borderRadius:"30px"}}></img>
            <p>
                Welcome to Aloeh!
            </p>

            <div>
                <img style={{width:"100%",height:"100px",objectFit:"cover"}} src={frontimage}></img>
            </div>

            <div style={{width:"100%",height:""}}>
                <p>
                    Welcome to Aloeh!
                </p>
                <div style={{display:"grid",gridTemplateColumns:"150px 150px 150px 150px",gridGap:"20px 15px"}}>
                    <img src={frontimage} style={{width:"100px",height:"100px"}}></img>
                    <img src={frontimage} style={{width:"100px",height:"100px"}}></img>
                    <img src={frontimage} style={{width:"100px",height:"100px"}}></img>
                </div>
            </div>

            <div>
                <p>
                    Welcome to Aloeh!
                </p>
                <div style={{display:"grid",gridTemplateColumns:"150px 150px 150px 150px",gridGap:"20px 15px"}}>
                    <img src={frontimage} style={{width:"100px",height:"100px"}}></img>
                    <img src={frontimage} style={{width:"100px",height:"100px"}}></img>
                    <img src={frontimage} style={{width:"100px",height:"100px"}}></img>
                </div>
            </div>

            <div style={{width:"100%",height:"100px"}}>
                <p>
                    Welcome to Aloeh!
                </p>
                <img style={{width:"100%",height:"100px",objectFit:"cover"}} src={frontimage}></img>
            </div>
        </div>
    )
}

export default Home;