import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import partner_01 from '../../../../assets/partners/1.png';
import partner_02 from '../../../../assets/partners/2.png';
import partner_03 from '../../../../assets/partners/3.png';
import partner_04 from '../../../../assets/partners/4.png';
import partner_05 from '../../../../assets/partners/5.png';
import partner_06 from '../../../../assets/partners/6.png';
import partner_07 from '../../../../assets/partners/7.png';
import partner_08 from '../../../../assets/partners/8.png';
import { SlickPartnerSlider } from "../../minor-components/slider/SlickSlider";

const partnersLogos = [
    {
        partnerName: "Hennies",
        partnerLogo: partner_01,
    },
    {
        partnerName: "Budcars",
        partnerLogo: partner_02,
    },
    {
        partnerName: "DeliverEz",
        partnerLogo: partner_03,
    },
    {
        partnerName: "Vip Influencer",
        partnerLogo: partner_04,
    },
    {
        partnerName: "Westside",
        partnerLogo: partner_05,
    },
    {
        partnerName: "Softcity",
        partnerLogo: partner_06,
    },
    {
        partnerName: "Slaythebear",
        partnerLogo: partner_07,
    },
    {
        partnerName: "lotus",
        partnerLogo: partner_08,
    },
]

export const OurPartners = () => {
    return (
        <>
            <div className="pt-60 pb-30">
                {/* gradient={true} gradientColor="#FFFBF9" gradientWidth={300} */}
                <Marquee autoFill="true" direction="left" pauseOnClick speed={45} loop={0} >
                    {partnersLogos.map((logo, index) => (
                        <div className="gray-logos d-flex justify-content-center align-items-center px-4">
                            <img
                                key={index}
                                src={logo.partnerLogo}
                                alt={logo.partnerName.toLowerCase() + ' image missing'}
                                className="partner-logo"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    )
}