import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/9.png';

export const CloudMigrationManagement = () => {

    const descriptions = [
        "We specialize in guiding businesses through the process of migrating their infrastructure to the cloud, ensuring a smooth transition with minimal disruption.",
        "Our team works to optimize your cloud environment, ensuring that your systems run efficiently and are scalable to meet your growing needs.",
        "We provide ongoing cloud management services, monitoring and maintaining your infrastructure to ensure security, performance, and cost-efficiency.",
        "With expertise in leading cloud platforms, we offer tailored solutions to help your business leverage the full potential of the cloud, improving agility and performance."
    ];

    const features = [
        "Cloud Strategy & Planning",
        "Seamless Cloud Migration",
        "Cloud Infrastructure Optimization",
        "Cloud Security & Compliance",
        "Cost Management & Optimization",
        "Ongoing Cloud Support & Management"
    ];



    return (
        <div className="mt-100">
            <InsideBanner
                title="Cloud Migration & Management"
                subtitle="Seamlessly migrate your infrastructure to the cloud and optimize cloud operations to scale your business efficiently and securely."
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