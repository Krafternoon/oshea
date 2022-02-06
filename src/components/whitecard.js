import React from 'react';

function Whitecard(props){
    return(
 <div className='white-card'>
    <div className='white-card-img'><img src={props.imgurl}/></div>
    <div className='white-card-heading'>
        <h4 className='white-card-h3'>{props.whitehead}</h4>
    </div>
    <div className='white-card-para'>
        <p className='white-card-p'>{props.whitepara}</p>
    </div>
 </div>

    )
}

export default Whitecard
