import { useRef } from "react";
import Pricing from "../shared/components/pricing/Pricing";
import Intro from "./components/intro/Intro";
import PricingTable from "./components/pricing-table/PricingTable";

const Prices = () => {
  const pricingTableRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Intro scrollToRef={pricingTableRef} />
      <Pricing />
      <div style={{ alignSelf: "center" }} ref={pricingTableRef}>
        <PricingTable />
      </div>
    </>
  );
};

export default Prices;
