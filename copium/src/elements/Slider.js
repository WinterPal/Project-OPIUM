import Slide from "./Slide.js"
import {useRef} from 'react';
const Slider = () => {
    var active_slide = "1"
    var dict = {
        "1" : useRef(),
        "2" : useRef(),
    }
    function move_right(){
        if (parseInt(active_slide) < Object.keys(dict).length){
            active_slide = String(parseInt(active_slide) + 1);
        }else{
            active_slide = String(Object.keys(dict).length)
        }
        refactor()
    }
    function move_left(){
        if (parseInt(active_slide) > 1){
            active_slide = String(parseInt(active_slide) - 1);
        }else{
            active_slide = String(1)
        }
        refactor()
    }
    function refactor(){
        Object.entries(dict).map(([key,value]) => {
            if (key == active_slide){
                value.current.style.display = "flex"
            }else{
                value.current.style.display = "none"
            }
        }
        )
    }
    return ( 
        <div id="slider">
            <button onClick={move_left} className="slider_btn">&lt;</button>
            <div id="slides">
                {
                    Object.entries(dict).map( ([key,value]) => 
                        <Slide heading="Twoja stara" description="Sra do gara" ref={value} key={key}/>
                     ) 
                }
            </div>
            <button onClick={move_right} className="slider_btn">&gt;</button>
        </div>

     );
}

export default Slider;