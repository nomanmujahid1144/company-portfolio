export const SingleStory = ({portfolioImage, portfolioLink}) => {
    return (
        <div className="item">
            <div className="block-wrapper">
                <img src={portfolioImage} alt="" className="screen" />
                <div className="overlay-content d-flex align-items-end">
                <a
                    href={portfolioLink}
                    className="d-flex justify-content-between align-items-center text-sm"
                    >
                    <span>{portfolioLink}</span>
                    <img src="images/icon/icon_28.svg" alt="" />
                </a>
                </div>{" "}
            </div>{" "}
        </div>
    )
}