import { SlickReviewSlider, SlickTestimonialSlider } from "../../minor-components/slider/SlickSlider"
import { TestimonialCard } from "./TestimonialCard"

export const Testimonials = () => {

    const TestimonialsList = [
        {
            personName: 'John Smith',
            review: "Busnet Limited exceeded our expectations! Their team was incredibly responsive and delivered a top-notch website for our company. We're thrilled with the results and highly recommend their services.",
            country: 'USA',
        },
        {
            personName: 'Sarah Johnson',
            review: "Working with Busnet Limited was a breeze. Their attention to detail and creative solutions helped us achieve our goals effectively. We're grateful for their expertise and professionalism.",
            country: 'UK',
        },
        {
            personName: 'Carlos Fernandez',
            review: "Busnet Limited truly understands the needs of small businesses. Their tailored approach and commitment to excellence resulted in a website that perfectly represents our brand. Thank you for your outstanding work",
            country: 'Spain',
        },
        {
            personName: 'Emily Wong',
            review: "Choosing Busnet Limited was one of the best decisions we made for our company. Their team went above and beyond to deliver a website that stands out in our industry. We're impressed by their dedication and talent.",
            country: 'Australia',
        },
        {
            personName: 'Amanda Johnson',
            review: "I can't speak highly enough of Busnet Limited! Their team's attention to detail and dedication to our project were remarkable. They delivered a stunning website that perfectly captures our brand identity. I'm impressed and would gladly recommend their services to anyone looking for top-notch web development.",
            country: 'USA',
        },
        {
            personName: "James O'Connor",
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
                        />
                    ))}
                </SlickTestimonialSlider >
            </div> 
        </div>
    )
}