import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
