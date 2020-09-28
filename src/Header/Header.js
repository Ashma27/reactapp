import React, {  useEffect, useRef, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from '../Component/Home';
import About from '../Component/About/About';
import Contact from '../Component/Contact';
import NotFound from '../Component/NotFound';
import AddUser from '../Component/Dashboard/Users/AddUser';
import EditUser from '../Component/Dashboard/Users/EditUser';
import User from '../Component/Dashboard/Users/User';
import Dashboard from '../Component/Dashboard/Dashboard';
import Blogs from '../Component/Blogs/Blogs';
import './Header.css';
import Prod from '../Component/Products/index';
import ProductDetail from '../Component/Products/ProductDetail';
import Cart from '../Component/Products/Cart';
import Signin from '../Component/Products/Signin';
import { useSelector } from 'react-redux';
import Register from '../Component/Products/Register';

function Header() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const [isSticky, setSticky] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);




    return (
        <Router> 
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
              <nav className="navbar navbar-expand-md  fixed-top">
  <Link className="navbar-brand" to="/products">
    <img src="https://designoweb.com/wp-content/themes/designowebchild/img/footer_logo.png" /></Link>
  <button className={`navbar-toggler${isOpen ? ' close': ' open'}`} type="button" 
    onClick={() => setOpen(!isOpen)}>
       <span className="btninner"></span>
  </button>
  <div className={`collapse navbar-collapse${isOpen ? ' open': ''}`} id="navbarCollapse">
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
      <li className="nav-item active">
      <Link className="nav-link" to="/blogs">Blogs</Link>
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="sample.pdf" download>Download pdf</a>
      <span></span>   <a href="../demoimg/images.jpeg" class="btn clss"
                  target="_self" download="images.jpeg">Download</a>
      </li>
    </ul>
  </div>
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" 
  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="#">Cart</Link>
    {
      userInfo ? <Link className="dropdown-item" to="#">Profile</Link> :
<Link className="dropdown-item" to="#">Sign in</Link>
    }
    <Link className="dropdown-item" to="/products">Products</Link>
  </div>
</div>
</nav>
<Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
              <Route exact path='/dashboard' component={Dashboard}></Route> 
              <Route exact path='/blogs' component={Blogs}></Route> 
              <Route exact path='/users/add' component={AddUser}></Route>
              <Route exact path='/users/edit/:id' component={EditUser}></Route> 
              <Route exact path='/users/:id' component={User}></Route> 
              <Route exact path='/signin' component={Signin}></Route>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/products' component={Prod}></Route>
              <Route exact path='/product/:id' component={ProductDetail}></Route>  
              <Route exact path='/cart/:id' component={Cart}></Route>  
              <Route  component={NotFound} />
            </Switch> 
        </div>
        </Router>
    );
}

export default Header;


