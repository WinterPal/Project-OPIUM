import Slide from "./Slide.js"
import {useRef, useState} from 'react';
const Slider = () => {
    var active_slide = "1"
    const [color,setColor] = useState("#c70039")
    var dict = {
        "1" : useRef(),
        "2" : useRef(),
    }
    var slides = {
        "1" : {"heading" : "Nie masz konta?", "desc" : "Zarejestrój się", "color" : "#c70039"},
        "2" : {"heading" : "Nowe aukcje każdego dnia", "desc" : "Sprawdź tablicę aukcji", "color" : "#00fff2"}
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
                setColor(slides[active_slide]["color"])
            }else{
                value.current.style.display = "none"
            }
        }
        )
    }
    return ( 
        <div id="slider" style={{"backgroundColor":color}}>
            <button style={{"backgroundColor":color}} onClick={move_left} className="slider_btn">&lt;</button>
            <div id="slides">
                {
                    Object.entries(dict).map( ([key,value]) => 
                        <Slide heading={slides[key]["heading"]} description={slides[key]["desc"]} ref={value} key={key}/>
                     ) 
                }
            </div>
            <button style={{"backgroundColor":color}} onClick={move_right} className="slider_btn">&gt;</button>
        </div>

     );
}

export default Slider;