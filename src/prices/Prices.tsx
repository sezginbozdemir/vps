import Pricing from "../shared/components/pricing/Pricing";
import Intro from "./components/intro/Intro";
import PricingTable from "./components/pricing-table/PricingTable";

const Prices = () => {
  return (
    <>
      <Intro />
      <Pricing />
      <PricingTable />
    </>
  );
};

export default Prices;
