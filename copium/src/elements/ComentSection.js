import Coment from "./Coment";
function CommentSection() {
    return ( 
    <div style={{"width" : "100%","textAlign" : "center","alignItems" : "center", "display" : "flex","flexDirection" : "column","justifyContent" : "center"}}>
        <h2>Sekcja komentarzy</h2>
        <div id="commentbar">
            <textarea id="commentbar_textarea"></textarea>
            <button id="commentbar_submit" style={{"width" : "10%"}}>&gt;</button>
        </div>
        <Coment></Coment>
        <Coment></Coment>
        <Coment></Coment>
        <Coment></Coment>
    </div> 
    );
}

export default CommentSection;