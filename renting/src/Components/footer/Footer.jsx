import React from 'react'
import "./Footer.css";
import { FaHome, FaFacebook, FaInstagram, FaLinkedin, FaPinterestP, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footerItems">
        {/**left */}
        <div className="footerLeft">
        <div className="logoName">
          <FaHome className="logoNameIcon"/>
          <h1>rashka <span>renting</span></h1>
        </div>
        <p>Lorem Ipsum is simply dummy text of the <br/>
        printing and typesetting industry. Lorem Ipsum<br/>
         has been the industry's standard dummy text ever<br/>
          since the 1500s</p>
          <div className="footerSocial">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
            <FaPinterestP/>
          </div>
        </div>

        {/**center */}
        <div className="footerCenter">
            <div>
            <h4>community</h4>
            <ul>
                <li>about</li>
                <li>talent solutions</li>
                <li>marketing solutions</li>
                <li>sales solutions</li>
                <li>careers</li>
            </ul>
            </div>
           
            <div>
            <h4>safety</h4>
            <ul>
                <li>privacy & terms </li>
                <li>advertising</li>
                <li>mobile</li>
                <li>ad choices</li>
                <li>sharing small business</li>
            </ul>
            </div>
            
        </div>
        {/**footerright */}
        <div className="footerRight">
            <h4>location</h4>
            <span>mogadishu, somalia</span><br/>
            <span>call: +252 0612015866</span>
            <div className="foooterOptions">
                <select className="footerSlected">
                    <option value="English" className="footerText">English(English)</option>
                    <option value="arabic" className="footerText">Arabic</option>
                    <option value="chinese" className="footerText">Chinese</option>
                    <option value="francais" className="footerText">Francais</option>
                    <option value="italiano" className="footerText">Italiano</option>
                    <option value="turkish" className="footerText">Turkish</option>
                    <option value="russian" className="footerText">Russian</option>
                    <option value="hindi" className="footerText">Hindi</option>
                    <option value="danish" className="footerText">Danish</option>
                    <option value="romana" className="footerText">Romana</option>
                    <option value="swedish" className="footerText">Swedish</option>
                </select>
            </div>
        </div>
      </div>
      {/**someTitle */}
      <div className="copyright">
        <span>copyright &copy; | all right receved created <a> By rashka dev</a></span>
      </div>
    </div>
    </>
  )
}

export default Footer
