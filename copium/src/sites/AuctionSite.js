import CommentSection from "../elements/ComentSection";

function AuctionSite() {
    var heading
    var owner
    var desc
    var t_left
    var winner
    var min_price
    var top_price
    return (
    <div id="meat">
        <div style={{"width" : "90%","backgroundColor" : "#c70039","padding" : "5px"}}>
            <div style={{"width" : "100%","display" : "flex"}}>
                <img src="/juz_w_wtorek.jpg" style={{"maxWidth" : "300px","maxHeight" : "300px"}}></img>
                <div style={{"display" : "flex","flexDirection" : "column","justifyContent" : "space-evenly","alignContent" : "start","padding" : "5px"}}>
                    <h2>{heading}</h2>
                    <p>{owner}</p>
                    <p>{desc}</p>
                    <p>{t_left}</p>
                    <div style={{"display":"flex"}}>
                        <p style={{"marginLeft" : "5px"}}>{winner}</p>
                        <p style={{"marginLeft" : "5px"}}>{min_price}</p>
                        <p style={{"marginLeft" : "5px"}}>{top_price}</p>
                        <button style={{"marginLeft" : "5px"}}>Kup</button>
                    </div>
                </div>
            </div>
            <div style={{"width" : "100%"}}>
                <CommentSection></CommentSection>
            </div>
        </div>
    </div> );
}

export default AuctionSite;