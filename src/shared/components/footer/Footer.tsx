import FooterBot from "./footer-bot/FooterBot";
import FooterLinks from "./footer-links/FooterLinks";
import FooterMid from "./footer-mid/FooterMid";
import FooterTop from "./footer-top/FooterTop";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/contact" ? (
        <FooterLinks />
      ) : (
        <>
          <FooterTop />
          <FooterMid />
          <FooterBot />
          <FooterLinks />
        </>
      )}
    </>
  );
};

export default Footer;
