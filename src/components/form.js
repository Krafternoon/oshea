import React from "react";
import Goldenbutton from "./goldenbutton";


function Form(){
    return(
     <div className="form-form"> 
     <div className="heading-blue">
         <h2>Book a consultation</h2>
     </div>
        <form>
            <div className="content-form">
                <p className="namename">Name</p>
                <div className="user-name">
                    
                    <div>
                    <input className="first-name"placeholder="first name" type="text"></input>
                    <input className="second-name" placeholder="lastname" type="text"></input>
                    </div>
                </div>
                
           

               <div className="user-phone-email">
                    <div>
                        <div>
                        <p className="name" placeholder="">Name</p>
                        </div>
                         
                       <select className='service-dropdown2'>
                            <option className='service1'>service</option>
                      </select>
                      
                    </div>
                    <div>
                        <div>
                        <p className="name">Name</p>
                        </div>
                    
                        <select className='service-dropdown2'>
                            <option className='service1'>service</option>
                      </select>
                      
                    </div>
                    
                </div>


                <div className="user-phone-email">
                    <div>
                        <div>
                        <p className="name">Name</p>
                        </div>
                    <input className="phone" placeholder="phone" type="tel"></input>
                    </div>
                    <div>
                        <div>
                        <p className="name">Name</p>
                        </div>
                    <input className="email" placeholder="email" type="email"></input>
                    </div>
                    
                </div>
                <div className="user-text">
                    <div className="textarea-project">
                    <label>Please tell us more about your project</label>
                    </div>
                    <div className="text-box">
                   <input className="textarea" type="text"></input>
                   </div>
                </div >
                <div className="form-button">
                <Goldenbutton content="Schedule a consultation"/>
                </div>
                
            </div>
        </form>
     </div>
    );
}
export default Form