import ctaData from "../mockData/ctaData";

const CTA = () => {
  const { badge, title, buttonText } = ctaData;

  return (
    <div className="cta_container">
      <div className="cta_content">
        <div className="cta_text">
          <p className="cta_badge">{badge}</p>
          <h2 className="cta_title" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <div className="cta_button_container">
          <button className="cta_button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;