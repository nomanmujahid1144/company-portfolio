import icon_98 from '../../../../assets/icons/icon_98.svg';
import icon_99 from '../../../../assets/icons/icon_99.svg';
import icon_100 from '../../../../assets/icons/icon_100.svg';

export const Counter = () => {
    return (
        <div className="counter-section-four pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="counter-block-four mb-45">
                            <div className="d-flex">
                                <div className="icon">
                                <img src={icon_99} alt="" />
                                </div>
                                <div className="text">
                                <div className="main-count font-recoleta">
                                    <span className="counter">100</span>+
                                </div>
                                <p className="theme-mb-0">Successful Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="counter-block-four mb-45">
                            <div className="d-flex">
                                <div className="icon">
                                <img src={icon_100} alt="" />
                                </div>
                                <div className="text">
                                <div className="main-count font-recoleta">
                                    <span className="counter">95</span>%
                                </div>
                                <p className="theme-mb-0">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="counter-block-four mb-45">
                            <div className="d-flex">
                                <div className="icon">
                                <img src={icon_98} alt="" />
                                </div>
                                <div className="text">
                                <div className="main-count font-recoleta">
                                    <span className="counter">70</span>+
                                </div>
                                <p className="theme-mb-0">Positive Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}