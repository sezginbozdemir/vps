import FooterBot from "./footer-bot/FooterBot";
import FooterLinks from "./footer-links/FooterLinks";
import FooterMid from "./footer-mid/FooterMid";
import FooterTop from "./footer-top/FooterTop";

const Footer = () => {
  return (
    <>
      <FooterTop />
      <FooterMid />
      <FooterBot />
      <FooterLinks />
    </>
  );
};

export default Footer;
