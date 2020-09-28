import React from 'react';
import Crud from './Crud';
import {Link} from 'react-router-dom';
import './dash.css';

function Contacts() {
    return (
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item active">
    <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item active">
    <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    <li className="nav-item active">
    <Link className="nav-link" to="/dashboard">Dashboard</Link>
    </li>
  </ul>);
  }
  
  function Chat() {
    return <Crud />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }
  
 export default Dashboard;
  