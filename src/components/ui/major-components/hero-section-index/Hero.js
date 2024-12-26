import { Link } from 'react-router-dom';
import screen2 from '../../../../assets/index-images/screen2.png';
import screen3 from '../../../../assets/index-images/screen3.png';
import screen4 from '../../../../assets/index-images/screen4.png';
import screen5 from '../../../../assets/index-images/screen5.png';
import screen6 from '../../../../assets/index-images/screen6.png';
import screen7 from '../../../../assets/index-images/screen7.png';
import screen8 from '../../../../assets/index-images/screen8.png';
import icon_23 from '../../../../assets/icons/icon_23.svg';
import shape_03 from '../../../../assets/shapes/shape_03.svg';

export const HeroIndex = () => {
    return (
        <div className="hero-banner-two">
            <div className="container h-100">
                <div className="main-content h-100">
                    <div className="text-wrapper">
                        <h1 className="hero-heading font-recoleta">
                            Empowering Ideas, Engineering
                            <span >
                                Success
                            </span>.
                        </h1>

                        <p className="hero-sub-heading text-lg">
                        Partner with expert developers and IT specialists in 100+ technologies, delivering tailored solutions for your business.
                        </p>
                        <ul className="button-group d-sm-flex align-items-center style-none">
                            <li>
                                <Link to="/contact-us" className="mt-15 demo-button tran3s">
                                    Book Free Call
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/case-studies" className="mt-15 callback-button d-flex align-items-center" >
                                    <span>See our Work</span>{" "}
                                    <img src={icon_23} alt="" className="ms-3" />
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className="row gx-md-5 align-items-end h-100">
                        <div className="col-3">
                            <img src={screen2} alt="" />
                        </div>
                        <div className="col-3">
                            <img src={screen3} alt="" className="mb-35" />
                            <img src={screen4} alt="" />
                        </div>
                        <div className="col-3">
                            <img src={screen5} alt="" className="mb-35" />
                            <img src={screen6} alt="" />
                        </div>
                        <div className="col-3">
                            <img src={screen7} alt="" className="mb-35" />
                            <img src={screen8} alt="" />
                        </div>
                    </div>
                    <img
                        src={shape_03}
                        alt=""
                        className="shapes shape-one"
                    />
                </div>{" "}
                {/* /.main-content */}
            </div>
        </div>
    )
}