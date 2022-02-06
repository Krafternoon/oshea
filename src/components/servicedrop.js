import React from 'react';

function Servicedrop(props){
    return(

    <div className='service-dropdown'>
      <select className='dropdown'>
          <option className='service'>{props.drop}</option>
      </select>
    </div>



    )
}

export default Servicedrop