import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return (
      
      <div className="navbar">
          <div className="navbar-left">
             <img  className="link1" src="images/nav-logo.svg"/>
              <select className='link11' placeholder="hello">
               <option >Service</option>
               <option >Interior</option>
               <option >Exterior</option>
               <option >Maintance</option>
              </select>
              <form> 
              <input  className="link111" type="text"></input>
      
                 
              </form>
          </div>
          <div className="navbar-right">
              <Link to="/a">
              <a className="link">About us</a>
              </Link>
              <Link to="/m">
              <a className="link">Service</a>
              </Link>
              <Link to="/s">
              <a className="link">Contact us</a>
               </Link>
               <Link to="/v">
              <a className="link">View more</a>
               </Link>
          </div>
      </div> 
      
     
     
    
    );
}

export default NavBar;