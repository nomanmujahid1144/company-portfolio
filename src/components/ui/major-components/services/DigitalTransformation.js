import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/7.png';

export const DigitalTransformation = () => {

    const descriptions = [
        "We specialize in guiding businesses through their digital transformation journey, helping them leverage technology to improve efficiency and stay competitive.",
        "Our approach focuses on integrating innovative digital solutions across all aspects of your business, from operations and customer engagement to data management.",
        "We work with you to design and implement scalable digital strategies that drive growth, enhance productivity, and create a seamless experience for your customers.",
        "Our digital transformation services include the adoption of cloud computing, automation, AI, and data analytics to help your business remain agile and future-ready."
    ];

    const features = [
        "Cloud Migration & Integration",
        "Business Process Automation",
        "Data Analytics & Insights",
        "AI & Machine Learning Integration",
        "Digital Strategy Development",
        "Customer Experience Enhancement"
    ];

    return (
        <div className="mt-100">
            <InsideBanner
                title="Digital Transformation"
                subtitle="Empowering businesses to embrace digital technologies that streamline operations, enhance customer experiences, and foster innovation."
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