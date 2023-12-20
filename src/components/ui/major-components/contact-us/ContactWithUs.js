export const ContactIndex = () => {
    return(
        <>
        <div className="inside-hero-one hero-spacing">
			<div className="container">
				<h2 className="page-title font-recoleta">Get in Touch</h2>
				<p>Get our all info and also can message us directly from here</p>
			</div>
		</div>
		<div className="contact-section-six mt-160 mb-60 lg-mt-120">
			<div className="container">
				<div className="row align-items-center">
				<div className="col-md-6">
					<div className="form-style-three ps-0 sm-pb-80">
					<form
						action="inc/contact.php"
						id="contact-form"
						data-toggle="validator"
					>
						<div className="messages" />
						<div className="row controls">
						<div className="col-12">
							<div className="input-group-meta form-group mb-25">
							<label>Name*</label>
							<input
								type="text"
								placeholder=""
								name="name"
								required="required"
								data-error="Name is required."
							/>
							<div className="help-block with-errors" />
							</div>
						</div>
						<div className="col-12">
							<div className="input-group-meta form-group mb-25">
							<label>Email*</label>
							<input
								type="email"
								placeholder=""
								name="email"
								required="required"
								data-error="Valid email is required."
							/>
							<div className="help-block with-errors" />
							</div>
						</div>
						<div className="col-12">
							<div className="input-group-meta form-group mb-25">
							<label>Select Service*</label>
									
								<select
									sx={{marginLeft:"100px"}}
									className="theme-select-menu"
									placeholder="Choose a Service...."
									name="category"
									required="required"
								>
									<option value="">Choose a Service....</option>
									<option value="Digital Marketing">Digital Marketing</option>
									<option value="Website Design">Website Design</option>
									<option value="WordPress">WordPress</option>
									<option value="Web Analytics">Web Analytics</option>
									<option value="Web Programming">Web Programming</option>
									<option value="Infographic Design">
									Infographic Design
									</option>
								</select>
								
												{/* Add React Select Library for this */}
												
								{/* <div className="selectize-control theme-select-menu single">
									<div className="selectize-input items required invalid not-full has-options">
										<input
										type="select-one"
										autoComplete="new-password"
										autofill="no"
										tabIndex=""
										placeholder="Choose a Service...."
										required=""
										style={{ width: "160.312px", opacity: 1, position: "relative", left: 0 }}
										/>
									</div>
									<div
										className="selectize-dropdown single theme-select-menu"
										style={{
										display: "none",
										width: 648,
										top: 60,
										left: 0,
										visibility: "visible"
										}}
									>
										<div className="selectize-dropdown-content" tabIndex={-1}>
										<div className="option" data-selectable="" data-value="Digital Marketing">
											Digital Marketing
										</div>
										<div className="option " data-selectable="" data-value="Website Design">
											Website Design
										</div>
										<div className="option " data-selectable="" data-value="WordPress">
											WordPress
										</div>
										<div className="option " data-selectable="" data-value="Web Analytics">
											Web Analytics
										</div>
										<div className="option " data-selectable="" data-value="Web Programming">
											Web Programming
										</div>
										<div
											className="option "
											data-selectable=""
											data-value="Infographic Design"
										>
											Infographic Design
										</div>
										</div>
									</div>
									</div> */}

								
												

								<div className="help-block with-errors" />
							</div>
						</div>
						<div className="col-12">
							<div className="input-group-meta form-group mb-35">
							<label>Your message*</label>
							<textarea
								placeholder=""
								name="message"
								required="required"
								data-error="Please,leave us a message."
								defaultValue={""}
							/>
							<div className="help-block with-errors" />
							</div>
						</div>
						<div className="col-12">
							<button className="theme-btn-one ripple-btn w-100">
							Send Message
							</button>
						</div>
						</div>
					</form>
					</div>{" "}
					{/* /.form-style-three */}
				</div>
				<div className="col-lg-5 col-md-6 ms-auto">
					<div className="address-block-three d-flex mb-80 lg-mb-40">
					<div className="icon">
						<img src="images/icon/icon_17.svg" alt="" />
					</div>
					<div className="text">
						<h5 className="title">Our Address</h5>
						<p>
						Hassan Street Fasail Town <br />
						Lahore Punjab Pakistan
						</p>
					</div>
					</div>{" "}
					{/* /.address-block-three */}
					<div className="address-block-three d-flex mb-80 lg-mb-40">
					<div className="icon">
						<img src="images/icon/icon_18.svg" alt="" />
					</div>
					<div className="text">
						<h5 className="title">Contact Info</h5>
						<p>
						Open a chat or give us call at <br />
						<a href="tel:310.841.5500" className="call">
							+92-303-7190400
						</a>
						</p>
					</div>
					</div>{" "}
					{/* /.address-block-three */}
					<div className="address-block-three d-flex">
					<div className="icon">
						<img src="images/icon/icon_19.svg" alt="" />
					</div>
					<div className="text">
						<h5 className="title">Live Support</h5>
						<p>
						Urgent go to live chat portal <br />
						<a href="#" className="webaddress">
							www.supportlive.com
						</a>
						</p>
					</div>
					</div>{" "}
					{/* /.address-block-three */}
				</div>
				</div>
			</div>
			{/* <div className="map-area-one mt-150 lg-mt-100">
				<div className="mapouter">
				<div className="gmap_canvas">
					<iframe
					className="gmap_iframe"
					src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
					/>
				</div>
				</div>
			</div> */}
		</div>
        </>
    )
}