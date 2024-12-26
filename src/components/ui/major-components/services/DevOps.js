import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/4.png';

export const DevOps = () => {

    const descriptions = [
        "We specialize in DevOps services that enhance collaboration between development and operations teams, driving continuous delivery and faster time-to-market.",
        "Our approach focuses on automating processes, reducing manual tasks, and ensuring seamless integration between development, testing, and deployment environments.",
        "We implement robust monitoring and feedback systems to ensure the stability and reliability of your applications throughout their lifecycle.",
        "Our DevOps strategies optimize resource management, scalability, and security, allowing your organization to adapt quickly to changes and maintain high performance."
    ];

    const features = [
        "Continuous Integration & Continuous Delivery (CI/CD)",
        "Automation of Development & Deployment Pipelines",
        "Cloud Infrastructure Management",
        "Infrastructure as Code (IaC)",
        "Monitoring, Logging & Alerts",
        "Scalability & Performance Optimization",
    ];

    return (
        <div className="mt-100">
            <InsideBanner
                title="DevOps"
                subtitle="Streamlining software development and IT operations for faster delivery, enhanced collaboration, and continuous improvement."
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