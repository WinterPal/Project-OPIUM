function Coment(props) {
    var user = props.user
    var desc = props.desc

    return ( 
    <div style={{"width" : "100%","display" :"flex","marginTop" : "20px","backgroundColor" : "#ff316c"}}>
        <img style={{"height" : "100px","width" : "100px","marginRight" : "10px"}}>
        </img>
        <div style={{"display" :"flex","flexDirection" : "column", "justifyContent" : "space-evenly"}}>
            <h3 style={{"margin" : "0"}}>{user}</h3>
            <p style={{"margin" : "0","textAlign" : "start"}}>{desc}</p>
        </div>
    </div> );
}

export default Coment;