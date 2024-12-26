import { ServiceFeature } from "./ServiceFeature"

export const ServiceDetail = ({ descriptions, features, featureImage }) => {
    return (
        <div className="blog-details-one mt-80 lg-mt-60 lg-mb-70">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-12">
                        <div className="blog-meta-wrapper pe-xxl-5">
                            <article className="blog-details-content">
                                <h4>
                                    Description
                                </h4>
                                {descriptions.map((description, index) => (
                                    <p key={index}>{description}</p>
                                ))}
                            </article>
                        </div>
                        <ServiceFeature 
                            features={features}
                            featureImage={featureImage}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}