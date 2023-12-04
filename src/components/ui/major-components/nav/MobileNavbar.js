import React from 'react';
import './MobileNavbar.css';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Home',
    subItems: [
      { label: 'Creative Agency', link: 'index.html' },
      { label: 'Business', link: 'index-2.html' },
      { label: 'Agency Minimal', link: 'index-3.html' },
      // Add more subItems as needed
    ],
  },
  {
    label: 'Portfolio',
    subItems: [
      { label: 'Portfolio Classic', link: 'portfolioV1.html' },
      { label: 'Portfolio Modern', link: 'portfolioV7.html' },
      { label: 'Portfolio carousel', link: 'portfolioV24.html' },
      // Add more subItems as needed
    ],
  },
  {
    label: 'Pages',
    subItems: [
      { label: 'About Minimal', link: 'about-usV1.html' },
      { label: 'Team Standard', link: 'teamV1.html' },
      { label: 'Pricing Standard: Dark', link: 'pricingV2.html' },
      // Add more subItems as needed
    ],
  },
  { label: 'News', link: 'blogV1.html' },
  { label: 'Contact us', link: 'contactV1.html' },
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
            <img src="images/logo/vCamp_01.png" alt="" width="127" />
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
          <img src="images/icon/icon_22.svg" alt="" className="me-2 ms-0" /> Login
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
          Chowrastar Mirpur- 1210, Sangu <br />River, Dhaka
        </p>
        <p>
          Urgent issue? call us at <br />
          <a href="tel:310.841.5500">310.841.5500</a>
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
