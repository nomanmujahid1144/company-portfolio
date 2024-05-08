import { SlickReviewSlider } from "../../minor-components/slider/SlickSlider"
import { SingleStory } from "./SingleStory";
import portfolioImage_01 from '../../../../assets/portfolios/portfolio_1.png';
import portfolioImage_02 from '../../../../assets/portfolios/portfolio_2.png';
import portfolioImage_03 from '../../../../assets/portfolios/portfolio_3.png';
import portfolioImage_04 from '../../../../assets/portfolios/portfolio_4.png';
import portfolioImage_05 from '../../../../assets/portfolios/portfolio_5.png';
import shape_06 from '../../../../assets/shapes/shape_06.svg';

import { Link } from "react-router-dom";

export const SuccessStories = () => {

    const portfolios = [
        {
            portfolioImage: portfolioImage_01,
            portfolioLink: 'deliverez.pk'
        },
        {
            portfolioImage: portfolioImage_02,
            portfolioLink: 'thestudenthelpline.co.in'
        },
        {
            portfolioImage: portfolioImage_03,
            portfolioLink: ''
        },
        {
            portfolioImage: portfolioImage_04,
            portfolioLink: 'vipinfluencers.com'
        },
        {
            portfolioImage: portfolioImage_04,
            portfolioLink: 'vipinfluencers.com'
        },
        {
            portfolioImage: portfolioImage_05,
            portfolioLink: ''
        },
    ]

    return (
        <div className="feedback-section-three dark-bg ">
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
        </div>
    )
}