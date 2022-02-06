import React from 'react';

function Servicepagecards(props){
    return(


<div className='service-part-three'>
 <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className='flip-image' src={props.imgurl} alt="Avatar"/>
       <h4 className='flip-card-base'>{props.servicetitle}</h4>
    </div>
    <div className="flip-card-back">
      <h2 className="service-h1">{props.servicebacktitle}</h2> 
      <p className='service-p'>{props.servicepara}</p>
    </div>
  </div>
 </div>
</div>


    )
}

export default Servicepagecards