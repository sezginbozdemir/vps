import { useEffect } from "react";
import Info from "./components/info/Info";
import Intro from "./components/intro/Intro";

const Vps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Intro />
      <Info />
    </>
  );
};
export default Vps;
