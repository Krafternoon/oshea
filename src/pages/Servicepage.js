import React from "react";
import Servicepagecards from "../components/Servicepagecards";
import Servicedrop from "../components/servicedrop";
import Goldenbutton from "../components/goldenbutton";

function Sp() {
    return (
      <div className='sp'>
          
        <div className="servicepage">
      <h1 className='servic-we-offer'>Service we offer</h1>
         <div className='serice-part-one'>
          
           <div className='service-we-offer-card'>
             <div className="service-div-flex">
                <h4 className='service-we-offer-para'>Search which service you’re looking for</h4>
               </div>
               <div className='service-choose-button'>
                 <Servicedrop
                 drop="service"/>
                 <Servicedrop
                 drop="service"/>
                 <Goldenbutton 
                 content="Schedule a consultation"/>
              </div>
   
           </div>
          
         </div>
  
          
  
  
        <h2 className='heading-service'>woodflooring</h2>
        <div className='service-flip-flex'>
       < Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
        <Servicepagecards
       imgurl="images/service1.svg"
        imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
        servicepara="Design-build, and general contracting firm,"/>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
        servicepara="Design-build, and general contracting firm,"/>
        </div>
        <h2 className='heading-service'>woodflooring</h2>
        <div className='service-flip-flex'>
        <Servicepagecards
        imgurl="images/service1.svg"
        servicebacktitle="Hardwood flooring"
        servicetitle="hardwood flooring"
        servicepara="Design-build, and general contracting firm,"/>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
      <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
       </div>
       <h2 className='heading-service'>woodflooring</h2>
      <div className='service-flip-flex'>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
        servicetitle="hardwood flooring"
        servicepara="Design-build, and general contracting firm,"/>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
     </div>
     <h2 className='heading-service'>woodflooring</h2>
     < div className='service-flip-flex'>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
       
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
       </div>
       <h2 className='heading-service'>woodflooring</h2>
     < div className='service-flip-flex'>
        <Servicepagecards
       imgurl="images/service1.svg"
       servicebacktitle="Hardwood flooring"
       servicetitle="hardwood flooring"
       servicepara="Design-build, and general contracting firm,"/>
       </div>
       </div>
     
      </div>
    );
  }
  
  export default Sp;