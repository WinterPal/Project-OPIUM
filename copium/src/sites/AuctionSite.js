import CommentSection from "../elements/ComentSection";
import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

function AuctionSite(props) {
    const [data,setData] = useState({
        "heading" : "",
        "owner" : "",
        "desc" : "",
        "time_left" : "",
        "winner" : "",
        "min_price" : "",
        "top_price" : "",
        "type" : "",
        
    })
    var location = useLocation()
    const [can_load,setCanLoad] = useState(false)
    useEffect(() => {
        setCanLoad(true)
        load_page(location.state)
    },[])
    async function load_page(id){
        fetch("http://localhost:8081/api/v1/auctions/" + id,{"method" : "GET"}).then(res => res.json()).then(res => {
        let time_l = new Date(res["auction"]["endTime"])    
        setData({
            "heading" : res["auction"]["title"],
            "owner" : res["auction"]["owner"],
            "desc" : res["auction"]["description"],
            "time_left" : time_l.getDate() + "." + time_l.getMonth() + "." + time_l.getFullYear(),
            "winner" : "",
            "min_price" : res["auction"]["startingPrice"],
            "top_price" : res["auction"]["currentPrice"],
            "type" : res["auction"]["auctionType"]
            
        })
        console.log(res)})
    }
    
    return (
    <div id="meat">
        {can_load == true ? (
            <div style={{"width" : "90%","backgroundColor" : "#c70039","padding" : "5px"}}>
                <div style={{"width" : "100%","display" : "flex"}}>
                    <img src="/juz_w_wtorek.jpg" style={{"maxWidth" : "300px","maxHeight" : "300px"}}></img>
                    <div style={{"display" : "flex","flexDirection" : "column","justifyContent" : "space-evenly","alignContent" : "start","padding" : "5px"}}>
                        <h2>{data["heading"]}</h2>
                        <p>{data["owner"]}</p>
                        <p>{data["desc"]}</p>
                        <p>Koniec aukcji: {data["time_left"]}</p>
                        <div style={{"display":"flex"}}>
                            <p style={{"marginLeft" : "5px"}}>{data["winner"]}</p>
                            <p style={{"marginLeft" : "5px"}}>Początkowa cena: {data["min_price"]} zł</p>
                            <p style={{"marginLeft" : "5px"}}>Cena górująca: {data["top_price"]} zł</p>
                            {data["type"] == "increasing" ? (<button style={{"marginLeft" : "5px"}}>Podbij</button>) : (<button style={{"marginLeft" : "5px"}}>Kup</button>)}
                        </div>
                    </div>
                </div>
                <div style={{"width" : "100%"}}>
                    <CommentSection></CommentSection>
                </div>
            </div>
        ) : (
            <h1>Error 404</h1>
        )
        }
        
    </div> );
}

export default AuctionSite;