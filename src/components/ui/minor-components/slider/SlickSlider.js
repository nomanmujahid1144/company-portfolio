import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.css'


const NextArrow = (props) => {
    const { className, style, onClick, display } = props;

    return (

        <div
            className={className}
            style={{ ...style, display: display, top: "100px", opacity: "0.9", padding: "20px", borderRadius: '50%' }}
            onClick={onClick}
        />

    );
}

const PrevArrow = (props) => {
    const { className, style, onClick, display } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: display, zIndex: "1", top: "100px", opacity: "0.9", padding: "20px", borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}
const TestomonialNextArrow = (props) => {
    const { className, style, onClick, display } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: display, zIndex: "1", top: "150px", opacity: "0.9", padding: "20px", borderRadius: '50%' }}
            onClick={onClick}
        />

    );
}

const TestomonialPrevArrow = (props) => {
    const { className, style, onClick, display } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: display, zIndex: "1", top: "150px", left: '-5px', opacity: "0.9", padding: "20px", borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow display="none" />,
    prevArrow: <PrevArrow display="none" />,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1140,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 930,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 660,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};
var reviewSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <PrevArrow display="none" />, // Hide the previous arrow
    nextArrow: <NextArrow display="none" />, // Hide the next arrow
    appendDots: dots => (
        <div>
            <ul > {dots} </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                speed: 500,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                speed: 500,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                dots: true,
                centerMode: false,
                infinite: true,
                slidesToShow: 2,
                speed: 500,
            }
        },
        {
            breakpoint: 650,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 1,
                speed: 500,
            }
        }
    ]
};
var caseStudySettings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <PrevArrow display="none" />, // Hide the previous arrow
    nextArrow: <NextArrow display="none" />, // Hide the next arrow
    appendDots: dots => (
        <div>
            <ul > {dots} </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                speed: 500,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                speed: 500,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                speed: 500,
            }
        },
        {
            breakpoint: 650,
            settings: {
                dots: true,
                centerMode: true,
                infinite: true,
                slidesToShow: 3,
                speed: 500,
            }
        }
    ]
};
var TestimonialSettings = {
    dots: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    prevArrow: <TestomonialPrevArrow display="none" isPre={true} />, // Hide the previous arrow
    nextArrow: <TestomonialNextArrow display="none" isNext={true} />, // Hide the next arrow
    appendDots: dots => (
        <div>
            <ul > {dots} </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                dots: false,
                centerMode: true,
                infinite: true,
                slidesToShow: 2,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                centerMode: true,
                infinite: true,
                slidesToShow: 2,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                dots: false,
                centerMode: false,
                infinite: true,
                slidesToShow: 2,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 650,
            settings: {
                dots: false,
                centerMode: true,
                infinite: true,
                slidesToShow: 1,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 2000,
            }
        }
    ]
};
var settingsPartners = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow display="none" />,
    prevArrow: <PrevArrow display="none" />,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                speed: 1000,
                slidesToShow: 6,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1140,
            settings: {
                speed: 1000,
                slidesToShow: 6,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 930,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 660,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 2000,
            }
        }
    ]
};
export const SlickSlider = ({ children }) => {
    return (

        <Slider className='w-full' {...settings}>
            {children}
        </Slider>

    )
}
export const SlickReviewSlider = ({ children }) => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleDotClick = (index) => {
        if (sliderRef.current && sliderRef.current.slick) {
            sliderRef.current.slick.slickGoTo(index);
        }
    };

    return (

        <Slider className='feedback_slider_three' ref={sliderRef} {...reviewSettings} beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)} afterChange={(index) => handleDotClick(index)} >
            {React.Children.map(children, (child, index) => React.cloneElement(child, { isActive: index === activeSlide }))}
        </Slider>
    )
}
// export const SlickCaseStudySlider = ({ children, sliderRef }) => {
//     const internalSliderRef = useRef(null);

//     useEffect(() => {
//         if (sliderRef) {
//             sliderRef.current = internalSliderRef.current;
//         }
//     }, [sliderRef]);

//     const [activeSlide, setActiveSlide] = useState(0);

//     const handleDotClick = (index) => {
//         if (internalSliderRef.current && internalSliderRef.current.slick) {
//             internalSliderRef.current.slick.slickGoTo(index);
//         }
//     };

//     return (
//         <Slider
//             className="case_slider_two"
//             ref={internalSliderRef}
//             {...caseStudySettings}
//             beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
//             afterChange={(index) => handleDotClick(index)}
//         >
//             {React.Children.map(children, (child, index) =>
//                 React.cloneElement(child, { isActive: index === activeSlide })
//             )}
//         </Slider>
//     );
// };
export const SlickCaseStudySlider = ({ children, sliderRef }) => {
    const internalSliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef) {
            sliderRef.current = internalSliderRef.current;
        }
    }, [sliderRef]);

    return (
        <Slider
            ref={internalSliderRef}
            className="case_slider_two"
            {...caseStudySettings}
        >
            {children}
        </Slider>
    );
};
export const SlickTestimonialSlider = ({ children }) => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleDotClick = (index) => {
        if (sliderRef.current && sliderRef.current.slick) {
            sliderRef.current.slick.slickGoTo(index);
        }
    };

    return (

        <Slider className='feedback_slider_two' ref={sliderRef} {...TestimonialSettings} beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)} afterChange={(index) => handleDotClick(index)} >
            {React.Children.map(children, (child, index) => React.cloneElement(child, { isActive: index === activeSlide }))}
        </Slider>
    )
}
export const SlickPartnerSlider = ({ children }) => {
    return (

        <Slider className='partnerSliderOne' {...settingsPartners}>
            {children}
        </Slider>

    )
}