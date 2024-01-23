import React, { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import logo from '../../../../assets/logo/logo.png'
import useScroll from '../../minor-components/Scroll-Top/useScroll';
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const { showButton} = useScroll();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = [
    { text: 'Home', link: '/' },
    { text: 'Portfolio', link: '/portfolio' },
    // { text: 'Blog', link: '/blog' },
    { text: 'About Us', link: '/about-us' },
    { text: 'Contact', link: '/contact-us' },
  ];


  return (<>
      <header className={`theme-main-menu sticky-menu theme-menu-one ${showButton ? 'fixed' : ''}`}>
        <div className="inner-content">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to='/'>
                <img src={logo} alt="" width={190} />
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleMobileMenu}
              >
                <span />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {/* Step 4: Map through navigationLinks and render nav items */}
                <ul className="navbar-nav">
                  {navigationLinks.map((item, index) => (
                    <li key={index} className="nav-item">
                      <a className="nav-link" href={item.link}>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mobile-content d-block d-lg-none">
                  <form action="#" className="search-form">
                    <input type="text" placeholder="Search here.." />
                    <button>
                      <i className="bi bi-search" />
                    </button>
                  </form>
                  <div className="address-block">
                    <h4 className="title">Our Address</h4>
                    <p>
                      Chowrastar Mirpur- 1210, Sangu <br />
                      River, Dhaka
                    </p>
                    <p>
                      Urgent issue? call us at <br />
                      <a href="tel:310.841.5500">310.841.5500</a>
                    </p>
                  </div>
                </div>
              </div>
            </nav>
            <div className="right-widget d-flex align-items-center">
              <a href="sign-in.html" className="d-flex align-items-center login-btn">
                <img src="images/icon/icon_01.svg" alt="" />
                <span>Login</span>
              </a>
              {/* Step 5: Add onClick event to toggle mobile menu */}
              <button
                className="sidebar-nav-button d-none d-lg-block"
                type="button"
                onClick={toggleMobileMenu}
              >
                <img src="images/icon/icon_02.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Step 6: Render MobileNavbar component conditionally */}
      {isMobileMenuOpen && <MobileNavbar isOpen={isMobileMenuOpen} setIsMenuOpen={setMobileMenuOpen} />}
    </>
    )
}