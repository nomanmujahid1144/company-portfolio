export const WhyWe = () => {

    const processSteps = [
        {
            processHeading: 'Understanding Your Goals',
            processDescription: 'We start by discussing your goals and understanding your requirements to create a clear plan.',
        },
        {
            processHeading: 'Development and Deployment',
            processDescription: 'Our team designs, builds, and launches your solution, ensuring everything works seamlessly.',
        },
        {
            processHeading: 'Support and Improvement',
            processDescription: 'We provide continuous support, evaluate results, and make updates to keep your solution optimized.',
        },
    ]

    return (
        <div className="vcamp-feature-section-thirteen mb-150 lg-mb-100">
            <div className="container">
                <div className="row">
                    <div className="row align-items-center mb-80 lg-mb-40">
                        <div className="col-md-12 text-center">
                            <div className="title-style-nine">
                                <h2 className="title">Our Process.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-xxl-5">
                        {processSteps.map((process, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card-style-twelve text-center">
                                    <div className="num">0{index + 1}</div>
                                    <h4>{process.processHeading}</h4>
                                    <p>{process.processDescription}</p>
                                </div>{" "}
                                {/* /.card-style-twelve */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}