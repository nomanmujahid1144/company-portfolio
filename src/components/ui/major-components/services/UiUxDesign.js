import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/8.png';

export const UIUXDesign = () => {

    const descriptions = [
        "We specialize in designing beautiful and functional user interfaces that enhance the overall user experience and create lasting impressions.",
        "Our UI/UX design process is focused on understanding user needs and behaviors, ensuring that each design decision is user-centric and impactful.",
        "We prioritize creating responsive and accessible designs, ensuring that users have a seamless experience across all devices and platforms.",
        "We believe in the power of collaboration, working closely with clients to refine and perfect designs that align with both user needs and business goals."
    ];

    const features = [
        "User-Centric UI/UX Design",
        "Wireframing & Prototyping",
        "Responsive Design",
        "Interaction Design",
        "Usability Testing & Research",
        "Brand Identity Integration"
    ];


    return (
        <div className="mt-100">
            <InsideBanner
                title="UI/UX Design"
                subtitle="Creating intuitive, user-friendly designs that elevate user experiences and ensure seamless interactions across digital platforms."
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