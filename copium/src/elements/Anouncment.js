import {Link} from "react-router-dom"
function Anouncment(props) {
    var title = props.title
    var desc = props.desc
    var end_time = props.end_time
    var iden = props.iden
    return ( 
            <div className="auction">
                <Link to={{pathname : "/anouncment/" + iden,state: "dane"}} style={{"color":"white","textDecoration":"none"}}> 
                    <hr/>
                    <div style={{"display": "flex","width" : "100%"}}>
                        <img style={{"width":"25%","height": "326px"}}></img>
                        <div style={{"width":"75%","padding": "10px","display" : "flex","flexDirection" : "column","justifyContent" : "space-evenly"}}>
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            <p>Ważne do: {end_time}</p>
                        </div>
                    </div>
                </Link> 
            </div>
        // <a href={"/anouncment/" + iden} style={{"color":"white","textDecoration":"none"}}> 
     );
}

export default Anouncment;