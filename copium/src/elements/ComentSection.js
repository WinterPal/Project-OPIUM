import Coment from "./Coment";
function CommentSection() {
    return ( 
    <div style={{"width" : "100%","textAlign" : "center"}}>
        <h2>Sekcja komentarzy</h2>
        <input type="text"></input>
        <Coment></Coment>
        <Coment></Coment>
        <Coment></Coment>
        <Coment></Coment>
    </div> 
    );
}

export default CommentSection;