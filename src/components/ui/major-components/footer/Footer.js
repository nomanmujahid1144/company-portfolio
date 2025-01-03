import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo/whiteLogo.png'
import useScroll from '../../minor-components/Scroll-Top/useScroll'; 
import { ContactBanner } from '../contacts/ContactBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
    const { showButton, scrollToTop } = useScroll();

    return (
        <>
            <ContactBanner />
            <footer className="vcamp-footer-two dark-footer pt-120 lg-pt-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-3 col-lg-3 mb-40">
                        <div className="logo">
                            <a href="index.html">
                                <img src={logo} alt="" width={197} />
                            </a>
                            <p className='text-white'>BUSNET builds, designs, and delivers powerful solutions to streamline operations and boost growth.</p>    
                        </div>
                        <div className="logo">
                                <p className='text-white' style={{fontSize : '15px', marginTop: '3rem'}}>
                                    First Floor, 85 Great Portland St, <br />
                                    London,  United Kingdom
                                </p>
                                <p className='footer-list style-none'>
                                    <a href="tel:+447456659691" className="call">
                                        (+44) 7456 659 691
                                    </a>
                                </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-40">
                        <h5 className="title">Company</h5>
                        <ul className="footer-list style-none">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About</Link>
                            </li>
                            <li>
                                <Link to="/services">Service</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-40">
                        <h5 className="title">Services</h5>
                        <ul className="footer-list style-none">
                            <li>
                                <a href="/services/web-development">Web Development</a>
                            </li>
                            <li>
                                <a href="/services/mobile-app-development">Mobile Development</a>
                            </li>
                            <li>
                                <a href="/services/api-integration">API Integration</a>
                            </li>
                            <li>
                                <a href="/services/artificial-intelligence">AI & Machine Learning</a>
                            </li>
                            <li>
                                <a href="/services/digital-transformation">Digital Transformation</a>
                            </li>
                            <li>
                                <a href="/services/microsoft-dynamics-365-business-solutions">Dynamics 365</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-40">
                        <div className="newsletter">
                                <h5 className="title">Resources</h5>
                                <ul className="footer-list style-none">
                                    <li>
                                        <Link to="/case-studies">Case Studies</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bottom-footer">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 mb-15">
                            <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                                <li>
                                <a href="/privacy-policy">Privacy &amp; Terms</a>
                                </li>
                                <li>
                                <a href="/contact-us">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 order-lg-3 mb-15">
                        <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
                            {/* <li>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li> */}
                            <li>
                            <a href="https://www.instagram.com/busnet.limited">
                                <i className="fab fa-instagram" />
                            </a>
                            </li>
                            <li>
                            <a href="">
                                <i className="fab fa-linkedin" />
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-4 order-lg-2 mb-15">
                        <p className="copyright text-center">Copyright &copy; {new Date().getFullYear()} Reserved</p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
            {showButton && (
                <button onClick={scrollToTop} className={`${showButton ? 'scroll-top d-block' : 'd-none'}`}>
                    <FontAwesomeIcon icon='fa-arrow-up' />
                </button>
            )}
        </>
    )
}