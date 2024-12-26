import apiIntegration from '../../../../assets/services/rest-api.png';
import appDevelopment from '../../../../assets/services/app-development.png';
import webDevelopment from '../../../../assets/services/web-development.png';
import artificialIntelligence from '../../../../assets/services/artificial-intelligence.png';
import marketing from '../../../../assets/services/marketing.png';
import devOps from '../../../../assets/services/devops.png';
import customDevelopment from '../../../../assets/services/software-development.png';
import cloudMigration from '../../../../assets/services/cloud-migration.png';
import automation from '../../../../assets/services/automation.png';
import dynamic360 from '../../../../assets/services/dynamics-360.png';
import design from '../../../../assets/services/design.png';
import shape_37 from '../../../../assets/shapes/shape_37.svg';
import { Link } from 'react-router-dom';

export const Services = () => {

    const services = [
        {
            serviceName: 'Web Development',
            serviceLink: '/services/web-development',
            serviceDescription: 'Build modern, user-friendly websites that look great and work perfectly for your business needs.',
            serviceIcon: webDevelopment,
            fadedelay: 0
        },
        {
            serviceName: 'Mobile App Development',
            serviceLink: '/services/mobile-app-development',
            serviceDescription: 'Create amazing apps for Android and iOS that your customers will love to use.',
            serviceIcon: appDevelopment,
            fadedelay: 100
        },
        {
            serviceName: 'Custom Development',
            serviceLink: '/services/custom-development',
            serviceDescription: 'Get software built just for your business to make your work easier and more productive.',
            serviceIcon: customDevelopment,
            fadedelay: 150
        },
        {
            serviceName: 'DevOps',
            serviceLink: '/services/devops',
            serviceDescription: 'Make your development process faster and smoother with expert DevOps tools and services.',
            serviceIcon: devOps,
            fadedelay: 200
        },
        {
            serviceName: 'API Integration',
            serviceLink: '/services/api-integration',
            serviceDescription: 'Maximize connectivity and streamline operations with our expert API Integration. Tailored solutions for seamless efficiency and enhanced business performance.',
            serviceIcon: apiIntegration,
            fadedelay: 250
        },
        {
            serviceName: 'AI & Machine Learning',
            serviceLink: '/services/artificial-intelligence',
            serviceDescription: 'Unlock possibilities with our AI & Machine Learning solutions. Tailored for your business, our expert team enhances decision-making and operations efficiency.',
            serviceIcon: artificialIntelligence,
            fadedelay: 300
        },
        {
            serviceName: 'Digital Transformation',
            serviceLink: '/services/digital-transformation',
            serviceDescription: 'Upgrade your business with digital tools to work smarter, faster, and more efficiently.',
            serviceIcon: marketing,
            fadedelay: 350
        },
        {
            serviceName: 'UI/UX Design',
            serviceLink: '/services/ui-ux',
            serviceDescription: 'Crafting visual excellence: Web, Figma, illustrations, Photoshop. Elevate your brand with our creative designs.',
            serviceIcon: design,
            fadedelay: 400
        },
        {
            serviceName: 'Cloud Migration & Management',
            serviceLink: '/services/cloud-migration-management',
            serviceDescription: 'Move to the cloud quickly and securely, and keep your operations running smoothly.',
            serviceIcon: cloudMigration,
            fadedelay: 450
        },
        {
            serviceName: 'QA Testing & Automation',
            serviceLink: '/services/quality-assurance',
            serviceDescription: 'Make sure your software works perfectly with our testing and automation services.',
            serviceIcon: automation,
            fadedelay: 500
        },
        {
            serviceName: 'Dynamics 365 ERP',
            serviceLink: '/services/microsoft-dynamics-365-business-solutions',
            serviceDescription: 'Boost your business performance with Microsoft Dynamics 365 tailored to fit your needs.',
            serviceIcon: dynamic360,
            fadedelay: 550
        },
    ]

    return (
        <>
            <div className="vcamp-feature-section-eight mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-9 col-lg-7 col-md-9 m-auto" >
                            <div className="title-style-one text-center">
                                <h2 className="title">
                                    From vision to reality, we craft seamless <span>Full-Stack</span> Applications.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-layout mt-0 lg-mt-10">
                    <div className="row">
                        <div className="col-xxl-11 m-auto">
                            <div className="row">
                                {services.map((service) => (
                                    <div className="col-md-4 col-sm-6 d-flex" >
                                        <div className="card-style-three mt-50">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <img src={service.serviceIcon} alt="" className="tran3s w-50" />
                                            </div>
                                            <h4 className="title cursor-pointer">
                                                <Link to={service.serviceLink}>
                                                    {service.serviceName}
                                                </Link>
                                                </h4>
                                            <p>{service.serviceDescription}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src="images/shape/shape_39.svg" alt="" className="shapes shape-three" /> */}
                <img src={shape_37} alt="" className="shapes shape-two" />
            </div>
        </>
    )
}