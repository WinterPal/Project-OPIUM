import AnouncmentBoard from "./AnouncmentBoard";
import AuctionBoard from "./AuctionBoard";
import {useCallback, useRef} from 'react';

function Board() {
    var auction_board = useRef()
    var anouncment_board = useRef()
    function change_board(board_type){
        if(board_type == "auction"){
            auction_board.style.display = "block"
            anouncment_board.style.display = "none"
        }else{
            auction_board.style.display = "none"
            anouncment_board.style.display = "block"
        }
    }
    return ( 
        <div id="board">
            <div id="board_buttons">
                <button onClick={event => change_board("auction")} className="board_btn anoun_btn">Aukcje</button>
                <button onClick={event => change_board("anouncment")}className="board_btn aucti_btn">Ogłoszenia</button>
            </div>
            <div id="boards">
                <AuctionBoard ref={ref => {auction_board = ref}}/>
                <AnouncmentBoard ref={ref => {anouncment_board = ref}}/>
            </div>
        </div>
     );
}

export default Board;