import React from 'react';
import "./Renting.css";
import { Link } from 'react-router-dom';
import { FaEnvelope,  FaFacebook,  FaGlobeAfrica, FaHome,  FaInstagram,  FaLinkedin,  FaPinterestP,  FaStar, FaStarHalf, FaTwitter, FaUsers } from 'react-icons/fa';

const Renting = () => {
  return (
    <>
    <div className="rentingPage">
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
      <div className="rentingTitle">
        <h2>Welcome to the largest search engine for rentals</h2>
        <p>Find and rent villa or vacation home in 150,000 <br/>
        destinations worldwide</p>
        <button className="btnDest">more destinations</button>
      </div>
      {/**renting Lists */}
      <div className="rentingLists">
        <div className="rentingText">
          <h2>Featured <span className="vacation">properties</span></h2>
          <p>Luxury condos in major cities, furnished beach houses, ski cabins and<br/>
           the widest variety of unique accommodation can be found there.</p>
        </div>
        <div className="rentingPopUp">
        <div className="listOne">
          {/**left */}
          <div className="rentingLeft">
            <img src="image/home7.jpg" alt="" className="rentingHomeImg"/>
          </div>
          {/**right */}
          <div className="rentingRight">
            
            <h3>tail villa in gedo</h3>
            <span>location: <FaGlobeAfrica className="rightLocation"/>tip of the tail villa in gedo</span>
            <p>Get the insider travel tips, inspiration, discounts and homestay<br/>
            recommendations from the best professionals</p>
            
            <div className="rightHorizontal">
              <div className="rightIcons">
              <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
              </div>
            
            <span className="users"><FaUsers className="userIcon"/>867,900</span>
            <strong className="rightPrice">$850,925</strong>
            </div>
           
          </div>
          <button className="btnBuy"><Link to="/singlepage" className="link">see avaliable house</Link></button>
         
           
        </div>

        <div className="listTwo">
          {/**left */}
          <div className="rentingLeft">
            <img src="image/house06.webp" alt="" className="rentingHomeImg"/>
          </div>
          {/**right */}
          <div className="rentingRight">
            
            <h3>villa in mogadishu</h3>
            <span>location: <FaGlobeAfrica className="rightLocation"/>villa in mogadishu</span>
            <p>Get the insider travel tips, inspiration, discounts and homestay<br/>
            recommendations from the best professionals</p>
            
            <div className="rightHorizontal">
              <div className="rightIcons">
              <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
              </div>
            
            <span className="users"><FaUsers className="userIcon"/>867,900</span>
            <strong className="rightPrice">$850,925</strong>
            </div>
           
          </div>
          <button className="btnBuy"><Link to="/singlepage" className="link">see avaliable house</Link></button>
         
           
        </div>

        <div className="listThree">
          {/**left */}
          <div className="rentingLeft">
            <img src="image/house07.jpg" alt="" className="rentingHomeImg"/>
          </div>
          {/**right */}
          <div className="rentingRight">
            
            <h3>house in shabeellaha hoose</h3>
            <span>location: <FaGlobeAfrica className="rightLocation"/>town house in shabeellaha hoose</span>
            <p>Get the insider travel tips, inspiration, discounts and homestay<br/>
            recommendations from the best professionals</p>
            
            <div className="rightHorizontal">
              <div className="rightIcons">
              <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
              </div>
            
            <span className="users"><FaUsers className="userIcon"/>867,900</span>
            <strong className="rightPrice">$850,925</strong>
            </div>
           
          </div>
          <button className="btnBuy"><Link to="/singlepage" className="link">see avaliable house</Link></button>
         
           
        </div>

        <div className="listFour">
          {/**left */}
          <div className="rentingLeft">
            <img src="image/home5.jpg" alt="" className="rentingHomeImg"/>
          </div>
          {/**right */}
          <div className="rentingRight">
            
            <h3>villa in togdheer</h3>
            <span>location: <FaGlobeAfrica className="rightLocation"/>villa in togdheer</span>
            <p>Get the insider travel tips, inspiration, discounts and homestay<br/>
            recommendations from the best professionals</p>
            
            <div className="rightHorizontal">
              <div className="rightIcons">
              <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
              </div>
            
            <span className="users"><FaUsers className="userIcon"/>867,900</span>
            <strong className="rightPrice">$850,925</strong>
            </div>
           
          </div>
          <button className="btnBuy"><Link to="/singlepage" className="link">see avaliable house</Link></button>
         
           
        </div>
        <div className="listFive">
          {/**left */}
          <div className="rentingLeft">
            <img src="image/home9.webp" alt="" className="rentingHomeImg"/>
          </div>
          {/**right */}
          <div className="rentingRight">
            
            <h3>house in waqooye galbeed</h3>
            <span>location: <FaGlobeAfrica className="rightLocation"/>town house in waqooye galbeed</span>
            <p>Get the insider travel tips, inspiration, discounts and homestay<br/>
            recommendations from the best professionals</p>
            
            <div className="rightHorizontal">
              <div className="rightIcons">
              <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
              </div>
            
            <span className="users"><FaUsers className="userIcon"/>867,900</span>
            <strong className="rightPrice">$850,925</strong>
            </div>
           
          </div>
          <button className="btnBuy"><Link to="/singlepage" className="link">see avaliable house</Link></button>
         
           
        </div>

        </div>
      </div>
     
      <div className="rentingJoin">
                    <div className="rentingJoinItem">
                        <FaEnvelope className="iconrentingEnv"/>
                        <h2>Join our mailing to get monthly updates on <br/>
                        our exclusive deals.</h2>
                        <input type="text" placeholder="enter your email....." className="rentingJoinInput"/>
                        <button className="btnrentingJoin">subscribe!</button>

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

export default Renting
