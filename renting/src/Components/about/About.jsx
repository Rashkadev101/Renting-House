import React from 'react';
import "./About.css";
import { Link } from 'react-router-dom';
import {FaUser, FaHome, FaPinterestP, FaLinkedin, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa"

const About = () => {
  return (
    <>
    <div className="aboutPage">
      <div className="aboutItems">
      <header className="aboutWrapper">
                {/**logo */}
        <div className="logoName">
          <FaHome className="logoNameIcon"/>
          <h1>rashka <span>renting</span></h1>
        </div>
        <nav className="aboutNav">
          <Link to="/" className="active">Home</Link>
          <Link to="/about" className="about">About</Link>
          <Link to="/service" className="service">Service</Link>
          <Link to="/renting" className="renting">Renting</Link>
          <Link to="/contact" className="contact">Contact</Link>
        </nav>

      </header>
      <div className="aboutTitle">
        <h1>WELCOME TO <span>GRANDHOME</span></h1>
        <h3>If You Can Dream It, You Can Do It</h3>
        <p>Over the past 25 years we’ve created more than 5,000 new homes and 1.5 million sq ft of workspace in<br/>
         over 60 regeneration projects. Have a look at the short film below to learn more about how we’ve<br/>
          achieved this and what drives us.</p>
      </div>
      </div>
      {/**about section */}
      <div className="aboutSection">
        <div className="left">
          <h2>we are <strong>rashka renting</strong></h2>
          <h5>Creating quality urban lifestyles, building stronger<br/>
           communities.</h5>
           <h6>A sentence or two describing this item. Lorem ipsum<br/>
            dolor sit amet, consectetuer adipiscing elit, sed diam <br/>
            nonummy nibh euismod tincidunt ut laoreet.</h6>
        </div>

        <div className="right">
          <img src="image/home5.jpg" alt="" className="aboutRightImg"/>
        </div>
      </div>
      {/**Talk */}
      <div className="talk">
        <h2>We have listed over 20,000 Properties.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida non metus.</p>
        <button className="btnTalk"> <FaUser/> talk with an agent</button>
      </div>

      {/**listed */}
      <div className="listProp">
        <div className="listLeft">
          <h3>Want to List Your Property?</h3>
          <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non<br/>
           mauris vitae erat consequat auctor</p>
          
        </div>
        <div className="listRight">
        <button className="btnSell">sell your Property</button>
        </div>
      </div>
      {/**footer */}
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
     
      
      
    </div>
    </>
  )
}

export default About
