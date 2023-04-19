import "./Topbar.css";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter,  } from 'react-icons/fa';

const Topbar = () => {
  return (
    <>
    <div className="topbar">
        <div className="phone">
            <span> <FaPhoneAlt/> +252 612015866</span>
            <span>address: mogadishu, somali</span>
        </div>
        <div className="social">
            <FaFacebookF className="faceIcon"/>
            <FaInstagram className="insIcon" />
            <FaTwitter className="twiIcon"/>
            <FaLinkedin className="linIcon"/>
            <FaPinterest className="pinIcon"/>
        </div>
        
      
    </div>
    </>
  )
}

export default Topbar;
