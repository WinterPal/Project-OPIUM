import { forwardRef } from "react";
import Anouncment from "./Anouncment";

const AnouncmentBoard = forwardRef(function AnouncmentBoard(props,ref){
    return ( 
        <div ref={ref} id="anouncment_brd" style={{"display" : "none"}}>
            <Anouncment heading="Zgubiony mercedes" desc="W dobrym stanie, sranie"></Anouncment>
            <Anouncment heading="Twoja stara" desc="sra do gara"></Anouncment>
        </div>
     );
})

export default AnouncmentBoard;