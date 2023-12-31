import CommentSection from "../elements/ComentSection";
import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

function AnouncmentSite(props) {
    const [data,setData] = useState({
        "heading" : "",
        "owner" : "",
        "desc" : "",
        "time_left" : "",
        "coments" : [],
        
    })
    var location = useLocation()
    const [can_load,setCanLoad] = useState(false)
    useEffect(() => {
        setCanLoad(true)
        load_page(location.state)
    },[])
    async function load_page(id){
        fetch("http://localhost:8081/api/v1/advertisements/" + id,{"method" : "GET"}).then(res => res.json()).then(res => {
        let time_l = new Date(res["advertisement"]["expirationDate"])    
        setData({
            "heading" : res["advertisement"]["title"],
            "owner" : res["advertisement"]["owner"],
            "desc" : res["advertisement"]["content"],
            "time_left" : time_l.getDate() + "." + time_l.getMonth() + "." + time_l.getFullYear(),
            "coments" : res["advertisement"]["comments"],
            
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
                        <p>Ogłoszenie ważne do: {data["time_left"]}</p>
                    </div>
                </div>
                <div style={{"width" : "100%"}}>
                    <CommentSection coments={data["coments"]}></CommentSection>
                </div>
            </div>
        ) : (
            <h1>Error 404</h1>
        )
        }
        
    </div> );
}

export default AnouncmentSite;