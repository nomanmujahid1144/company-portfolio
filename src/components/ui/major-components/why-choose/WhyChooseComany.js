import customizedSolution from '../../../../assets/icons/customized_solution.svg';
import customerSatisfaction from '../../../../assets/icons/Customer_Satisfaction.svg';
import strategyPlanning from '../../../../assets/icons/strategy-planning.svg';
import timelyDelivered from '../../../../assets/icons/timely_delivered.svg';
import { Link } from 'react-router-dom';

export const WhyChooseCompany = () => {
    return (
        <div className="vcamp-feature-section-four mt-110 lg-mt-110 md-mt-110">
            <img src="images/shape/shape_05.svg" alt="" className="shapes shape-one" />
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="text-wrapper mb-130 lg-mb-70">
                    <div className="title-style-one">
                        <h2 className="title">
                        Why <span>Choose</span> BUSNET.
                        </h2>
                    </div>
                    <p className="meta-info-text text-lg">
                                    Unlock Your Business Potential with Our Custom Solutions.
                                    Experience Innovation and Exceptional Digital Solutions.
                                    Connect with Us Today.
                    </p>
                    <Link to="/contact-us" className="theme-btn-three">
                        Connect with Us <i className="fas fa-angle-right" />
                    </Link>
                    </div>{" "}
                </div>
                <div className="col-lg-6 ms-auto">
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="card-style-four mb-130 lg-mb-70">
                        <div className="icon d-flex align-items-end">
                            <img src={strategyPlanning} alt="" className="tran3s" />
                        </div>
                        <h4 className="title">Strategic Planning</h4>
                        <p>Meticulously crafted strategies tailored to your goals.</p>
                        </div>{" "}
                        {/* /.card-style-four */}
                    </div>
                    <div className="col-sm-6" >
                        <div className="card-style-four mb-130 lg-mb-70">
                        <div className="icon d-flex align-items-end">
                            <img src={customizedSolution} alt="" className="tran3s" />
                        </div>
                        <h4 className="title">Customized Solutions</h4>
                        <p>Tailored solutions for unique business needs.</p>
                        </div>{" "}
                        {/* /.card-style-four */}
                    </div>
                    <div className="col-sm-6" >
                        <div className="card-style-four mb-130 lg-mb-70">
                        <div className="icon d-flex align-items-end">
                            <img src={timelyDelivered} alt="" className="tran3s" />
                        </div>
                        <h4 className="title">Timely Delivery</h4>
                        <p>Prompt delivery without compromising quality.</p>
                        </div>{" "}
                        {/* /.card-style-four */}
                    </div>
                    <div className="col-sm-6" >
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src={customerSatisfaction} alt="" />
								</div>
								<h4>Client Satisfaction</h4>
								<p>Your success is our priority.</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}