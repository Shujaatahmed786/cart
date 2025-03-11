import Navbar from "../navbar/navbar";
import HeroSection from "./heroSection";
import Pricing from "../../components/pricing";

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Pricing />
    </div>
  );
};

export default home;
