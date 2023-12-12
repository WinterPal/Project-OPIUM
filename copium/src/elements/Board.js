import AnouncmentBoard from "./AnouncmentBoard";
import AuctionBoard from "./AuctionBoard";

function Board() {
    return ( 
        <div id="board">
            <div id="board_buttons">
                <button className="board_btn anoun_btn">Aukcje</button>
                <button className="board_btn aucti_btn">Ogłoszenia</button>
            </div>
            <div id="boards">
                <AuctionBoard/>
                {/* <AnouncmentBoard/> */}
            </div>
        </div>
     );
}

export default Board;