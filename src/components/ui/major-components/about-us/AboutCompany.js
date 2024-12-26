import { Link } from 'react-router-dom'
import globalImage from '../../../../assets/index-images/globa.png'
import shape_04 from '../../../../assets/shapes/shape_04.svg';
import shape_05 from '../../../../assets/shapes/shape_05.svg';


export const AboutCompany = () => {
    return (
        <div className="vcamp-text-block-one mt-150">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 ms-auto">
                        <div className="text-wrapper pt-0">
                            {/* <div className="title-style-two">
                                <h6 className="title">
                                    We’re Navigating  Tomorrow's Software Landscape Today globally.
                                </h6>
                            </div> */}
                            <div class="title-style-two">
                                <h3 class="title">We’ve been helping <span>cutomer</span> globally.</h3>
                            </div>
                            <p className="meta-info-text text-lg">
                                At BUSNET Limited, we take pride in the driving force behind our success – our dedicated team of passionate individuals who are committed to pushing the boundaries of innovation. Our software development team stands as a testament to excellence, collaboration, and a relentless pursuit of perfection.


                            </p>
                            <Link to="/about-us" className="theme-btn-one ripple-btn">
                                More about us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-img-meta">
                <img src={globalImage} alt="" />
                <img src={shape_04} alt="" className="shapes shape-one" />
            </div>
            <img src={shape_05} alt="" className="shapes shape-two" />
        </div>

    )
}