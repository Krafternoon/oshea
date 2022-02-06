import React from "react";
import Form from "../components/form";

function Contact(){
    return(
        <div className="contact-us">
             
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
    );
}
export default Contact;