import React from 'react';
import proj001 from '../../../../assets/portfolios/Projlogo_001.png';
import portfolioImage_02 from '../../../../assets/portfolios/Projlogo_002.png';
import portfolioImage_03 from '../../../../assets/portfolios/Projlogo_003.png';
import portfolioImage_04 from '../../../../assets/portfolios/Projlogo_004.png';
import portfolioImage_05 from '../../../../assets/portfolios/Projlogo_005.png';
import portfolioImage_06 from '../../../../assets/portfolios/Projlogo_006.png';
import portfolioImage_07 from '../../../../assets/portfolios/Projlogo_007.png';
export const PortfoiloDetails = () => {
	const portfolios = [
		{
			portfolioImage: proj001,
			portfolioLink: 'deliverez.pk',
			name: 'Deliverez',
			backgroundColor: '#DFF2E9',
			description: 'DeliverEz is a logistics platform that provides on-demand delivery services for both individuals and businesses. The platform allows customers to schedule and book their service online.',
		},
		{
			portfolioImage: portfolioImage_02,
			portfolioLink: 'vipinfluencers.com',
			name: 'VIP Influencers',
			backgroundColor: '#E9F4FF',
			description: 'VIP Influencers is a platform that connects brands with influencers. The platform provides a marketplace for brands to find and hire influencers for their marketing campaigns.',
		},
		{
			portfolioImage: portfolioImage_03,
			portfolioLink: '',
			name: 'BUDCARS',
			backgroundColor: '#F6EAE0',
			description:  'Budcars a cannabis experience with our cutting-edge e-commerce platform, offering a discreet and secure environment to buy and sell premium-quality cannabis products',
		},
		{
			portfolioImage: portfolioImage_04,
			portfolioLink: 'vipinfluencers.com',
			name: 'The Student HelpLine',
			backgroundColor: '#F2F1FF',
			description: 'Student Helpline a dedicated web platform connecting students to a world of scholarship opportunities. Streamlined search, up-to-date listings, and expert guidance for a successful educational journey.',
		},
		{
			portfolioImage: portfolioImage_05,
			portfolioLink: '',
			name: 'Hennies',
			backgroundColor: '#DFF2E9',
			description: 'Hennies a website platform for delicious meals or discover, create, and enjoy a variety of culinary delights tailored to your taste on this Platform.',
		},
		{
			portfolioImage: portfolioImage_06,
			portfolioLink: '',
			name: 'BOT Bechmark',
			backgroundColor: '#E9F4FF',
			description: 'Bot Bench a website for comprehensive software review hub, providing insightful analysis and user feedback for informed decision-making.',
		},
		{
			portfolioImage: portfolioImage_07,
			portfolioLink: 'vipinfluencers.com',
			name: 'SOFTCITY GROUP',
			backgroundColor: '#F6EAE0',
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

										<div className="name">{portfolio.name}</div>
										<div>{portfolio.description}</div>
										<div className="d-flex align-items-center info-meta">


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
