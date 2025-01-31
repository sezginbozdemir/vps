import Info from "./components/info/Info";
import Intro from "./components/intro/Intro";
import Pricing from "../shared/components/pricing/Pricing";
import TextBlock from "./components/text-block/TextBlock";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Intro />
      <Pricing />
      <Info />
      <TextBlock />
    </>
  );
};

export default HomePage;
