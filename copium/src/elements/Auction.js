function Auction() {
    return ( 
        <a href="/auction" style={{"color":"white","textDecoration":"none"}}>
            <div className="auction">
                <hr/>
                <div className="auction_box">
                    <div style={{"width":"49%","display": "flex"}}>
                    <img style={{"width":"50%","height": "326px"}}></img>
                    <div style={{"width":"50%","padding": "10px"}}>
                        <h1></h1>
                        <p>Na przecenie i jej 2 kręgowe rdzenie.</p>
                    </div>
                    </div>
                    <div style={{"minHeight":"20px","height":"auto","border":"1px solid white"}}></div>
                    <div style={{"width":"49%","display": "flex","flexDirection": "column","alignItems": "start","justifyContent": "space-evenly"}}>
                        <h2 style={{"color": "lime"}}>2.50 zl</h2>
                        <h2>Typ aukcji</h2>
                    </div>
                </div>
            </div>
        </a>
        
     );
}

export default Auction;