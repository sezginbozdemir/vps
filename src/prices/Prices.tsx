import { useEffect, useRef } from "react";
import Pricing from "../shared/components/pricing/Pricing";
import Intro from "./components/intro/Intro";
import PricingTable from "./components/pricing-table/PricingTable";

const Prices = () => {
  const pricingTableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Intro scrollToRef={pricingTableRef} />
      <Pricing />
      <div style={{ width: "100%" }} ref={pricingTableRef}>
        <PricingTable />
      </div>
    </>
  );
};

export default Prices;
