import InsideBanner from "../company-portfoilo/InsidePageBanner"
import { Services } from "./Services"

export const ServicesIndex = () => {
    return (
        <div className="mt-100">
            <InsideBanner
				title="Services"
				subtitle="Explore our comprehensive range of services designed to drive innovation and deliver tailored software solutions for a rapidly evolving global landscape."
			/>
            <Services />
        </div>
    )
}