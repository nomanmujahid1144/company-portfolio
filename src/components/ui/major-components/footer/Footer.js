import logo from '../../../../assets/logo/whiteLogo.png'
import useScroll from '../../minor-components/Scroll-Top/useScroll'; 

export const Footer = () => {
    const { showButton, scrollToTop } = useScroll();
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="vcamp-footer-two dark-footer pt-120 lg-pt-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-3 col-lg-3 mb-40">
                        <div className="logo">
                            <a href="index.html">
                                <img src={logo} alt="" width={197} />
                            </a>
                            <p className='text-white'>BusNet builds, designs, and delivers powerful solutions to streamline operations and boost growth.</p>    
                        </div>
                        <div className="logo">
                                <p className='text-white' style={{fontSize : '15px', marginTop: '3rem'}}>
                                    First Floor, 85 Great Portland St, <br />
                                    London W1W 7LT,  United Kingdom
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
                            <a href="/">Home</a>
                        </li>
                        {/* <li>
                            <a href="pricingV1.html">Pricing</a>
                        </li> */}
                        <li>
                            <a href="/company">Company</a>
                        </li>
                        <li>
                            <a href="/">Service</a>
                        </li>
                        {/* <li>
                            <a href="serviceV3.html">Features</a>
                        </li> */}
                        <li>
                            <a href="/portfoilo">Portfolio</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mb-40">
                        <h5 className="title">Services</h5>
                        <ul className="footer-list style-none">
                            <li>
                                <a href="/faq">API Development</a>
                            </li>
                            <li>
                                <a href="/faq">Mobile Development</a>
                            </li>
                            <li>
                                <a href="/faq">Web Development</a>
                            </li>
                            <li>
                                <a href="/faq">AI & Machine Learning</a>
                            </li>
                            <li>
                                <a href="/faq">Marketing</a>
                            </li>
                            <li>
                                <a href="/faq">UI/UX Design</a>
                            </li>
                       
                        </ul>
                    </div>
                    {/* <div className="col-lg-4 col-md-6 mb-40">
                        <div className="newsletter">
                        <h5 className="title">Newslettert</h5>
                        <p>
                            Join Us 
                        </p>
                        <form action="#">
                            <input type="email" placeholder="Enter your email" />
                            <button className="dark-btn">Sign Up</button>
                        </form>
                        <div className="info">
                            We only send interesting and relevant emails.
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="bottom-footer">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 mb-15">
<<<<<<< HEAD
                            <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                                <li>
                                <a href="/faq">Privacy &amp; Terms</a>
                                </li>
                                <li>
                                <a href="/contact">Contact Us</a>
                                </li>
                            </ul>
=======
                        <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                            <li>
                            <a href="/faq">Privacy &amp; Terms</a>
                            </li>
                            <li>
                            <a href="/contac-us">Contact Us</a>
                            </li>
                        </ul>
>>>>>>> 8a253526d3d655ee2b8679c48b661ed4ca85bfd6
                        </div>
                        <div className="col-lg-4 order-lg-3 mb-15">
                        <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
                            <li>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fab fa-pinterest-p" />
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
                    <i class="bi bi-arrow-up-short"></i>
                </button>
            )}
        </>
    )
}