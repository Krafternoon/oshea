
 import React from 'react';
 import Homepagetwo from '../components/homepagetwo';
 import Whitecard from '../components/whitecard';
 import Form from '../components/form';
 import Featurecard from '../components/featurecard';
 

 function Home(){
     return(
        <div className='homepage'> 
           
           <div className='homepageone'>
        <div className="container">
         <div float="left">
            <img  className="group" src="images/group 95.jpg" />
        </div>
        <div className="text-block">
        <h1 className='text-block-h1'>We help you build on your past and prepare for the future.</h1>
        <p className='text-block-p'>Design-build, and general contracting firm, Northwest Renovators is recognized as one of the World’s leading Industry and Manufacturing Corporation!</p>
        <div className='first-button'>
        <button className='first-golden-button'>
        <div className='flex-button'>
        <div><img src="images/arrow.svg"/></div>
        <div className='button-service'>Our service</div>
        </div></button>
        </div>
        </div>
        </div>
        </div>


        <div className='homepagetwo'>
          <h1 className='hello'>Service that we offer</h1>
          <p  className='hello'>We provide three types of main services- Interior, Exterior and</p>
          <div className='service-flip-flex-home'>
            <Homepagetwo 
            imgurl="images/interior.svg"
            homehead="Interior design"
            homepara="Design-build, and general contracting firm, Northwest Renovators is recognized as one of the World’s leading Industry and Manufacturing Corporation!"/>
            <Homepagetwo 
            imgurl="images/interior.svg"
            homehead="Interior design"
            homepara="Design-build, and general contracting firm, Northwest Renovators is recognized as one of the World’s leading Industry and Manufacturing Corporation!"/>
             <Homepagetwo 
            imgurl="images/interior.svg"
            homehead="Interior design"
            homepara="Design-build, and general contracting firm, Northwest Renovators is recognized as one of the World’s leading Industry and Manufacturing Corporation!"/>
          </div>
        </div>
        <div className="homepagethree">
          <div className='homepage-flex-one'>
            <div className='homepagethree-image'>
              <img className='people-image' src="images/people.svg"></img>
            </div>
            <div className='homepagethree-flex-two'>
            <div className='homepagethree-content'>
                <h1 className='content-h1'>Committed to deliver High Quality Construction Projects</h1>
                <p className='content-p'>Design-build, and general contracting firm, Northwest Renovators is recognized as one of the World’s leading Industry and Manufacturing Corporation!</p>
            </div>
            <div className='homepagethree-small-card'>
                 <Whitecard
                 imgurl="images/Quality.svg"
                 whitehead="Construction Projects"
                 whitepara="leading Industry and Manufacturing Corporation!"/>
                  <Whitecard
                 imgurl="images/Quality.svg"
                 whitehead="Construction Projects"
                 whitepara="leading Industry and Manufacturing Corporation!"/>
                  <Whitecard
                 imgurl="images/Quality.svg"
                 whitehead="Construction Projects"
                 whitepara="leading Industry and Manufacturing Corporation!"/>
            </div>
              
            </div>
           </div>
        </div>
        
       
        
        
        <div className='homepagesix'> 
        <div className="h2-low">
        <h2 className='f-project'>Featured project</h2>
        </div> 
        <div className='grid-feature'>
               <Featurecard 
               imgurl="images/feature.jpg"
               featurehead="Bathroom"
               featurepara="Building,interior"/>
            
             <Featurecard 
               imgurl="images/feature.jpg"
               featurehead="Bathroom"
               featurepara="Building,interior"/>
            
             <Featurecard 
               imgurl="images/feature.jpg"
               featurehead="Bathroom"
               featurepara="Building,interior"/>
                
             <Featurecard 
               imgurl="images/feature.jpg"
               featurehead="Bathroom"
               featurepara="Building,interior"/>
             </div>
             </div>
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
      
 
     )
 }
 
 export default Home