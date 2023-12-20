import logo from '../../../../assets/logo/white.png'
import useScroll from '../../minor-components/Scroll-Top/useScroll'; 

export const Footer = () => {
    const { showButton, scrollToTop } = useScroll();
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="vcamp-footer-two dark-footer pt-120 lg-pt-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-3 col-lg-2 mb-40">
                        <div className="logo">
                        <a href="index.html">
                            <img src={logo} alt="" width={197} />
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 mb-40">
                        <h5 className="title">Links</h5>
                        <ul className="footer-list style-none">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        {/* <li>
                            <a href="pricingV1.html">Pricing</a>
                        </li> */}
                        <li>
                            <a href="/about">About us</a>
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
                        <h5 className="title">Legal</h5>
                        <ul className="footer-list style-none">
                        <li>
                            <a href="/faq">Terms of use</a>
                        </li>
                        <li>
                            <a href="/faq">Terms &amp; conditions</a>
                        </li>
                        <li>
                            <a href="/faq">Privacy policy</a>
                        </li>
                       
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-40">
                        <div className="newsletter">
                        <h5 className="title">Newslettert</h5>
                        <p>
                            Join over <span>68,000</span> people getting our emails
                        </p>
                        <form action="#">
                            <input type="email" placeholder="Enter your email" />
                            <button className="dark-btn">Sign Up</button>
                        </form>
                        <div className="info">
                            We only send interesting and relevant emails.
                        </div>
                        </div>{" "}
                        {/* /.newsletter */}
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bottom-footer">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 mb-15">
                        <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                            <li>
                            <a href="/faq">Privacy &amp; Terms</a>
                            </li>
                            <li>
                            <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
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
                        <p className="copyright text-center">Copyright @2023 busNet.org</p>
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