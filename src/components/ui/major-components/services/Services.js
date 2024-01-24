import apiIntegration from '../../../../assets/services/rest-api.png';
import appDevelopment from '../../../../assets/services/app-development.png';
import webDevelopment from '../../../../assets/services/web-development.png';
import artificialIntelligence from '../../../../assets/services/artificial-intelligence.png';
import marketing from '../../../../assets/services/marketing.png';
import design from '../../../../assets/services/design.png';

export const Services = () => {

    const services = [
        {
            serviceName: 'API Integration',
            serviceDescription: 'Maximize connectivity and streamline operations with our expert API Integration. Tailored solutions for seamless efficiency and enhanced business performance.',
            serviceIcon: apiIntegration,
            fadedelay: 0
        },
        {
            serviceName: 'Mobile Development',
            serviceDescription: 'Tailored app solutions for your unique business needs. Our developers create seamless user experiences, working closely with you from design to development.',
            serviceIcon: appDevelopment,
            fadedelay: 100
        },
        {
            serviceName: 'Web Development',
            serviceDescription: 'Transform your online presence with our expert Web Development. Tailored solutions for seamless user experiences, from concept to execution.',
            serviceIcon: webDevelopment,
            fadedelay: 150
        },
        {
            serviceName: 'AI & Machine Learning',
            serviceDescription: 'Unlock possibilities with our AI & Machine Learning solutions. Tailored for your business, our expert team enhances decision-making and operations efficiency.',
            serviceIcon: artificialIntelligence,
            fadedelay: 200
        },
        {
            serviceName: 'Marketing',
            serviceDescription: 'Elevate your brand with our impactful Marketing solutions. Tailored strategies for engagement and results, ensuring your business stands out in the competitive landscape.',
            serviceIcon: marketing,
            fadedelay: 250
        },
        {
            serviceName: 'UI/UX Design',
            serviceDescription: 'Crafting visual excellence: Web, Figma, illustrations, Photoshop. Elevate your brand with our creative designs.',
            serviceIcon: design,
            fadedelay: 300
        },
    ]

    return (
        <>
        <div className="vcamp-feature-section-seven">
            <div className="container">
                <div className="row">
                <div
                    className="col-xxl-7 col-xl-9 col-lg-7 col-md-9 m-auto"
                    data-aos="fade-up"
                >
                    <div className="title-style-five text-center">
                    <h2 className="title">We provide industrial solution also</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="box-layout mt-40 lg-mt-10">
                    <div className="row">
                        <div className="col-xxl-11 m-auto">
                            <div className="row">
                                {services.map((service) => (        
                                    <div className="col-md-4 col-sm-6 d-flex mt-45"
                                        // data-aos="fade-up"
                                        // data-aos-delay={service.fadedelay}
                                    >
                                        <div className="card-style-seven">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <img src={service.serviceIcon} alt="" />
                                            </div>
                                            <h4>{service.serviceName}</h4>
                                            <p>{service.serviceDescription}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src="images/shape/shape_39.svg" alt="" className="shapes shape-three" /> */}
                <img src="images/shape/shape_37.svg" alt="" className="shapes shape-two" />
            </div>
        </>
    )
}