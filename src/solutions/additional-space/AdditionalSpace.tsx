import { useEffect, useRef } from "react";
import Info from "./components/info/Info";
import Intro from "./components/intro/Intro";
import InfoCard from "./components/info/InfoCard";

const AdditionalSpace = () => {
  const pricingTableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Intro scrollToRef={pricingTableRef} />
      <InfoCard />
      <div style={{ width: "100%" }} ref={pricingTableRef}>
        <Info />
      </div>
    </>
  );
};
export default AdditionalSpace;
