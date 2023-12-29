import Auction from "./Auction.js"
import { forwardRef, useEffect, useState } from 'react';
const AuctionBoard = forwardRef(function AuctionBoard(props,ref){
    const [data,setData] = useState();
    const [state,setState] = useState("loading");
    useEffect(() => {
        setState("loading")
        generateAuctions()
    },[])
    async function generateAuctions(){
        await fetch("http://localhost:8081/api/v1/auctions",{
            "method" : "GET",
        }).then(res => res.json()).then(res => {
            setState("ready")
            setData(res["auctions"])
        })
    }
    return ( 
        <div ref={ref} id="auction_brd">
            {state === "loading" ? (<h1>Ładowanie</h1>) : (data.map((key,index)=> (<Auction key={data[index]["_id"]} iden={data[index]["_id"]} title={data[index]["title"]} description = {data[index]["description"]} end_time={data[index]["endTime"]} cur_price={data[index]["currentPrice"]} type={data[index]["auctionType"]}></Auction>)))}
        </div>
     );
})

export default AuctionBoard;