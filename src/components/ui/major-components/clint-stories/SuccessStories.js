import { SlickReviewSlider } from "../../minor-components/slider/SlickSlider"
import { SingleStory } from "./SingleStory";
import portfolioImage_01 from '../../../../assets/portfolios/portfolio_1.png';
import portfolioImage_02 from '../../../../assets/portfolios/portfolio_2.png';
import portfolioImage_03 from '../../../../assets/portfolios/portfolio_3.png';
import portfolioImage_04 from '../../../../assets/portfolios/portfolio_4.png';

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
    ]

    return (
        <div className="feedback-section-three dark-bg ">
            <img src="images/shape/shape_06.svg" alt="" className="shapes shape-one" />
            <div className="inner-content d-lg-flex align-items-center clearfix overflow-hidden">
                <div className="text-wrapper">
                <div className="title-style-one white-vr">
                    <h2 className="title">
                    <span>Success</span> sotries from client.
                    </h2>
                </div>
                <p>Lorem ipsum dolor sit amet cons elit adiel sed do eiusmd</p>
                    <a href="portfolioV1.html" className="theme-btn-three white-vr">
                        View all case study <i className="fas fa-angle-right" />
                    </a>
                </div>
                {/*  /.text-wrapper */}
                <div className='slider-wrapper'>
                    {/* <div className="feedback_slider_three"> */}
                    <SlickReviewSlider >
                        {portfolios.map((item) => (
                            <SingleStory
                                portfolioImage={item.portfolioImage}
                                portfolioLink={item.portfolioLink}
                            />
                        ))}
                    </SlickReviewSlider>
                    {/* </div> */}
                </div>
                {/* <div className="slider-wrapper">
                    <div className="feedback_slider_three">
                        <div className="item">
                        <div className="block-wrapper">
                            <img src="images/media/img_05.jpg" alt="" className="screen" />
                            <div className="overlay-content d-flex align-items-end">
                            <a
                                href="portfolio-detailsV2.html"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <span>www.uiart.com</span>
                                <img src="images/icon/icon_28.svg" alt="" />
                            </a>
                            </div>{" "}
                        </div>{" "}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}