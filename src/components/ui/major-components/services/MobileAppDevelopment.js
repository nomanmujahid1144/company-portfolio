import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/2.png';

export const MobileAppDevelopment = () => {

    const descriptions = [
        "We specialize in delivering innovative Mobile App Development services tailored to the unique requirements of startups and established businesses alike.",
        "Our process involves designing visually appealing and user-friendly mobile interfaces that engage users and foster strong connections.",
        "We build robust back-end architectures to ensure your mobile app operates seamlessly, offering reliable performance for all users.",
        "Our development strategy focuses on creating responsive and platform-compatible apps to provide exceptional experiences on both iOS and Android devices.",
    ];


    const features = [
        "Custom Mobile App Design",
        "Cross-Platform App Development",
        "Native iOS & Android Development",
        "User-Centric UI/UX Design",
        "Back-end Integration & APIs",
        "App Maintenance & Optimization",
    ];


    return (
        <div className="mt-100">
            <InsideBanner
                title="Mobile App Development"
                subtitle="Crafting intuitive, high-performing, and user-centric mobile applications to empower your business and elevate customer experiences."
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