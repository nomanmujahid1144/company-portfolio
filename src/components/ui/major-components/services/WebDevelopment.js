import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail"
import featureImage from '../../../../assets/services/images/1.png';

export const WebDevelopment = () => {

    const descriptions = [
        "We specialize in delivering professional Web Development Services designed to meet the unique needs of businesses, whether they are startups or established enterprises.",
        "Our process includes creating visually engaging user interfaces that captivate your audience and drive meaningful interactions.",
        "We ensure that your website or web app is powered by a strong back-end, providing seamless functionality and reliability for all users.",
        "Our development approach prioritizes responsive designs and user-friendly experiences to ensure accessibility across all devices and platforms.",
    ];

    const features = [
        "Custom Web Design",
        "Front-end Development",
        "Back-end Development",
        "Responsive & Mobile-First Design",
        "Content Management System (CMS) Integration",
        "E-commerce Development & Optimization",
    ];

    return (
        <div className="mt-100">
            <InsideBanner
                title="Web Development"
                subtitle="Creating modern, responsive, and user-friendly websites to meet your business needs and ensure online success."
            />
            <ServiceDetail 
                descriptions={descriptions}
                features={features}
                featureImage={featureImage}
            />
            <WhyWe />
            <SuccessStories />
        </div>
    )
}