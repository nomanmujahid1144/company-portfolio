import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/5.png';

export const ApiIntegration = () => {

    const descriptions = [
        "We specialize in providing efficient API integration services to connect your applications with external services, enabling smooth data exchange and enhanced functionality.",
        "Our process involves developing and integrating custom APIs tailored to your business needs, ensuring seamless communication between different systems and platforms.",
        "We focus on building secure and scalable API solutions that ensure high performance and reliability across all integrated systems.",
        "Our API integration services also include real-time data synchronization, ensuring that your systems stay up-to-date with the latest information without delay."
    ];

    const features = [
        "Custom API Development",
        "Third-Party API Integration",
        "Real-Time Data Sync",
        "RESTful & SOAP API Services",
        "API Security & Authentication",
        "API Maintenance & Monitoring",
    ];

    return (
        <div className="mt-100">
            <InsideBanner
                title="API Integration"
                subtitle="Seamlessly connecting your systems and applications with robust and scalable API solutions to enhance functionality and performance."
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