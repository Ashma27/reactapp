import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProductsAbout from './Products';
import './About.css';

function ControlledTabs() {
    const [key, setKey] = useState('home');
  
    return (
     <div className="bootTabs">
          <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Products">
          <ProductsAbout />
        </Tab>
        <Tab eventKey="profile" title="Profile">
        hello124
        </Tab>
        <Tab eventKey="contact" title="Contact">
          adfsfdf
        </Tab>
      </Tabs>
     </div>
    );
  }
  
export default ControlledTabs;