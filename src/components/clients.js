import React from 'react';

function Ourclients(props){
    return(
         
             <div className="oruclients-image">
                 <img className="ourclients-image-margin" src={props.imgurl} alt="clients_image"/>
             </div>
       
    );
}
export default Ourclients;