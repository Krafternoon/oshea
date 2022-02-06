import Goldenbutton from "./goldenbutton"

function Footer(props){
    return(
      
    <div className="footer">
    <div className="footer-footer">
     <div className="footer-part1">
        <div className="footer-part11">
            <div className="footer-image"><img src="images/house-logo.svg"/></div>
            <div className="footer-image-p"><h3 className="footer-image-p">Northwest Innovators</h3></div>
       </div> 
       <p className="footer-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper mauris volutpat. Leo ac dui, maecenas at nullam varius donec euismod vitae. Egestas convallis dolor nunc laoreet feugiat ultrices adipiscing amet enim.”</p>
        </div>
        <div className="footer-part2">
            <h3 className="follow" href="">Services</h3>
            <a  className="a1" href="">Interior</a>
            <a className="a1" href="">Exterior</a>
            <a className="a1" href="">Maintenance</a>
        </div>
        <div className="footer-part3">
            <h3 className="follow" href="">Company</h3>
            <a  className="a1" href="">About us</a>
            <a  className="a1" href="">Portfolio</a>
            <a  className="a1" href="">Contact us</a>
        </div>
        <div className="footer-part4">
            <p className="follow">Follow us on</p>
            <div className="social-logo">
               <div className="logo-fb"> <a href=""><img src="images/fb.svg"/></a> </div>
               <div className="logo-fb"><a href=""><img src="images/insta.svg"/></a></div>
               <div className="logo-fb"> <a href=""><img src="images/linkin.svg"/></a> </div>
            </div>
            <div className="message-logo">
                <div className="message"><p>Write us at:</p></div>
                <div className="cover-logo"><img src="images/message.svg"/></div>
            </div>
                <Goldenbutton content="Schedule a consultation"/>
           
        </div>
        </div>
    </div>

    )
}

export default Footer