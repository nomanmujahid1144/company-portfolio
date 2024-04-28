export const TestimonialCard = ({ personName, review, country }) => {
    const maxCharacters = window.innerWidth >= 768 ? 200 : 90; // Adjust based on screen size
  
    const truncateText = (text, maxCharacters) => {
      return text.length > maxCharacters ? text.slice(0, maxCharacters) + '...' : text;
    };
  
    const truncatedReview = truncateText(review, maxCharacters);
  
    return (
      <div className="item slick-slide slick-cloned">
        <div className="testimonial-block-one">
          <div className="icon d-flex align-items-center justify-content-center">
            <img src="images/icon/icon_15.svg" alt="" />
          </div>
          <blockquote>
            {truncatedReview}
          </blockquote>
          <div className="name">{personName} <span>{country}</span></div>
        </div>
      </div>
    );
  };
  