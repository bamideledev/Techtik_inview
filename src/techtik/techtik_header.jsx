import React from 'react';
import techtik from '../assets/techtik.jpeg'
import deletik1 from '../assets/deletik1.png'
import jt from '../assets/jt.jpeg'

function Header() {

    return(
         <div className='All'>
            <div className='header_menu'>
              <img src={techtik} alt="logo"/>
              <a href="google.com"> Contact Us</a>
            </div>
            <div className='content'>
                <h2>The Technology for your business</h2>
                <h1> A fight on security  threats to 
                    <br />
                  <h1 className='df'> protect your  businesses.</h1>
                </h1>
                <br />
                <p> With the aim of technology authentication and security, we bring to <br /> you <b>TechTik</b> to help solve web solutions.</p>
            </div>
            <div className='link_contact'>
                <p>Have questions? <a href="#">Contact our sales team</a></p>
            </div>
            <div className='care'>
                <p>We care about your privacy:</p>
                <a href="#">Learn more</a>
            </div>
            <div className='me'>
                <div className='just_us'>
                <h1>Help your company fight
                security<br/> issues that threathens your company's growth</h1>
                <p>Our over 30 developers are ready to help your company <br />fight web threats and security breach to help your <br />business run smoothly</p>
                </div>
                <div className='flex'>
                <div className='first_cont'>
                    <div className='k1'>
                        <h6>C</h6>
                    </div>
                    <h1>Intergration</h1>
                </div>
                <div className='second_cont'>
                    <div className='k2'>
                        <h6>C</h6>
                    </div>
                    <h1>Malwares</h1>
                </div>
                </div>
                <div className='third_cont'>
                    <div className='k3'>
                        <h6>C</h6>
                    </div>
                    <h1>Project Service</h1>
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
                <a href="google.com"> Contact Us</a>
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
                <h1>About Us</h1>
                <p>
                    We are technology company whose aim is to tackle  authentication and security from serial attacks like<br /> ransomware, our company has proved its eligibility with different companies around the globe,<br /> mainly in Africa and Europe and we will continue to make sure we serve a purpose to fight <br />web attacks with our over 20 software engineers and 10 cyber security experts,<br /> and we are looking for more as we grow.
                </p>
            </div>
        </div>
    )
    
}
export default Header;