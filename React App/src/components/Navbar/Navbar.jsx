import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ setshowLogin }) => {
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
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
        <a href='#service' onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</a>
        <a href='#service' onClick={() => setMenu("ngo")} className={menu === "ngo" ? "active" : ""}>Ngo</a>
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