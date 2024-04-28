export const ContactBanner = () => {
    return (
        <div className="address-section-two">
            <div className="container">
                <div className="inner-content">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="address-block-two d-flex border-right">
                                <img src="images/icon/icon_34.svg" alt="" className="icon" />
                                <div className="text-meta">
                                    <h4 className="title">Our Address</h4>
                                    <p>
                                        First Floor, 85 Great Portland St, <br />
										London,  United Kingdom
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="address-block-two d-flex">
                                <img src="images/icon/icon_35.svg" alt="" className="icon" />
                                <div className="text-meta">
                                    <h4 className="title">Contact Info</h4>
                                    <p>
                                        Get 24/7 help from our pros <br />
                                        <a href="tel:+447456659691" className="call">
                                            (+44) 7456 659 691
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}