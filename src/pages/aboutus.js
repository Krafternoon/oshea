import React from "react";
import Headp from "../components/vm-ab";
import Ourclients from "../components/clients";
function Aboutus(){
  return(
       <div className="about-us">
           <div className="aboutpage-one">
              <img className="figure-img" src="images/hero.svg"/>
            <div className="text"><h1>Fonzie</h1><br></br>
            <p>We specialize in exceeding the needs of our customers throughout the Northwest.</p></div>
             </div>
            
            <div className="aboutpage-two">
                <Headp 
                head="Our story"
                content="For some homes and homeowners (and historic review boards,) only real wood siding will do. We offer premium wood siding products for every style, taste and application. And our experienced designers and craftspeople will ensure that the end result that is beautiful, functional, and timeless."/>
            </div>
                    

            <div className="aboutpage-three">
              <h1 className="viewmore-h1">Our founder</h1>
                  <div className="aboutpagethree-whole">
                         <div className="aboutthree-one">
                            <img src="images/founder.svg"/>
                         </div>
                         <div className="aboutthree-two">
                           <div className="aboutus-para">
                             <div className="comma">
                              <img src="images/comma.svg"></img>
                             </div>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper mauris volutpat. Leo ac dui, maecenas at nullam varius donec euismod vitae. Egestas convallis dolor nunc laoreet feugiat ultrices adipiscing amet enim</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper mauris volutpat. Leo ac dui, maecenas at nullam varius donec euismod vitae. Egestas convallis dolor nunc laoreet feugiat ultrices adipiscing amet enim</p>
                         </div>
                         </div>
                  </div>
            </div>

           <div className="aboutpage-four">
               <h1 className="viewmore-h1">Our clients</h1>
               <div className="ourclient-flex">
                  <Ourclients imgurl="images/client-round.svg"/>
                  <Ourclients imgurl="images/client-round.svg"/>
                  <Ourclients imgurl="images/client-round.svg"/>
                  <Ourclients imgurl="images/client-round.svg"/>
                </div>
           </div>
       </div>
  )
}
export default Aboutus