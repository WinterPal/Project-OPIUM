import Coment from "./Coment";
import { useState } from "react";
function CommentSection(props) {
    var coments = props.coments
    var comentsObj = {}
    Object.keys(coments).map((k,v) => (comentsObj[k] = coments[k]))
    return ( 
        <div style={{"width" : "100%","textAlign" : "center","alignItems" : "center", "display" : "flex","flexDirection" : "column","justifyContent" : "center"}}>
        <h2>Sekcja komentarzy</h2>
        <div id="commentbar">
            <textarea id="commentbar_textarea"></textarea>
            <button id="commentbar_submit" style={{"width" : "10%"}}>&gt;</button>
        </div>
        {Object.keys(comentsObj).length != 0 ? (Object.keys(comentsObj).map((k,v) => (<Coment user={comentsObj[k]["author"]} desc={comentsObj[k]["text"]}></Coment>))) : (<h1>Brak komów</h1>)}
    </div> 
    );
}

export default CommentSection;