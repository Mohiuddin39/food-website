import Contract from "./components/Contract";
import Delivery from "./components/Delivery";
import Favorites from "./components/Favorites";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Favorites />
      <Delivery />
      <Contract />
    </>
  );
}
