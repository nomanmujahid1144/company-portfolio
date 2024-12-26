export const ServiceFeature = ({ features, featureImage }) => {

    // Split features into two groups for the two columns
    const firstColumn = features?.slice(0, 3);
    const secondColumn = features?.slice(3);

    return (
        <div className="vcamp-text-block-thirteen pt-150 mb-130 lg-pt-100 lg-mb-80">
            <div className="container">
                <div className="img-media mb-40 lg-mb-20">
                    <img src={featureImage} alt="" className="w-100" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="ui-list-item-three style-none">
                            {firstColumn.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="ui-list-item-three style-none">
                            {secondColumn.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}