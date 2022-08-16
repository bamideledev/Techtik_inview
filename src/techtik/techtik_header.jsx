import React from 'react';
import techtik from '../assets/techtik.jpeg';
import nwp from '../assets/nwp.png';
import {MdIntegrationInstructions} from 'react-icons/md';
import {AiFillSecurityScan} from 'react-icons/ai';
import {BsMenuButtonWideFill} from 'react-icons/bs';
import {FcPrivacy} from 'react-icons/fc';


function Header() {

    return(
         <div className='All'>
            <div className='header_menu'>
              <img src={techtik} alt="logo"/>
              <a href="google.com"> Contact Us</a>
              <button><BsMenuButtonWideFill/></button>
            </div>
            <div className='content'>
                <h2>The Technology for your business</h2>
                <h1> A fight on security  threats to 
                  <h1 className='df'> protect your  businesses.</h1>
                </h1>
                <br />
                <p> With the aim of technology authentication and security, we bring to <br /> you <b>TechTik</b> to help solve web solutions.</p>
            </div>
            <div className='link_contact'>
                <p>Have questions? <a href="#">Contact our sales team</a></p>
            </div>
            <div className='care'>
                <div className='icu'>
                    <i><FcPrivacy size={40}/></i>
                </div>
                <div className='careu'>
                     <p>We care about your privacy:</p>
                     <a href="#">Learn more</a>
                </div>
            </div>
            <div className='me'>
                <div className='just_us'>
                <h1>Help your company fight<br />
                security issues that persist</h1>
                <p>Our over 30 developers are ready to help <br />your company fight web threats and security <br />
                breach to help your business run smoothly</p>
                </div>
                <div className='mobileflex'>
                  <img src={nwp} alt="just-img" />
                </div>
            </div>
            <div className='contact_container'>
                <div className='qt'>
                   <h1>Questions?</h1>
                   <p>Talk to us</p>
                </div>
                <div className='q_content'>
                    <p>
                         Get in touch with us to learn more about <br /> our service and how we can help you and your business 
                    </p>
                </div>
                <div className='qt_contactus'>
                <a href="google.com"> Contact us</a>
                </div>
            </div>
            <div className='conten'>
                <h2>Technology for you</h2>
                <h1> CyberTech at its peak
                </h1>
                <br />
                <p> Seemless work to ensure productivity, managing your <br /> security like never before.</p>
            </div>
            <div className='link_contac'>
                <p>Your privacy is our priority <a href="#">Privacy policies</a></p>
            </div>
            <div className='free_container'>
                <h1>About us</h1>
                <p>
                    We are technology company whose aim is to tackle  authentication and security from serial attacks like<br /> ransomware, our company has proved its eligibility with different companies around the globe,<br /> mainly in Africa and Europe and we will continue to make sure we serve a purpose to fight <br />web attacks with our over 20 software engineers and 10 cyber security experts,<br /> and we are looking for more as we grow.
                </p>
            </div>
            <div className='footer'>
                <a href="">Privacy policies</a>
                <a href="">Careers</a>
                <a href="">Terms and Agreement</a>
                <p>Office location: Africa and Europe</p>
            </div>
        </div>
    )
    
}
export default Header;