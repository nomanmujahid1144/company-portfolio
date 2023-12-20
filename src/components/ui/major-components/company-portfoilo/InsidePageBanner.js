const InsideBanner = (props) => {
    const { title, subtitle } = props;

    return (
        <div className="inside-hero-one hero-spacing">
            <div className="container">
                <h2 className="page-title font-recoleta">{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default InsideBanner;