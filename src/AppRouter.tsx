import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import Footer from "./shared/components/footer/Footer";
import Header from "./shared/components/header/Header";
import Vps from "./solutions/vps/Vps";
import AdditionalSpace from "./solutions/additional-space/AdditionalSpace";
import Prices from "./prices/Prices";
import Contact from "./contact/Contact";
import Terms from "./terms/Terms";
import Confidentiality from "./confidentiality/Confidentiality";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vps" element={<Vps />} />
        <Route path="/additional-space" element={<AdditionalSpace />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/confidentiality" element={<Confidentiality />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
