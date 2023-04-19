import React from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhoneSquareAlt, FaPinterestP, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <div className="contactPage">
    <header className="serviceWrapper">
                 {/**logo */}
        <div className="logoName">
          <FaHome className="logoNameIcon"/>
          <h1>rashka <span>renting</span></h1>
        </div>
        <nav className="serviceNav">
          <Link to="/" className="active">Home</Link>
          <Link to="/about" className="about">About</Link>
          <Link to="/service" className="service">Service</Link>
          <Link to="/renting" className="renting">Renting</Link>
          <Link to="/contact" className="contact">Contact</Link>
        </nav>

      </header>
      <div className="contactForm">
        <div className="contactTitle">
          <div>
          <h2>say</h2>
          <h1>hello,</h1>
          </div>
         
          <div className="call">
          <FaPhoneSquareAlt className="callIcon"/>
            <h3>contsct us</h3>
          </div>
        </div>
        {/**main form */}
        <div className="mainForm">
          <div >
          <form className="formItems">
            {/**left */}
            <div className="formLeft">
              <div className="leftText">
                <label>hello there, my name is</label>
                <input type="text" placeholder="your name here."/>

              </div>
              <div className="leftdesc">
                <h4>and i'm looking for a house to help me with</h4>
                <input type="text" placeholder="slect your dream house..."/>
              </div>
              <div className="leftmail">
                <label>you can reach me at</label>
                <input type="text" placeholder="your email address.."/>
              </div>
              <button className="btnContact">register now</button>
            </div>
            {/**right */}
            <div className="formRight">
             <input type="text" placeholder="+252 612015866"/>
             <input type="text" placeholder="rashkarenring@gmail.com"/>
             <input type="text" placeholder="first name"/>
             <input type="text" placeholder="last name"/>
             <input type="text" placeholder="message"/>
             <input type="text" placeholder="basid in mogadishu, somalia"/>
            </div>
          </form>
          </div>
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

export default Contact
