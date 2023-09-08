import { Outlet,Link } from "react-router-dom";
import aloeh from "../images/aloeh.jpg";

const Category = () => {
    return (
        <div>
            <div style={{display:"grid",gridTemplateColumns:"20% 75%",gridGap:"20px 15px"}}>
                <div>
                    <ul style={{width:"90px"}}>
                        <li style={{width:"80px",background:"white",color:"black"}}>Category</li>
                        <li style={{width:"80px",background:"white",color:"black"}}>Category</li>
                        <li style={{width:"80px",background:"white",color:"black"}}>Category</li>
                        <li style={{width:"80px",background:"white",color:"black"}}>Category</li>
                        <li style={{width:"80px",background:"white",color:"black"}}>Category</li>
                    </ul>
                </div>
                <div style={{borderLeft:"1px solid #ddd"}}>
                    <h3>
                        Welcome to Aloeh Product page!
                    </h3>

                    <select>
                        <option>Filter datas</option>
                        <option>Filter</option>
                        <option>Filter</option>
                        <option>Filter</option>
                        <option>Filter</option>
                    </select>

                    <div style={{display:"grid",gridTemplateColumns:"150px 150px 150px 150px",gridGap:"20px 15px",margin:"10px 0px"}}>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                    </div>

                    <div style={{display:"grid",gridTemplateColumns:"150px 150px 150px 150px",gridGap:"20px 15px",borderRadius:"11px"}}>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                    </div>

                    <div style={{margin:"10px 0px"}}>
                        <img style={{width:"100%",height:"100px",objectFit:"cover",borderRadius:"11px"}} src={aloeh}></img>
                    </div>

                    <div style={{display:"grid",gridTemplateColumns:"150px 150px 150px 150px",gridGap:"20px 15px"}}>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                        <div>
                            <img src={aloeh} style={{width:"130px",height:"130px",borderRadius:"11px"}}></img>
                            <span>ProductName</span><br/>
                            <span>Price</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;