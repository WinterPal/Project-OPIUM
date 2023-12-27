import Auction from "./Auction.js"
import { forwardRef } from 'react';
const AuctionBoard = forwardRef(function AuctionBoard(props,ref){
    function generateAuctions(){
        
    }
    return ( 
        <div ref={ref} id="auction_brd">
            <Auction/>
            <Auction/>
        </div>
     );
})

export default AuctionBoard;