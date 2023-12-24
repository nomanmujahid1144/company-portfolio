import React from 'react';
import proj001 from '../../../../assets/portfolios/Projlogo_001.png';
import portfolioImage_02 from '../../../../assets/portfolios/Projlogo_002.png';
import portfolioImage_03 from '../../../../assets/portfolios/Projlogo_003.png';
import portfolioImage_04 from '../../../../assets/portfolios/Projlogo_004.png';
import portfolioImage_05 from '../../../../assets/portfolios/Projlogo_005.png';
import portfolioImage_06 from '../../../../assets/portfolios/Projlogo_006.png';
import portfolioImage_07 from '../../../../assets/portfolios/Projlogo_007.png';

import webDevelopment from '../../../../assets/services/web-development.png';
import appDevelopment from '../../../../assets/services/app-development.png';

import amazonImg from '../../../../assets/dev-stack/amazon.png';
import bootstrapImg from '../../../../assets/dev-stack/bootstrap.png';
import flutterImg from '../../../../assets/dev-stack/flutter.png';
import javascriptImg from '../../../../assets/dev-stack/javascript.png';
import reactImg from '../../../../assets/dev-stack/react.png';
import vultrImg from '../../../../assets/dev-stack/vultr.svg';

export const PortfoiloDetails = () => {

	const portfolios = [
		{
			name: 'Deliverez',
			portfolioImage: proj001,
			portfolioLink: 'deliverez.pk',
			backgroundColor: '#DFF2E9',
			stack: [
				{
					stackName: 'Web Development',
					icon: webDevelopment,
				}
			],
			devs: [
				{
					language: 'BootStrap',
					icon: bootstrapImg,
				},
				{
					language: 'JavaScript',
					icon: javascriptImg,
				},
				{
					language: 'AWS',
					icon: amazonImg,
				},
			],
			description: 'DeliverEz is a logistics platform that provides on-demand delivery services for both individuals and businesses. The platform allows customers to schedule and book their service online.',
		},
		{
			name: 'VIP Influencers',
			portfolioImage: portfolioImage_02,
			portfolioLink: 'vipinfluencers.com',
			backgroundColor: '#E9F4FF',
			stack: [
				{
					stackName: 'Web Development',
					icon: webDevelopment,
				}
			],
			devs: [
				{
					language: 'React',
					icon: reactImg,
				},
				{
					language: 'JavaScript',
					icon: javascriptImg,
				},
				{
					language: 'AWS',
					icon: amazonImg,
				},
			],
			description: 'VIP Influencers is a platform that connects brands with influencers. The platform provides a marketplace for brands to find and hire influencers for their marketing campaigns.',
		},
		{
			name: 'BUDCARS',
			portfolioImage: portfolioImage_03,
			portfolioLink: '',
			backgroundColor: '#F6EAE0',
			stack: [
				{
					stackName: 'Web Development',
					icon: webDevelopment,
				},
				{
					stackName: 'App Development',
					icon: appDevelopment,
				},
			],
			devs: [
				{
					language: 'React',
					icon: reactImg,
				},
				{
					language: 'JavaScript',
					icon: javascriptImg,
				},
				{
					language: 'AWS',
					icon: amazonImg,
				},
			],
			description:  'Budcars a cannabis experience with our cutting-edge e-commerce platform, offering a discreet and secure environment to buy and sell premium-quality cannabis products',
		},
		{
			name: 'The Student HelpLine',
			portfolioImage: portfolioImage_04,
			portfolioLink: 'vipinfluencers.com',
			backgroundColor: '#F2F1FF',
			stack: [
				{
					stackName: 'Web Development',
					icon: webDevelopment,
				}
			],
			devs: [
				{
					language: 'React',
					icon: reactImg,
				},
				{
					language: 'JavaScript',
					icon: javascriptImg,
				},
				{
					language: 'Vultr',
					icon: vultrImg,
				},
			],
			description: 'Student Helpline a dedicated web platform connecting students to a world of scholarship opportunities. Streamlined search, up-to-date listings, and expert guidance for a successful educational journey.',
		},
		{
			name: 'Hennies',
			portfolioImage: portfolioImage_05,
			portfolioLink: '',
			backgroundColor: '#DFF2E9',
			stack: [
				{
					stackName: 'App Development',
					icon: appDevelopment,
				},
			],
			devs: [
				{
					language: 'Flutter',
					icon: flutterImg,
				},
			],
			description: 'Hennies a website platform for delicious meals or discover, create, and enjoy a variety of culinary delights tailored to your taste on this Platform.',
		},
		{
			name: 'BOT Bechmark',
			portfolioImage: portfolioImage_06,
			portfolioLink: '',
			backgroundColor: '#E9F4FF',
			stack: [
				{
					stackName: 'Web Development',
					icon: webDevelopment,
				}
			],
			devs: [
				{
					language: 'React',
					icon: reactImg,
				},
				{
					language: 'JavaScript',
					icon: javascriptImg,
				},
				{
					language: 'AWS',
					icon: amazonImg,
				},
			],
			description: 'Bot Bench a website for comprehensive software review hub, providing insightful analysis and user feedback for informed decision-making.',
		},
		{
			name: 'SOFTCITY GROUP',
			portfolioImage: portfolioImage_07,
			portfolioLink: 'vipinfluencers.com',
			backgroundColor: '#F6EAE0',
			stack: [
				{
					stackName: 'Web Development',
					icon: webDevelopment,
				}
			],
			devs: [
				{
					language: 'React',
					icon: reactImg,
				},
				{
					language: 'JavaScript',
					icon: javascriptImg,
				},
				{
					language: 'AWS',
					icon: amazonImg,
				},
			],
			description: 'SoftCity a website for corporate efficiency with seamless role management. Elevate collaboration, assign responsibilities, and optimize workflow for enhanced organizational success.',
		},
	];

	return (
		<>
			{portfolios.map((portfolio, index) => (
				<div key={index} className="mix">
					<div
						className={`case-block-four position-relative ${index % 2 === 0 ? 'even-item' : 'odd-item'}`}
						style={{ background: portfolio.backgroundColor }}
					>
						<div className="container">
							<div className="row">
								<div className={`col-xl-6 col-md-8 ${index % 2 !== 0 ? 'ms-auto' : ''}`}>
									<div className="text-wrapper">
										<h4 >{portfolio.name}</h4>
										<div>{portfolio.description}</div>
										<div className="info-meta">
											{portfolio.stack.map((stack) => (
												<div className='d-flex align-items-center gap-3  mt-3'>
													<div className="portfolio-icon my-1 d-flex align-items-center justify-content-center">
															<img src={stack.icon} alt="" />
													</div>
													<h4 className='name'>{stack.stackName}</h4>
												</div>
											))}
										</div>
										<div className="info-meta">
											<div className='d-flex align-items-center gap-5 '>
												{portfolio.devs.map((stack) => (
													<div className='align-items-center'>
														<div className="portfolio-icon d-flex p-2 my-2 mt-3">
																<img src={stack.icon} alt="" />
														</div>
														<h4 className='name'>{stack.language}</h4>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* You may need to replace this placeholder with an actual image source */}
						<img
							src={portfolio.portfolioImage}
							alt=""
							style={{
								width: "350px",
								height: "auto",
								marginBottom: "20px",
								marginRight: "30px",
								marginLeft: "30px"
							}}
							className={index % 2 === 0 ? 'screen screen-right' : 'screen screen-left'}

						/>
					</div>
				</div>
			))}
		</>
	);
};
