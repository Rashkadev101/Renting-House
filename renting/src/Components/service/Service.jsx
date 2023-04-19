import React from 'react';
import "./Service.css";
import { Link } from 'react-router-dom';
import { FaBasketballBall,  FaBed,  FaFacebook,  FaHome, FaInstagram, FaLightbulb, FaLinkedin, FaObjectGroup, FaPinterestP, FaShower, FaSwimmingPool, FaTwitter, FaUsers } from 'react-icons/fa';

const Service = () => {
  return (
    <>
    <div className="servicePage">
      <div className="serviceItems">
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
      <div className="serviceTitle">
        <h2>welcome to our service page</h2>
        <p>Search engines have been advancing steadily since their creation. While we don’t know<br/>
         the keys to their algorithm exactly, we do know that search engines have been moving away <br/>
         from direct match terms as their biggest ranking factors.</p>
        <button className="btnService">Expert Agents</button>
      </div>
      </div>
      <div className="serviceList">
        <div className="lists">
          <div className="itemOne">
            <div className="listIcon">
              <FaHome className="book"/>
            </div>
            <h3>Sell Property</h3>
            <p>Morbi accumsan ipsum velit Nam nec<br/>
             tellus a odio tincidunt auctor a ornare odio<br/>
              sedlon maurisvitae erat consequat aucto</p>
              <p>Morbi accumsan ipsum velit Nam nec<br/>
             tellus a odio tincidunt auctor a ornare odio<br/>
              sedlon maurisvitae erat consequat aucto</p>
              <div className="listB">
                <FaBed className="bed"/>
                <FaShower className="shower"/>
                <FaLightbulb className="light"/>
                <FaSwimmingPool className="pool"/>
                <FaBasketballBall className="ball"/>
              </div>

          </div>

          <div className="itemOne">
            <div className="listIcon">
              <FaUsers className="book"/>
            </div>
            <h3>Expert Agents</h3>
            <p>Morbi accumsan ipsum velit Nam nec<br/>
             tellus a odio tincidunt auctor a ornare odio<br/>
              sedlon maurisvitae erat consequat aucto</p>
              <p>Morbi accumsan ipsum velit Nam nec<br/>
             tellus a odio tincidunt auctor a ornare odio<br/>
              sedlon maurisvitae erat consequat aucto</p>
              <div className="listB">
                <FaBed className="bed"/>
                <FaShower className="shower"/>
                <FaLightbulb className="light"/>
                <FaSwimmingPool className="pool"/>
                <FaBasketballBall className="ball"/>
              </div>

          </div>

          <div className="itemOne">
            <div className="listIcon">
              <FaObjectGroup className="book"/>
            </div>
            <h3>daily listings</h3>
            <p>Morbi accumsan ipsum velit Nam nec<br/>
             tellus a odio tincidunt auctor a ornare odio<br/>
              sedlon maurisvitae erat consequat aucto</p>
              <p>Morbi accumsan ipsum velit Nam nec<br/>
             tellus a odio tincidunt auctor a ornare odio<br/>
              sedlon maurisvitae erat consequat aucto</p>
              <div className="listB">
                <FaBed className="bed"/>
                <FaShower className="shower"/>
                <FaLightbulb className="light"/>
                <FaSwimmingPool className="pool"/>
                <FaBasketballBall className="ball"/>
              </div>

          </div>
        </div>
      </div>

      <div className="serviceFeature">
        <div className="serviceFeatureText">
        <h2>Meet Our <strong>Agents</strong> </h2>
        <p>Morbi accumsan ipsum velit nam nec tellus a odiose tincidunt auctor a ornare odio sed non <br/>
        mauris vitae erat consequat auctor</p>
        </div>

        <div className="outerdiv">
    <div className="innerdiv">
      {/* <!-- div1 --> */}
      <div className="div1 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="image/r.jpg" alt=""/>
          </div>
          <div className="detbox">
            <p className="name">Daniel Clifford</p>
            <p className="designation">Verified Graduate</p>
          </div>
        </div>
        <div className="review">
          <h4>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h4>
        <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life.  ”</p>
        </div>
      </div>
      {/* <!-- div2 --> */}
      <div className="div2 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="image/r.jpg" alt=""/>
          </div>
          <div className="detbox">
            <p className="name">Jonathan Walters</p>
            <p className="designation">Verified Graduate</p>
          </div>
        </div>
        <div className="review">
          <h4>The team was very supportive and kept me motivated</h4>
        <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
        </div>
      </div>
      {/* <!-- div3 --> */}
      <div className="div3 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="image/r.jpg" alt=""/>
          </div>
          <div className="detbox">
            <p className="name dark">Kira Whittle</p>
            <p className="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div className="review dark">
          <h4>Such a life-changing experience. Highly recommended!</h4>
          <p>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have.   ”</p>
        </div>
      </div>
      {/* <!-- div4 --> */}
      <div className="div4 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="image/r.jpg" alt=""/>
          </div>
          <div className="detbox">
            <p className="name dark">Jeanette Harmon</p>
            <p className="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div className="review dark">
          <h4>An overall wonderful and rewarding experience</h4>
        <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
        </div>
      </div>
      {/* <!-- div5 --> */}
      <div className="div5 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="image/r.jpg" alt=""/>
          </div>
          <div className="detbox">
            <p className="name">rashka dev</p>
            <p className="designation">Verified Graduate</p>
          </div>
        </div>
        <div className="review">
          <h4>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h4>
        <p>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention and amazing people. ”</p>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a><br/>
    Coded by <a href="https://www.instagram.com/developer_sah/" target="_blank">Rahul Sah</a>.
  </div> */}
        
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

export default Service
