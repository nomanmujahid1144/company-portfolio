import { Link } from 'react-router-dom';
import icon_28 from '../../../../assets/icons/icon_28.svg';

export const SingleStory = ({ portfolioImage, portfolioLink }) => {
    return (
        <div className="item">
            <div className="block-wrapper">
                <img src={portfolioImage} alt="" className="screen" />
                <div className="overlay-content d-flex align-items-end">
                <Link to={portfolioLink} className="d-flex justify-content-between align-items-center text-sm" >
                    <span>{portfolioLink}</span>
                    <img src={icon_28} alt="" />
                </Link>
                </div>
            </div>
        </div>
    )
}