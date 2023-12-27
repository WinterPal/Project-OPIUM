function Anouncment(props) {
    var heading = props.heading
    var desc = props.desc
    return ( 
        <a href="/anouncment" style={{"color":"white","textDecoration":"none"}}>
            <div className="auction">
                <hr/>
                <div style={{"display": "flex","width" : "100%"}}>
                    <img style={{"width":"25%","height": "326px"}}></img>
                    <div style={{"width":"75%","padding": "10px"}}>
                        <h1>{heading}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </a>
        
     );
}

export default Anouncment;