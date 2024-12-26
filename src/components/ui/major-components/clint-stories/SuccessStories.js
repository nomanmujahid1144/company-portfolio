import { SlickCaseStudySlider, SlickReviewSlider } from "../../minor-components/slider/SlickSlider"
import { SingleStory } from "./SingleStory";
import portfolioImage_01 from '../../../../assets/case-studies/1.png';
import portfolioImage_02 from '../../../../assets/case-studies/2.png';
import portfolioImage_03 from '../../../../assets/case-studies/3.png';
import portfolioImage_04 from '../../../../assets/case-studies/4.png';
import portfolioImage_05 from '../../../../assets/case-studies/5.png';
import portfolioImage_06 from '../../../../assets/case-studies/6.png';
import portfolioImage_07 from '../../../../assets/case-studies/7.png';
import portfolioImage_08 from '../../../../assets/case-studies/8.png';
import portfolioImage_09 from '../../../../assets/case-studies/9.png';
import portfolioImage_10 from '../../../../assets/case-studies/10.png';
import shape_06 from '../../../../assets/shapes/shape_06.svg';

import { Link } from "react-router-dom";
import { useRef } from "react";

export const SuccessStories = () => {

    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        console.log('Previous Click')
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        console.log('Next Click')
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const portfolios = [
        {
            portfolioImage: portfolioImage_10,
            portfolioLink: '',
            projectTitle: 'DeliverEz',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_01,
            portfolioLink: '',
            projectTitle: 'The Student Help Line',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_03,
            portfolioLink: '',
            projectTitle: 'Slay The Bear',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_04,
            portfolioLink: '',
            projectTitle: 'Dynamic Solutions',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_05,
            portfolioLink: '',
            projectTitle: 'Westside Garage Door',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_06,
            portfolioLink: '',
            projectTitle: 'Softcity',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_07,
            portfolioLink: '',
            projectTitle: 'VIP Influencers',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_08,
            portfolioLink: '',
            projectTitle: 'Bot Benchmark',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_09,
            portfolioLink: '',
            projectTitle: 'BudCars',
            projectTag: ''
        },
        {
            portfolioImage: portfolioImage_02,
            portfolioLink: '',
            projectTitle: 'Lotus',
            projectTag: ''
        },
    ]

    return (
        <>
            <div className="case-study-six dark-bg mt-80 ms-auto me-auto">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 col-sm-8">
                            <div className="title-style-five white-vr text-center text-sm-start xs-pb-20">
                                <h2 className="title">Case studies.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-4 d-flex justify-content-center justify-content-sm-end">
                            <ul className="slider-arrows d-flex style-none">
                                <li className="prev_case2 ripple-btn slick-arrow" onClick={handlePrevClick}>
                                    <i className="bi bi-arrow-left" />
                                </li>
                                <li className="next_case2 ripple-btn slick-arrow" onClick={handleNextClick}>
                                    <i className="bi bi-arrow-right"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="slider-wrapper pt-80 lg-pt-50">
                    <SlickCaseStudySlider sliderRef={sliderRef}>
                        {portfolios.map((item) => (
                            <div className="item">
                                <div className="case-block-five">
                                    <div className="img-holder">
                                        <img src={item.portfolioImage} alt="" className="w-100" />
                                    </div>
                                    <div className="text">
                                        {/* <div className="tag">User Interface</div> */}
                                        <h4>
                                            <a href="#">
                                                {item.projectTitle}
                                            </a>
                                        </h4>
                                        {/* <p className="text-white opacity-50">Lorem Ipsem</p> */}
                                    </div>
                                </div>{" "}
                                {/* /.case-block-five */}
                            </div>
                        ))}
                    </SlickCaseStudySlider>
                </div>
            </div>

            {/* <div className="feedback-section-three dark-bg mt-50">
                <img src={shape_06} alt="" className="shapes shape-one" />
                <div className="inner-content d-lg-flex align-items-center clearfix overflow-hidden">
                    <div className="text-wrapper">
                        <div className="title-style-one white-vr">
                            <h4 className="title">
                                Case Studies
                            </h4>
                        </div>
                        <p>Ready to revolutionize your business? Discover how our award-winning IT solutions empower companies worldwide to achieve explosive growth.</p>
                        <Link to="/case-studies" className="theme-btn-three white-vr">
                            View all case study <i className="fas fa-angle-right" />
                        </Link>
                    </div>
                    <div className='slider-wrapper'>
                        <SlickReviewSlider >
                            {portfolios.map((item) => (
                                <SingleStory
                                    portfolioImage={item.portfolioImage}
                                    portfolioLink={item.portfolioLink}
                                />
                            ))}
                        </SlickReviewSlider>
                    </div>
                </div>
            </div> */}
        </>
    )
}