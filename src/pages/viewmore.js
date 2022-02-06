import React from 'react';
import Viewcard from '../components/viewpagecard';
import Form from '../components/form';
import Headp from '../components/vm-ab';
function Viewmore(props){
    return(
    <div className='vm-page'>
          <div className="vm-pageone">
              <img className='vm-img' src="images/vm.svg" alt="Snow"/>
              <div className='vm-image'>
                <button className='vm-button'>Button</button>
                </div>
         </div>
         <div className="vm-pagetwo">
             <Headp 
             head="Hardwood Flooring by Northwest Innovators"
             content="For some homes and homeowners (and historic review boards,) only real wood siding will do. We offer premium wood siding products for every style, taste and application. And our experienced designers and craftspeople will ensure that the end result that is beautiful, functional, and timeless."/>
         </div>
         <h1  className="viewmore-h1">Our recent project</h1>
         <div className="vm-pagethree">
            <Viewcard imgurl="images/three.svg"/>
            <Viewcard  imgurl="images/three.svg"/>
            <Viewcard  imgurl="images/three.svg"/>
         </div>
         <div className='vm-pagefour'>
         <div className='homepagefive'>
       
         
       <div className='home-five-flex-one'>
       <div className='project'>
       <div className='project-h1'>
           <h1 className='project-head'>Got a Project? Let’s talk</h1>
         </div>
         <div className='project-p'>
           <p className='project-para'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper mauris volutpat. Leo ac dui, maecenas at nullam varius donec euismod vitae. Egestas convallis dolor nunc laoreet feugiat ultrices adipiscing amet enim.”</p>
         </div>
         
         <div className='project-down'></div>
   
       </div>
        <div className='form'>
          <Form></Form>
        </div>
     </div>
   
            </div>
         </div>
    </div>

    )
}

export default Viewmore