import { forwardRef, useEffect, useState } from "react";
import Anouncment from "./Anouncment";

const AnouncmentBoard = forwardRef(function AnouncmentBoard(props,ref){
    const [data,setData] = useState();
    const [state,setState] = useState("loading");
    useEffect(() => {
        setState("loading")
        generateAuctions()
    },[])
    async function generateAuctions(){
        await fetch("http://localhost:8081/api/v1/advertisements",{
            "method" : "GET",
        }).then(res => res.json()).then(res => {
            setState("ready")
            setData(res["advertisements"])
        })
    }
    return ( 
        <div ref={ref} id="anouncment_brd" style={{"display" : "none"}}>
            {state == "loading" ? (<h1>Ładowanie</h1>) : (data.map((keys,index) => (<Anouncment iden={data[index]["_id"]} key={data[index]["_id"]} title={data[index]["title"]} desc={data[index]["content"]} end_time={data[index]["expirationDate"]}></Anouncment>)))}
        </div>
     );
})

export default AnouncmentBoard;