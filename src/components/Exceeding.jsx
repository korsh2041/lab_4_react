import exceedingData from "../mockData/exceedingData";

const Exceeding = () => {
  const { ctaLink1, header, description, ctaLink2, image } = exceedingData;

  return (
    <div className="exceeding_expectations__content">
      <div className="exceeding_expectations__left">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="exceeding_expectations__right">
        <a href="#" className="exceeding__cta_link1">{ctaLink1}</a>
        <h2 className="exceeding__header">{header}</h2>
        <p className="exceeding__description">
          {description}
        </p>
        <a href="#" className="exceeding__cta_link2">{ctaLink2}</a>
      </div>
    </div>
  );
};

export default Exceeding;