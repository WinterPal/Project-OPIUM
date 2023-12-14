function Auction() {
    return ( 
        <div className="auction">
            <hr/>
            <div className="auction_box" style={{"width":"100%","display" : "flex", "justify-content" : "space-evenly"}}>
                <div style={{"width":"49%","display": "flex"}}>
                    <img style={{"width":"50%","height": "326px"}}></img>
                    <div style={{"width":"50%","padding": "10px"}}>
                        <h1></h1>
                        <p>Na przecenie i jej 2 kręgowe rdzenie.</p>
                    </div>
                </div>
                <div style={{"min-height":"20px","height":"auto","border":"1px solid white"}}></div>
                <div style={{"width":"49%","display": "flex","flex-direction": "column","align-items": "start","justify-content": "space-evenly"}}>
                    <h2 style={{"color": "lime"}}>2.50 zl</h2>
                    <button style={{"background" : "linear-gradient(45deg,purple,violet)","border" : "none","color" : "white","padding" : "10px","font-size": "24px","width" : "50%"}}>Kup</button>
                </div>
            </div>
        </div>
     );
}

export default Auction;