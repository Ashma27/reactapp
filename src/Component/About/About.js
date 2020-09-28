import React from 'react';
import '../../App.css';
import CommonBanner from '../CommonBanner';
import ControlledTabs from './Tabs';

function About() {
  return (
    <div className="App">
      <CommonBanner
      heading="We build Web &
      Mobile apps
      that users love."
      content="The Most Promising App Development Company Of The Year."
       linkBtn="/about"
       buttonName="About Us" 
       image="https://designoweb.com/wp-content/themes/designowebchild/img/service/banner_backimg.svg"/>
    
    <div className="container">
    <h2>About Us</h2>
    <hr/>
    <br/>
    <ControlledTabs/>
    </div>
    </div>
  );
}

export default About;