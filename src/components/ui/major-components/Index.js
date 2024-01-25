import { AboutCompany } from "./about-us/AboutCompany"
import { SuccessStories } from "./clint-stories/SuccessStories"
import { Counter } from "./counter/Counter"
import { HeroIndex } from "./hero-section-index/Hero"
import { Services } from "./services/Services"
import { WhyChooseCompany } from "./why-choose/WhyChooseComany"

export const Index = () => {
    return (
        <>       
            <HeroIndex />
            <Services />
            <AboutCompany />
            <Counter />
            <SuccessStories />
            <WhyChooseCompany />
        </>
    )
}