import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Sp from './pages/Servicepage';
import Home from './pages/homepage';
import './Homepage.css';
import './form.css';
import './footer.css';
import './viewmore.css';
import './about.css'
import Aboutus from './pages/aboutus';
import Footer from './components/footer';
import Viewmore from './pages/viewmore';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './pages/contactus';


function App() {
  return (
   
   <Router>
     <NavBar></NavBar>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/m" element={<Sp/>}/>
         <Route exact path="/a" element={<Aboutus/>}/>
       <Route exact path="/v" element={<Viewmore/>}/>
       <Route exact path="/s" element={<Contact/>}/>
     
     </Routes>
    <Footer></Footer>
   </Router>
  );
}

export default App;
