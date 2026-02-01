import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Navigation links JSON
  const navLinksData = {
    mobileMenu: [
      { id: 1, label: "Eduventures", path: "/eduventures" },
      { id: 2, label: "Consultants", path: "/coming-soon" },
      { id: 3, label: "Technology", path: "/coming-soon" },
      { id: 4, label: "Mission", path: "/coming-soon" },
      { id: 5, label: "Vision", path: "/coming-soon" },
      { id: 6, label: "Blog", path: "/coming-soon" }
    ],
    desktopMenu: [
      { id: 1, label: "About Us", path: "/about-us" },
      { id: 2, label: "Careers", path: "/careers" },
      { id: 3, label: "Contact Us", path: "/contact-us" }
    ]
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="outerNavDiv">
      {/* Sidebar Overlay */}
      <div 
        className={`overlay ${open ? 'open' : ''}`} 
        onClick={handleClick}
      >
        {/* Sidebar Menu */}
        <div 
          id="mobile-menu"
          className={`menu ${open ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="logoDiv">
            <button
              type="button"
              onClick={handleClick}
              className="close"
              aria-label="Close menu"
            >
              <img
                src="NavbarIcons/close.png"
                alt=""
                className="close-icon"
              />
            </button>
            <img
              src="NavbarIcons/global_Logo_black.png"
              alt="Logo"
              className="navbarImage"
            />
          </div>

          <ul className="menuList">
            {navLinksData.mobileMenu.map((link) => (
              <NavLink key={link.id} to={link.path}>
                <li className="listItems" onClick={closeMenu}>
                  {link.label}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar Content */}
      <div className="innerNavDiv">
        <div className="navbar-left-group">
          <button
            type="button"
            onClick={handleClick}
            className="hamburgerIcon2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <img
              src="NavbarIcons/toggler.png"
              alt="" 
              className="hamburger-icon-img, ham"
            />
          </button>
          
          <NavLink to="/">
            <img
              src="NavbarIcons/global_Logo_black.png"
              alt="Global Logo"
              className="globalIcon2"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbarList2">
          <ul>
            {navLinksData.desktopMenu.map((link) => (
              <NavLink key={link.id} to={link.path}>
                <li>{link.label}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
