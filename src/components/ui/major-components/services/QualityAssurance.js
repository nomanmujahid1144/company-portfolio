import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/10.png';

export const QualityAssurance = () => {

    const descriptions = [
        "We specialize in providing comprehensive Quality Assurance (QA) services to ensure your software products meet the highest standards of quality and performance.",
        "Our QA process involves thorough testing across different environments, focusing on functionality, usability, and security to deliver flawless applications.",
        "We work closely with your development team to identify potential issues early, ensuring that your software is reliable and bug-free before launch.",
        "Our services include automated and manual testing, regression testing, and performance optimization to continuously improve and maintain software quality."
    ];
    
    const features = [
        "Manual & Automated Testing",
        "Functional & Regression Testing",
        "Performance Testing & Optimization",
        "Security & Compliance Testing",
        "Continuous Integration & Continuous Testing (CI/CD)",
        "Bug Tracking & Issue Resolution"
    ];
    


    return (
        <div className="mt-100">
            <InsideBanner
                title="Quality Assurance"
                subtitle="Ensuring high-quality software solutions through rigorous testing, validation, and continuous improvement to meet your business standards."
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