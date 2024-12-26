import { SlickTestimonialSlider } from "../../minor-components/slider/SlickSlider"
import { TestimonialCard } from "./TestimonialCard"

export const Testimonials = () => {

    const TestimonialsList = [
        {
            personName: 'Hassan Pierre',
            founderOf: 'Saly the Bear',
            review: "Busnet Limited exceeded our expectations! Their team was incredibly responsive and delivered a top-notch website for our company. We're thrilled with the results and highly recommend their services.",
            country: 'USA',
        },
        {
            personName: 'Neil Sumaru',
            founderOf: 'Lotus Data Group',
            review: "Working with Busnet Limited was an absolute pleasure! They delivered an outstanding website for Lotus that perfectly captures our vision. The team's professionalism, creativity, and attention to detail were remarkable. I highly recommend Busnet Limited to anyone looking for top-quality IT solutions!",
            country: 'USA',
        },
        {
            personName: 'John Smith',
            founderOf: 'Westside Garage Door',
            review: "Busnet Limited exceeded our expectations! Their team was incredibly responsive and delivered a top-notch website for our company. We're thrilled with the results and highly recommend their services.",
            country: 'USA',
        },
        {
            personName: 'Stephen Oni',
            founderOf: 'Softcity',
            review: "Working with Busnet Limited was a breeze. Their attention to detail and creative solutions helped us achieve our goals effectively. We're grateful for their expertise and professionalism.",
            country: 'Nigeria',
        },
        {
            personName: 'Philips',
            founderOf: 'VIP Influencers',
            review: "Busnet Limited truly understands the needs of small businesses. Their tailored approach and commitment to excellence resulted in a website that perfectly represents our brand. Thank you for your outstanding work",
            country: 'Spain',
        },
        {
            personName: 'Syed Asif Sultan',
            founderOf: 'Bot Benchmark',
            review: "I've worked with Busnet Limited on several occasions and he's never disappointed me. The projects I offered him were kind of complicated at times but they always excelled. Looking forward to working with them in future projects as well and I wish him loads of success.",
            country: 'India',
        },
        {
            personName: 'Amanda Johnson',
            founderOf: 'Budcars',
            review: "I can't speak highly enough of Busnet Limited! Their team's attention to detail and dedication to our project were remarkable. They delivered a stunning website that perfectly captures our brand identity. I'm impressed and would gladly recommend their services to anyone looking for top-notch web development.",
            country: 'Canada',
        },
        {
            personName: "James O'Connor",
            founderOf: 'Study Abroad',
            review: "Busnet Limited is a true gem in the world of web development. From the initial consultation to the final delivery, they were a pleasure to work with. Their expertise and professionalism shone through every step of the process. Our new website has received rave reviews from clients and colleagues alike. Thank you, Busnet Limited, for exceeding our expectations!",
            country: 'Greece',
        },
    ]

    return (
        <div class="feedback-section-two ">
            <div class="bg-wrapper">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-12 col-md-12">
                            <div class="title-style-one text-center">
                                <h2 class="title">What’s our <span>client</span> say about us.</h2>
                            </div>
                        </div>
                    </div>
                </div> 
                <SlickTestimonialSlider >
                    {TestimonialsList.map((testimonial, index) => (
                        <TestimonialCard 
                            personName={testimonial.personName}
                            review={testimonial.review}
                            country={testimonial.country}
                            founderOf={testimonial.founderOf}
                        />
                    ))}
                </SlickTestimonialSlider >
            </div> 
        </div>
    )
}