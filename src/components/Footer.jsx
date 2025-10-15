import footerData from "../mockData/footerData";

export const LinkGroup = ({ group }) => {
  return (
    <div className="link_group">
      <h4>{group.title}</h4>
      {group.items.map((item, index) => (
        <a key={index} href={item.href}>{item.title}</a>
      ))}
    </div>
  );
};

const Footer = () => {
  const { logo, address, copyright, links, bottomText } = footerData;

  return (
    <>
      <div className="footer_content">
        <div className="footer_logo">
          <h3 className="footer_title">
            <img className="link__name" src={logo.src} alt={logo.alt} />
          </h3>
          <p className="footer_address">{address}</p>
          <p className="footer_addresss">{copyright}</p>
        </div>
        <div className="footer_links">
          <LinkGroup group={links.linksGroup} />
          <LinkGroup group={links.companyGroup} />
          <LinkGroup group={links.contactsGroup} />
        </div>
      </div>
      <div className="footer_bottom">
        <p>{bottomText}</p>
      </div>
    </>
  );
};

export default Footer;