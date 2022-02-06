function Featurecard(props){
    return(
      <div className="feature">
      <img src={props.imgurl} />
      <div className="feature-bottom-left">
        <h1 className="feature-heading">{props.featurehead}</h1>
        <p className="feature-para">{props.featurepara}</p>
      </div>

    </div>
    

    )
}

export default Featurecard