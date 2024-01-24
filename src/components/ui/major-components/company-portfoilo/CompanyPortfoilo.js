import { PortfoiloDetails } from "./PortfoiloDetails"

export const PortfolioIndex = () => {

	return (
		<>
			<div className="box-layout">
				<div className="case-study-four border-top pt-110">
					<div className="mixitUp-container">
						<PortfoiloDetails/>
					</div>
				</div>
			</div>
			<div className="fancy-banner-three bg-white mt-40 mb-40">
				<div className="inner-content position-relative">
					<div className="container">
						<div className="row">
							<div className="col-xxl-11 m-auto">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-8">
										<h2 className="title font-recoleta text-center text-md-start">
											Have any <span>project</span> in mind?
										</h2>
									</div>
									<div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
										<a
											href="/contact-us"
											className="theme-btn-four ripple-btn sm-mt-30"
										>
											Let’s Discuss
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}