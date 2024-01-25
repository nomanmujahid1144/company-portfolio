import globalImage from '../../../../assets/index-images/globa.png'


export const AboutCompany = () => {
    return (
        <div className="vcamp-text-block-one mt-150">
            <div className="container">
                <div className="row">
                <div className="col-xxl-5 col-xl-6 col-lg-7 ms-auto">
                    <div className="text-wrapper pt-0">
                    <div className="title-style-two">
                        <h6 className="title">
                         
                        We’re Navigating  Tomorrow's Software Landscape Today globally.
                        </h6>
                    </div>
                    <p className="meta-info-text text-lg">
                    At BusNet Limited, we take pride in the driving force behind our success – our dedicated team of passionate individuals who are committed to pushing the boundaries of innovation. Our software development team stands as a testament to excellence, collaboration, and a relentless pursuit of perfection.


                    </p>
                    <a href="about-usV1.html" className="theme-btn-one ripple-btn">
                        More about us
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="left-img-meta">
                <img src={globalImage} alt="" />
                <img src={"images/shape/shape_04.svg"} alt="" className="shapes shape-one" />
            </div>
            <img src="images/shape/shape_05.svg" alt="" className="shapes shape-two" />
        </div>

    )
}