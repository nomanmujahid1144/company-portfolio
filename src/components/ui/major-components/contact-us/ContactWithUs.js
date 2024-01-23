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
					</div>
				</div>
				<div className="col-lg-5 col-md-6 ms-auto">
					<div className="address-block-three d-flex mb-80 lg-mb-40">
					<div className="icon">
						<img src="images/icon/icon_17.svg" alt="" />
					</div>
					<div className="text">
						<h5 className="title">Our Address</h5>
						<p>
						85 , Great Portland Street London <br />
						
						</p>
					</div>
					</div>
					<div className="address-block-three d-flex mb-80 lg-mb-40">
					<div className="icon">
						<img src="images/icon/icon_18.svg" alt="" />
					</div>
					<div className="text">
						<h5 className="title">Contact Info</h5>
						<p>
						Open a chat or give us call at <br />
						<a href="tel:923037190400" className="call">
							+44-7456-659691
						</a>
						
						</p>
					</div>
					</div>
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
					</div>
				</div>
				</div>
			</div>
		</div>
        </>
    )
}