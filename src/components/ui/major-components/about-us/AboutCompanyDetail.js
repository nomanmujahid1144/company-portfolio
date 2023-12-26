import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { Counter } from "../counter/Counter"

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
									BusNet is a pioneering software company, crafting cutting-edge e-commerce platforms and web applications globally. With a commitment to innovation, security, and user-centric solutions, we empower businesses and individuals to thrive in the ever-evolving digital landscape.
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
				<div className="vcamp-feature-section-six mt-150 lg-mt-70">
					<div className="container">
						<div className="row gx-xl-5">
						<div className="col-lg-5">
							<div className="text-wrapper pt-15 md-pb-50">
							<div className="title-style-five">
								<div className="upper-title">Why us?</div>
								<h2 className="title">Why choose BUSNET.</h2>
							</div>
							<p className="text-lg">
							"Choose BusNet for unparalleled expertise in developing innovative software solutions. With a commitment to excellence, security, and customer satisfaction, we deliver tailored products that empower businesses and individuals to navigate and succeed in the digital age."
							</p>
							</div>{" "}
							{/* /.text-wrapper */}
						</div>
						<div className="col-lg-7">
							<div className="row">
							<div className="col-md-6">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_46.svg" alt="" />
								</div>
								<h4>Friendly Interface</h4>
								<p>Intuitive, User-Friendly, Seamless</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_47.svg" alt="" />
								</div>
								<h4>Quality Service</h4>
								<p>Reliable, Responsive, Exceptional</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_48.svg" alt="" />
								</div>
								<h4>Great Pricing</h4>
								<p>Affordable, Competitive, Value-driven.</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6" >
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_49.svg" alt="" />
								</div>
								<h4>100% Trusted</h4>
								<p>Unwavering Trustworthiness.</p>
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