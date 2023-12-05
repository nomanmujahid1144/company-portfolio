import { SlickReviewSlider } from "../../minor-components/slider/SlickSlider"
import { SingleStory } from "./SingleStory"

export const SuccessStories = () => {
    return (
        <div className="feedback-section-three dark-bg mt-110 lg-mt-70">
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
                        {[1, 2, 3, 4].map((item) => (
                            <SingleStory />
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