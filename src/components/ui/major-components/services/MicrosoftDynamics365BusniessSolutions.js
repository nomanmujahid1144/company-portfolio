import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/11.png';

export const MicrosoftDynamics365BusinessSolutions = () => {

    const descriptions = [
        "We specialize in providing Microsoft Dynamics 365 Business Solutions that help organizations enhance their customer relationships, optimize operations, and drive growth through data-driven insights.",
        "Our team works closely with you to implement and customize Dynamics 365 applications, ensuring they align with your unique business processes and goals.",
        "We offer seamless integration with your existing systems, making sure that your enterprise resource planning (ERP), customer relationship management (CRM), and business intelligence solutions work together efficiently.",
        "With our expertise in Dynamics 365, we ensure you maximize your return on investment by streamlining workflows, improving collaboration, and enabling real-time analytics across your organization."
    ];
    
    const features = [
        "Customer Relationship Management (CRM)",
        "Enterprise Resource Planning (ERP)",
        "Business Intelligence & Analytics",
        "Seamless Integration with Existing Systems",
        "Custom Workflow Automation",
        "Cloud-Based & Scalable Solutions"
    ];    


    return (
        <div className="mt-100">
            <InsideBanner
                title="Microsoft Dynamics 365"
                subtitle="Empowering businesses with integrated and intelligent solutions that streamline operations, improve decision-making, and drive growth."
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