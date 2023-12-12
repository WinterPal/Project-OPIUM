import AnouncmentBoard from "./AnouncmentBoard";
import AuctionBoard from "./AuctionBoard";

function Board() {
    return ( 
        <div id="board">
            <div id="board_buttons">
                <button>Aukcje</button>
                <button>Ogłoszenia</button>
            </div>
            <div id="boards">
                <AuctionBoard/>
                <AnouncmentBoard/>
            </div>
        </div>
     );
}

export default Board;