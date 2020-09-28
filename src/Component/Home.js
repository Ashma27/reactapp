import React from 'react';
import '../App.css';
import './Component.css';
import CommonBanner from './CommonBanner';
// import Slider from './Slider/Slider';


function Home() {
  return (
    <div className="App">
      <CommonBanner
      heading="We build Web &
      Mobile apps
      that users love."
      content="The Most Promising App Development Company Of The Year."
       linkBtn="/about"
       buttonName="Home" 
       image="https://designoweb.com/wp-content/themes/designowebchild/img/service/banner_backimg.svg"/>

<div className="comanyover boxs">
    <div className="container">
        <div className="overcompany_cont" > 
            <p className="mainheading">Company overview</p>
            <h3>We love taking products from vision to reality.</h3>
            <p><b>Designoweb Technologies</b> is an <b>ISO 9001:2015 Certified</b> company leading the technology development market since last 4 years.
                Our 6 Sigma based process ensures development of a scalable technology solution for your business.
                We enhance business value by deploying solutions that are build with
                proven process methodology offering high performance business excellence, 
                significantly low costs and optimize business operations for your organizational growth.</p>
            <p>We are pioneer into <b>Saas product development</b> for Web, Android and iOS.
                Our technologically advanced team makes sure that no stone is left untouched including <b>Blockchain Solidity development,
                    IOT Applications, Beacons App development, Token sale platforms</b> and even <b>ICO Marketing.</b></p>
        </div>
        <div className="boxs certified">
            <ul>
            <li className="cert_iso">
                    <a href="https://selectedfirms.co/companies/mobile-app-development/india" target="_blank" >
<img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/mobile-App-Circular.png" alt="mobile-app-development" className="img-fluid" /></a></li>
            <li className="cert_del">
                    <a href="https://develop4u.co/company/designoweb-technologies" target="_blank">
                        <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/developerbadg.png" alt="ger" className=" img-fluid" /></a></li>
                <li className="cert_del">
                    <a href="https://www.appfirms.co/developer/developerProfile.php?user=Designoweb&page=summary" target="_blank">
                        <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/appfirms.png" alt="ger" className="img-fluid" /></a></li>
				<li className="cert_iso">
                    <a href="https://selectedfirms.co/companies/mobile-app-development/india" target="_blank">
                  <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/mobile-App-Circular.png"
                   alt="mobile-app-development" className="img-fluid" /></a></li>
                   <li className="cert_iso">
                    <a href="https://selectedfirms.co/companies/mobile-app-development/india" target="_blank">
                  <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/mobile-App-Circular.png"
                   alt="mobile-app-development" className="img-fluid" /></a></li>
                   <li className="cert_iso">
                    <a href="https://selectedfirms.co/companies/mobile-app-development/india" target="_blank">
                  <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/mobile-App-Circular.png"
                   alt="mobile-app-development" className="img-fluid" /></a></li>
                   <li className="cert_iso">
                    <a href="https://selectedfirms.co/companies/mobile-app-development/india" target="_blank">
                  <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/mobile-App-Circular.png"
                   alt="mobile-app-development" className="img-fluid" /></a></li>
                   <li className="cert_iso">
                    <a href="https://selectedfirms.co/companies/mobile-app-development/india" target="_blank">
                  <img src="https://designoweb.com/wp-content/themes/designowebchild/img/icons/mobile-App-Circular.png"
                   alt="mobile-app-development" className="img-fluid" /></a></li>
            </ul>
        </div>
        <a className="btn btn-lg btn-primary mr-4" href="projects">Explore work
         </a>
        <a className="btn btn-lg btn-primary aboutbtn" href="about">
            <span> About Us </span></a>
    </div>
</div>
{/* slider  */}
{/* <Slider /> */}
{/* slider END  */}
    </div>
  );
}

export default Home;