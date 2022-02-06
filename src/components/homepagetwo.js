function Homepagetwo(props){
    return(
        <div className='service-part-three'>
        <div className="flip-card-home">
         <div className="flip-card-inner-home">
           <div className="flip-card-front-home">
             <img className='flip-image-home' src={props.imgurl} alt="Avatar"/>

           </div>
           <div className="flip-card-back-home">
             <h2 className="service-h1-home">{props.homehead}</h2> 
             <p className='service-p-home'>{props.homepara}</p>
           </div>
         </div>
        </div>
       </div>

    )
}

export default Homepagetwo