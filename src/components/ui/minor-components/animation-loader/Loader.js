import busnetLimitedIcon from '../../../../assets/icons/busnet_Icon.svg';


export const Loader = ({children}) => {
    return (
        <>
            <section>
                <div id="preloader">
                    <div id="ctn-preloader" className="ctn-preloader">
                        <div className="animation-preloader">
                            <div className="icon">
                                <img src={busnetLimitedIcon} alt="" className="m-auto d-block" />{" "}
                                <span />
                            </div>
                            <div className="txt-loading mt-4">
                                <span data-text-preloader="B" className="letters-loading">
                                    B
                                </span>
                                <span data-text-preloader="U" className="letters-loading">
                                    U
                                </span>
                                <span data-text-preloader="S" className="letters-loading">
                                    S
                                </span>
                                <span data-text-preloader="N" className="letters-loading">
                                    N
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="T" className="letters-loading">
                                    T
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </>
    )
}