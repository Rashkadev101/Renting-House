import "./Home.css";
import Topbar from "../../Components/topbar/Topbar"
import Property from "../property/Property";
import Featured from "../featured/Featured";
import Browse from "../browse/Browse";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";





//import { FaHome } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
        <Topbar/>
        <header className="header">
        <div className="headerWrapper">
             {/**logo */}
        <div className="logoName">
          <FaHome className="logoNameIcon"/>
          <h1>rashka <span>renting</span></h1>
        </div>
        <nav className="nav">
          <Link to="/" className="active">Home</Link>
          <Link to="/about" className="about">About</Link>
          <Link to="/service" className="service">Service</Link>
          <Link to="/renting" className="renting">Renting</Link>
          <Link to="/contact" className="contact">Contact</Link>
        </nav>
       
       
        </div>
       
        {/**title */}
        <div className="headerTitle">
            <h1>hel gurigaaga riyada! </h1>
            <p>waxan ku diyarinay guri aad loo qurxiyay oo si waagsan loo naqshadeeye<br/>
             ku soo dhawaw gacmo furan waxan filaya in aad ku qanci doontid .</p>
        </div>
        <button className="headerBtnRenting">renting now</button>
         </header>
       
        <Property/>
        <Featured/>
        <Browse/>
        <Footer/>
        
        
      
    </div>
  )
}

export default Home
