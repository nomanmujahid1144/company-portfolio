import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { Counter } from "../counter/Counter"

export const CompanyDetail = () => {

    return(
        <>
			<InsideBanner
				title="Inside Story"
				subtitle="We’re empowering WordPress to do great things together."
			/>
			<div class="main-page-wrapper">
				<div className="vcamp-text-block-five mt-170 lg-mt-120">
					<div className="container">
						<div className="row align-items-center">
						<div className="col-xxl-6 col-xl-7 col-lg-5">
							<div className="text-wrapper">
							<div className="title-style-five">
								<div className="upper-title">About us</div>
								<h2 className="title">We’ve been helping cutomer globally.</h2>
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
									Our founders Dustin Moskovitz and Justin quis Rosenstein met
									while leading Engineering team at Facebook.{" "}
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
									Our founders Dustin Moskovitz and Justin quis Rosenstein met
									while leading Engineering team at Facebook.{" "}
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
									Our founders Dustin Moskovitz and Justin quis Rosenstein met
									while leading Engineering team at Facebook.{" "}
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
								<h2 className="title">Why choose vCamp.</h2>
							</div>
							<p className="text-lg">
								We helping client to create with our talented expert.
							</p>
							</div>{" "}
							{/* /.text-wrapper */}
						</div>
						<div className="col-lg-7">
							<div className="row">
							<div className="col-md-6" data-aos="fade-up">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_46.svg" alt="" />
								</div>
								<h4>Friendly Interface</h4>
								<p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6" data-aos="fade-up">
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_47.svg" alt="" />
								</div>
								<h4>Quality Service</h4>
								<p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_48.svg" alt="" />
								</div>
								<h4>Great Pricing</h4>
								<p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
								</div>{" "}
								{/* /.card-style-six */}
							</div>
							<div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
								<div className="card-style-six">
								<div className="icon d-flex align-items-end">
									<img src="images/icon/icon_49.svg" alt="" />
								</div>
								<h4>100% Trusted</h4>
								<p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
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