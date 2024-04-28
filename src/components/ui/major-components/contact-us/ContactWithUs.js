import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import InputField from '../../minor-components/fields/InputField';
import TextField from '../../minor-components/fields/TextField';
import { sendContactUsMessage } from "../../../../redux/Actions/UserActions"
import { toast } from 'react-toastify';


export const ContactIndex = () => {

	
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

	const [credentials, setcredentials] = useState({
        fullName: "",
        companyName: "",
        email: "",
        message: "",
    });
	

	const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, companyName, email,  message } = credentials;
        dispatch(sendContactUsMessage(fullName, companyName, value, email, message, navigate, toast, setcredentials, setValue));
    };


	const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };


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
								<form onSubmit={handleSubmit}>
										<div className="messages" />
										<div className="row controls">
										<div className="col-12">
											<div className="input-group-meta form-group mb-25">
													<InputField
													label="Name*"
														type="text"
														required={true}
														id="fullName"
														placeholder=""
														value={credentials?.fullName}
														onChange={onChange}
													/>
													<div className="help-block with-errors" />
													</div>
											</div>
											<div className="col-12">
											<div className="input-group-meta form-group mb-25">
												<InputField
													label="Company Name*"
													type="text"
													required={true}
													id="companyName"
													placeholder=""
													value={credentials?.companyName}
													onChange={onChange}
												/>
												<div className="help-block with-errors" />
												</div>
										</div>
										<div className="col-12">
											<div className="input-group-meta form-group mb-25">
												<label>Phone Number*</label>
												<PhoneInput
													isValidPhoneNumber={true}
													limitMaxLength={true}
													className="form-control border border-gray-300 text-sm"
													style={{background: '#F2F2F2'}}
													international
													initialValueFormat="international"
													countryCallingCodeEditable={false} 
													defaultCountry="GB"
													name="phoneNumber"
													placeholder="Enter phone number"
													value={value}
													onChange={setValue}
													displayInitialValueAsLocalNumber
												/>
												<div className="help-block with-errors" />
												</div>
										</div>
										<div className="col-12">
											<div className="input-group-meta form-group mb-25">
												<InputField
													label="Email*"
													type="email"
													required={true}
													id="email"
													placeholder=""
													value={credentials?.email}
													onChange={onChange}
												/>
											<div className="help-block with-errors" />
											</div>
										</div>
										<div className="col-12">
											<div className="input-group-meta form-group mb-35">
											<TextField
												label="Your message*"
												type="text"
												required={true}
												id="message"
												placeholder=""
												value={credentials?.message}
												onChange={onChange}
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
									<p >
										First Floor, 85 Great Portland St, <br />
										London,  United Kingdom
									</p> 
								</div>
							</div>
							<div className="address-block-three d-flex mb-80 lg-mb-40">
								<div className="icon">
									<img src="images/icon/icon_18.svg" alt="" />
								</div>
								<div className="text">
									<h5 className="title">Hit us up!</h5>
									<p>
									Get 24/7 help from our pros <br />
									<a href="tel:+447456659691" className="call">
										(+44) 7456 659 691
									</a>
									<br />
									</p>
								</div>
								</div>
							<div className="address-block-three d-flex">
								<div className="icon">
									<img src="images/icon/icon_19.svg" alt="" />
								</div>
								<div className="text">
									<h5 className="title">Discover solutions with our sales experts.</h5>
									<p>
										<a href="mailto:sales@busnet.org" className="webaddress">
											sales@busnet.org
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