import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import Solutions from "./solutions/Solutions";
import Footer from "./shared/components/footer/Footer";
import Header from "./shared/components/header/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
