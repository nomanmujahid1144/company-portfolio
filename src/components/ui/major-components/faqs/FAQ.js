export const FAQ = () => {

    const faqData = [
        {
            question: "What is Bot Benchmark?",
            answer: [
                "Bot Benchmark is a dedicated review platform for AI tools, where real users share their firsthand experiences, and tool founders can address reviews directly."
            ],
            isExpanded: true // Set to true if you want this FAQ to be expanded by default
        },
        {
            question: "How do you select AI tools for review?",
            answer: [
                "We don't handpick AI tools for review. Instead, we list them with a basic overview and allow real users to review them based on their experiences."
            ],
            isExpanded: false
        },
        {
            question: "Are the reviews on Bot Benchmark unbiased?",
            answer: [
                "Absolutely. We actively moderate reviews to identify and address any patterns of bias. Our aim is to provide transparent, genuine feedback without any hidden agendas."
            ],
            isExpanded: false
        },
        {
            question: "Can AI tool founders respond to reviews?",
            answer: [
                "Yes, we encourage a dynamic dialogue. Founders are welcome to address user reviews directly on our platform, fostering an environment of transparency and growth."
            ],
            isExpanded: false
        },
        {
            question: "How do you ensure the quality of reviews?",
            answer: [
                "We monitor for unusual activities and gather feedback from both founders and users. Any suspicious or non-genuine reviews are scrutinized closely to maintain the integrity of our platform."
            ],
            isExpanded: false
        },
        {
            question: "Can I request a specific AI tool to be listed?",
            answer: [
                "While we aim to have a comprehensive listing, users can certainly suggest AI tools they'd like to see featured. We always appreciate community input to make our platform more inclusive."
            ],
            isExpanded: false
        },
        {
            question: "Is there a cost to use Bot Benchmark?",
            answer: [
                "There is no cost for users to access and use Bot Benchmark. However, founders can opt for a monthly plan to claim their listings and enjoy additional features."
            ],
            isExpanded: false
        },
        {
            question: "How often is Bot Benchmark updated with new AI tools?",
            answer: [
                "We continuously strive to stay updated with the latest in the AI tool landscape. Our listings are refreshed regularly to reflect the ever-evolving world of AI."
            ],
            isExpanded: false
        },
        {
            question: "Do you have partnerships or collaborations with any AI tool companies?",
            answer: [
                "While we provide a platform for user reviews and direct founder responses, our primary commitment is to our users. We ensure all reviews are unbiased and do not favor any particular company."
            ],
            isExpanded: false
        },
        {
            question: "How can I get in touch with the Bot Benchmark team?",
            answer: [
                "You can reach us at hello@botbenchmark.com."
            ],
            isExpanded: false
        }
    ];


    return (

        <main>
            <div className="inside-hero-three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-6">
                            <h2 className="page-title font-recoleta">Find <span>Answers</span> here.</h2>
                        </div>
                        <div className="col-xxl-5 col-md-6 ms-auto">
                            <p>About our terms and conditions, you can locate and view your question. policies about privacy, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* /hero_single */}
            <div className="faq-section-two dark-bg mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-10 m-auto">
                            <ul className="nav nav-tabs justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <button
                                        className="nav-link active"
                                        data-bs-toggle="tab"
                                        data-bs-target="#all"
                                        role="tab"
                                    >
                                        All
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#userManual"
                                        role="tab"
                                    >
                                        Services & Polices
                                    </button>
                                </li>
                             
                             
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        data-bs-target="#terms-conditions"
                                        role="tab"
                                    >
                                        Terms &amp; Conditions
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content mt-110 lg-mt-60">
                                <div className="tab-pane fade show active" id="all" role="tabpanel">
                                    <div className="accordion accordion-style-three" id="accordionTwo">
                                        {faqData.map((faq, index) => (
                                            <div className="accordion-item" key={index}>
                                                <div className="accordion-header" id={`heading${index}`}>
                                                    <button
                                                        className={`accordion-button ${faq.isExpanded ? '' : 'collapsed'}`}
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${index}`}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </div>
                                                <div
                                                    id={`collapse${index}`}
                                                    className={`accordion-collapse collapse ${faq.isExpanded ? 'show' : ''}`}
                                                    data-bs-parent="#accordionTwo"
                                                >
                                                    <div className="accordion-body">
                                                        <p>{faq.answer[0]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* /.accordion-style-three */}
                                </div>
                                <div className="tab-pane fade" id="userManual" role="tabpanel">
                                    <div
                                        className="accordion accordion-style-three"
                                        id="accordionThree"
                                    >{faqData.map((faq, index) => (
                                        <div className="accordion-item" key={index}>
                                            <div className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${faq.isExpanded ? '' : 'collapsed'}`}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </div>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${faq.isExpanded ? 'show' : ''}`}
                                                data-bs-parent="#accordionTwo"
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="terms-conditions" role="tabpanel">
                                    <div className="accordion accordion-style-three" id="accordionSix">

                                    {faqData.map((faq, index) => (
                                        <div className="accordion-item" key={index}>
                                            <div className="accordion-header" id={`heading${index}`}>
                                                <button
                                                    className={`accordion-button ${faq.isExpanded ? '' : 'collapsed'}`}
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </div>
                                            <div
                                                id={`collapse${index}`}
                                                className={`accordion-collapse collapse ${faq.isExpanded ? 'show' : ''}`}
                                                data-bs-parent="#accordionTwo"
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>

                                </div>
                            </div>{" "}
                            {/* /.tab-content */}
                            <div className="request-faq text-center pt-90 lg-pt-70">
                                <h2 className="font-recoleta">Don’t get your answer?</h2>
                                <a href="/contact" className="theme-btn-four ripple-btn">
                                    CONTACT US
                                </a>
                            </div>{" "}
                            {/* /.request-faq */}
                        </div>
                    </div>
                </div>{" "}
                {/* /.container */}
            </div>

        </main>

    )
}