import { SuccessStories } from "../clint-stories/SuccessStories"
import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { WhyWe } from "../why-we/Index"
import { ServiceDetail } from "./service-detail/ServiceDetail";
import featureImage from '../../../../assets/services/images/6.png';

export const ArtificialIntelligence = () => {

    const descriptions = [
        "We specialize in providing AI-powered solutions that help businesses automate complex tasks, improve operational efficiency, and unlock new growth opportunities.",
        "Our process involves developing and implementing machine learning models, natural language processing (NLP), and computer vision to deliver smart, data-driven insights.",
        "We focus on building scalable AI solutions that can integrate seamlessly with your existing systems, providing intelligent automation across various business functions.",
        "Our AI services also include continuous optimization and model retraining to ensure your systems adapt and evolve with changing data and requirements."
    ];

    const features = [
        "Machine Learning Solutions",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "AI-Powered Automation"
    ];

    return (
        <div className="mt-100">
            <InsideBanner
                title="Artificial Intelligence"
                subtitle="Leveraging cutting-edge AI technologies to create intelligent systems that enhance decision-making, automate processes, and drive innovation."
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