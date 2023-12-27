import { forwardRef } from 'react';
const Slide = forwardRef(function Slide(props,ref){
    var self_id = props.self_id
    var heading = props.heading
    var description = props.description
    var destination
    return ( 
        <div ref={ref} className="slide">
            <h1>{heading}</h1>
            <p>{description}</p>
            <p>{self_id}</p>
        </div>
     );
}) 

export default Slide;