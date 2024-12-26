import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/3.png';

export const CustomDevelopment = () => {

    const descriptions = [
        "We specialize in providing Custom Software Development services that address the specific needs of businesses across various industries.",
        "Our approach involves creating intuitive and scalable software solutions designed to enhance workflows and solve unique business challenges.",
        "We ensure seamless integration of your software with existing systems, backed by robust back-end functionality for dependable performance.",
        "Our solutions are designed to be flexible and future-proof, empowering businesses to adapt to evolving market demands and technologies.",
    ];

    const features = [
        "Tailored Software Solutions",
        "End-to-End Development Services",
        "Scalable and Secure Architectures",
        "System Integration and Automation",
        "Custom UI/UX Design",
        "Ongoing Support & Maintenance",
    ];



    return (
        <div className="mt-100">
            <InsideBanner
                title="Custom Software Development"
                subtitle="Building tailored, scalable, and efficient software solutions to meet your business's unique challenges and drive success."
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