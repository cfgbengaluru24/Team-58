import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/navlogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ setshowLogin }) => {
  const user=true
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="Logo" className='logo' />
      </Link>

      <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to='/#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</Link>
     <Link to='/contact' onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Contact</Link>
        <Link to='/program' onClick={() => setMenu("ngo")} className={menu === "ngo" ? "active" : ""}>Our Programs</Link>
        <Link to='/donate' onClick={() => setMenu("Donate")} className={menu === "Donate" ? "active" : ""}>Donate</Link>
      </div>
    
         <div className="nav-bar-right">
         <button onClick={() => setshowLogin(true)}>Login</button>
     </div>

   
           
      <button className='hamburger' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;