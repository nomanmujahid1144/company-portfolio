import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { Counter } from "../counter/Counter";
import customizedSolution from '../../../../assets/icons/customized_solution.svg';
import customerSatisfaction from '../../../../assets/icons/Customer_Satisfaction.svg';
import strategyPlanning from '../../../../assets/icons/strategy-planning.svg';
import timelyDelivered from '../../../../assets/icons/timely_delivered.svg';
import { Link } from 'react-router-dom';

export const CompanyDetail = () => {

    return(
        <>
			<InsideBanner
				title="Inside Story"
				subtitle="We’re Navigating Tomorrow's Software Landscape Today globally."
			/>
			<div class="main-page-wrapper">
				<div className="vcamp-text-block-five mt-170 lg-mt-120">
					<div className="container">
						<div className="row align-items-center">
						<div className="col-xxl-6 col-xl-7 col-lg-5">
							<div className="text-wrapper">
							<div className="title-style-five">
								<div className="upper-title">About us</div>
								<h2 className="title">We’ve been helping people by Connecting Businesses on the Internet.</h2>
							</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6 ms-auto">
							<div
							className="accordion accordion-style-one md-mt-40"
							id="accordionOne"
							>
							<div className="accordion-item">
								<div className="accordion-header" id="headingOne">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									Who we are?
								</button>
								</div>
								<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionOne"
								>
								<div className="accordion-body">
									<p>
									BUSNET is a pioneering software company, crafting cutting-edge e-commerce platforms and web applications globally. With a commitment to innovation, security, and user-centric solutions, we empower businesses and individuals to thrive in the ever-evolving digital landscape.
									</p>
								</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-header" id="headingTwo">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									What’s our goal?
								</button>
								</div>
								<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionOne"
								>
								<div className="accordion-body">
									<p>
									Our goal is  committed to becoming a leading force in the software industry, creating solutions that not only meet the needs of today but also anticipate and address the challenges of tomorrow.
									</p>
								</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-header" id="headingThree">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Our vision
								</button>
								</div>
								<div
								id="collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionOne"
								>
								<div className="accordion-body">
									<p>
									Our vision is to empower individuals and businesses globally, fostering a world where technology enhances, simplifies, and transforms the way people connect, work, and thrive
									</p>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<Counter />
				<div className="vcamp-feature-section-six overflow-hidden mt-150 lg-mt-70">
					<div className="container">
						<div className="row gx-xl-5">
						<div className="col-lg-5">
							<div className="text-wrapper pt-15 md-pb-50">
							<div className="title-style-five">
								<div className="upper-title">Why us?</div>
								<h2 className="title">Why choose BUSNET.</h2>
							</div>
							<p className="text-lg">
								Unlock Your Business Potential with Our Custom Solutions.
                                Experience Innovation and Exceptional Digital Solutions.
                                Connect with Us Today.
							</p>
							</div>{" "}
							{/* /.text-wrapper */}
						</div>
						<div className="col-lg-7">
							<div className="row">
							<div className="col-md-6">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src={strategyPlanning} alt="" />
								</div>
								<h4>Strategic Planning</h4>
								<p>Meticulously crafted strategies tailored to your goals.</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src={customizedSolution} alt="" />
								</div>
								<h4>Customized Solutions</h4>
								<p>Tailored solutions for unique business needs.</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src={timelyDelivered} alt="" />
								</div>
								<h4>Timely Delivery</h4>
								<p>Prompt delivery without compromising quality.</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6" >
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
					<img src="images/shape/shape_25.svg" alt="" className="shapes shape-one" />
					<img src="images/shape/shape_26.svg" alt="" className="shapes shape-two" />
				</div>

			</div>	
		</>

    )
}