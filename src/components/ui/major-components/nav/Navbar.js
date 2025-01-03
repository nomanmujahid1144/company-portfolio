import React, { useState } from 'react';
import logo from '../../../../assets/logo/logo.png';
import useScroll from '../../minor-components/Scroll-Top/useScroll';
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const { showButton } = useScroll();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = [
    {
      text: 'Case Studies',
      link: '/case-studies',
      subMenu: []
    },
    {
      text: 'Services',
      link: '/services',
      subMenu: [
        {
          text: 'Web Development',
          link: '/services/web-development'
        },
        {
          text: 'Mobile App Development',
          link: '/services/mobile-app-development'
        },
        {
          text: 'Custom Development',
          link: '/services/custom-development'
        },
        {
          text: 'DevOps',
          link: '/services/devops'
        },
        {
          text: 'API Integration',
          link: '/services/api-integration'
        },
        {
          text: 'AI & Machine Learning',
          link: '/services/artificial-intelligence'
        },
        {
          text: 'Digital Transformation',
          link: '/services/digital-transformation'
        },
        {
          text: 'Dynamics 365 ERP',
          link: '/services/microsoft-dynamics-365-business-solutions'
        },
      ]
    },
    {
      text: 'About',
      link: '/about-us',
      subMenu: []
    },
    {
      text: "Let's Connect",
      link: '/contact-us',
      subMenu: []
    },
  ];


  return (<>
    <header className={`theme-main-menu sticky-menu theme-menu-two ${showButton ? 'fixed' : ''}`}>
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="busnet-limited-logo" width={190} />
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
              {isMobileMenuOpen &&
                <div className="logo">
                  <Link to='/'>
                    <img src={logo} alt="busnet-limited-logo" width={190} />
                  </Link>
                </div>
              }
              <ul className="navbar-nav">
                {navigationLinks.map((item, index) => (
                  <li key={index} className={`nav-item ${item.subMenu.length > 0 && 'dropdown'}`}>
                    <a className={`nav-link ${item.subMenu.length > 0 && 'dropdown-toggle'}`} href={item.link}>
                      {item.text}
                    </a>
                    {item.subMenu.length > 0 && (
                      <ul className="dropdown-menu">
                        {item.subMenu.map((subItem, index) => (
                          <li>
                            <Link to={subItem.link} className="dropdown-item">
                              <span>{subItem.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mobile-content d-block d-lg-none bottom-0 position-fixed">
                <div className="address-block">
                  <h4 className="title">Our Address</h4>
                  <p >
                    First Floor, 85 Great Portland St, <br />
                    London,  United Kingdom
                  </p>
                  <p>
                    Get 24/7 help from our pros <br />
                    <a href="tel:+447456659691" className="call">
                      (+44) 7456 659 691
                    </a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </nav>
          <div class="right-widget d-flex align-items-center">
            {/* <button class="menu-search-btn tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="bi bi-search"></i></button> */}
            <Link to="/contact-us" class="tran3s contact-btn d-none d-sm-block">
              <span>Book Free Strategy Call</span>
            </Link>
          </div>
        </div>
      </div>
    </header>

    {/* Step 6: Render MobileNavbar component conditionally */}
    {/* {isMobileMenuOpen && <MobileNavbar isOpen={isMobileMenuOpen} setIsMenuOpen={setMobileMenuOpen} />} */}
  </>
  )
}