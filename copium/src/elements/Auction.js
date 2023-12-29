import {Link} from "react-router-dom"
function Auction(props) {
    var title = props.title
    var description = props.description
    var type = props.type
    var end_time = props.end_time
    var cur_price = props.cur_price
    var iden = props.iden
    return ( 
        <div className="auction">
            <Link state ={iden} to={{pathname: "/auction",hash: "#" + iden}} style={{"color":"white","textDecoration":"none"}}>
                <hr/>
                <div className="auction_box">
                    <div style={{"width":"49%","display": "flex"}}>
                    <img style={{"width":"50%","height": "326px"}}></img>
                    <div style={{"width":"50%","padding": "10px"}}>
                        <h1>
                            {title}
                        </h1>
                        <p>{description}</p>
                    </div>
                    </div>
                    <div style={{"minHeight":"20px","height":"auto","border":"1px solid white"}}></div>
                    <div style={{"width":"49%","display": "flex","flexDirection": "column","alignItems": "start","justifyContent": "space-evenly"}}>
                        <h2>Koniec aukcji: {end_time}</h2>
                        <h2 style={{"color": "lime"}}>Cena: {cur_price} zł</h2>
                        <h2>Typ aukcji: {type == "increasing" ? ("Licytacja") : ("Sprzedarz")}</h2>
                    </div>
                </div>
            </Link>
        </div>
     );
}

export default Auction;