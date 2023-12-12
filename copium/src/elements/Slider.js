import Slide from "./Slide.js"
function Slider() {
    return ( 
        <div id="slider">
            <button className="slider_btn">&lt;</button>
            <Slide/>
            {/* <a className="dd">Aby utworzc konto</a> <Link to="/Reg" id="t1">kliknij w link<a className="dd"></a></Link> */}
            <button className="slider_btn">&gt;</button>
        </div>

     );
}

export default Slider;