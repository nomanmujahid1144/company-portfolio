import { PortfolioIndex } from "./company-portfoilo/CompanyPortfoilo"
import InsideBanner from "./company-portfoilo/InsidePageBanner"

export const Portfolio = () => {
    return(
        <>
        <InsideBanner title="Projects We’ve Delivered" subtitle="In two prolific years, we've developed cutting-edge online and mobile applications across advertising, healthcare, finance, and beyond. Explore our portfolio for a showcase of our diverse and high-quality solutions." />
        <PortfolioIndex/>
        </>
    )
}