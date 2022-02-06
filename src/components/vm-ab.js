import React from "react";
 
function Headp(props){
    return(
        <div> 
    <h1 className='viewmore-h1'>{props.head}</h1>
     <div className='ptag'>            
    <p className='viewmore-p'>{props.content}</p>
    </div> 
        </div>
    )
}
export default Headp