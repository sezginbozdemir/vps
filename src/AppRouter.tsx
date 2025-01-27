import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import Footer from "./shared/components/footer/Footer";
import Header from "./shared/components/header/Header";
import Vps from "./solutions/vps/Vps";
import AdditionalSpace from "./solutions/additional-space/AdditionalSpace";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vps" element={<Vps />} />
        <Route path="/additional-space" element={<AdditionalSpace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
