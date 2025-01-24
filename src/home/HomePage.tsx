import FooterMid from "../shared/components/footer/footer-mid/FooterMid";
import FooterTop from "../shared/components/footer/footer-top/FooterTop";
import Info from "./components/info/Info";
import Intro from "./components/intro/Intro";
import Pricing from "./components/pricing/Pricing";
import TextBlock from "./components/text-block/TextBlock";
const HomePage = () => {
  return (
    <>
      <Intro />
      <Pricing />
      <Info />
      <TextBlock />
      <FooterTop />
      <FooterMid />
    </>
  );
};

export default HomePage;
