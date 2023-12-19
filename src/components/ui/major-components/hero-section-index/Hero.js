import screen2 from '../../../../assets/index-images/screen2.png';
import screen3 from '../../../../assets/index-images/screen3.png';
import screen4 from '../../../../assets/index-images/screen4.png';
import screen5 from '../../../../assets/index-images/screen5.png';
import screen6 from '../../../../assets/index-images/screen6.png';
import screen7 from '../../../../assets/index-images/screen7.png';
import screen8 from '../../../../assets/index-images/screen8.png';

export const HeroIndex = () => {
    return (
        <div className="hero-banner-two">
            <div className="container h-100">
                <div className="main-content h-100">
                <div className="text-wrapper">
                    <h1 className="hero-heading font-recoleta">
                    <span>Expert</span> care your website.
                    </h1>
                    <p className="hero-sub-heading text-lg">
                    We helpingclient to create WordPress websites with our talented
                    expert.
                    </p>
                    <ul className="button-group d-sm-flex align-items-center style-none">
                    <li>
                        <a href="contactV2.html" className="mt-15 demo-button tran3s">
                        Try a free demo
                        </a>
                    </li>
                    <li>
                        <a
                        href="contactV2.html"
                        className="mt-15 callback-button d-flex align-items-center"
                        >
                        <span>Request a Callback</span>{" "}
                        <img src="images/icon/icon_23.svg" alt="" className="ms-3" />
                        </a>
                    </li>
                    </ul>
                </div>{" "}
                {/* /.text-wrapper */}
                <div className="row gx-md-5 align-items-end h-100">
                    <div className="col-3">
                    <img src={screen2} alt="" />
                    </div>
                    <div className="col-3">
                    <img src={screen3} alt="" className="mb-35" />
                    <img src={screen4} alt="" />
                    </div>
                    <div className="col-3">
                    <img src={screen5} alt="" className="mb-35" />
                    <img src={screen6} alt="" />
                    </div>
                    <div className="col-3">
                    <img src={screen7} alt="" className="mb-35" />
                    <img src={screen8} alt="" />
                    </div>
                </div>
                <img
                    src="images/shape/shape_03.svg"
                    alt=""
                    className="shapes shape-one"
                />
                </div>{" "}
                {/* /.main-content */}
            </div>
    </div>

    )
}