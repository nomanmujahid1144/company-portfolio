import logo from '../../../../assets/logo/logo.png';
import icon_22 from '../../../../assets/icons/icon_22.svg';
import React from 'react';
import './MobileNavbar.css';
import { useState } from 'react';

const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'Portfolio', link: '/portfolio' },
  { text: 'About Us', link: '/about-us' },
  { text: 'Contact', link: '/contact' },
];

const MobileMenu = ({ isOpen, setIsMenuOpen }) => {


  const [visible, setVisible] = useState(true);

  const handleVisibilityOff = () => {
    setVisible(false);
  }

  return (
    <div className={`offcanvas offcanvas-end sidebar-nav ${visible ? 'show' : ''}`} style={{ visibility : `${visible ? 'visible' : 'hidden'} `}} tabIndex="-1" id="offcanvasRight">
      <div className="offcanvas-header">
        <div className="logo">
          <a href="index.html">
            <img src={logo} alt="" width="127" />
          </a>
        </div>
        <button onClick={handleVisibilityOff} type="button" className="close-btn tran3s" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="bi bi-x-lg" />
        </button>
      </div>

      <div className="sidebar-nav-item">
        <ul className="style-none">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="nav-item">
              {menuItem.subItems ? (
                // Render dropdown menu if subItems exist
                <>
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    {menuItem.label}
                  </a>
                  <ul className="dropdown-menu">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link} className="dropdown-item">
                          <span>{subItem.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Render regular menu item if no subItems
                <a href={menuItem.link}>{menuItem.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a href="sign-in.html" className="theme-btn-one ripple-btn d-block">
          <img src={icon_22} alt="" className="me-2 ms-0" /> Login
        </a>
      </div>

      <form action="#" className="search-form">
        <input type="text" placeholder="Search here.." />
        <button>
          <i className="bi bi-search" />
        </button>
      </form>

      <div className="address-block">
        <h4 className="title">Our Address</h4>
        <p>
          First Floor, 85 Great Portland St, <br />
          London W1W 7LT,  United Kingdom
        </p> 
        <p >
            <a href="tel:+447456659691" className="call">
                (+44) 7456 659 691
            </a>
        </p>
      </div>

      <ul className="d-flex social-icon style-none mt-20">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
