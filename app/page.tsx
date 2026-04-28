import HologramIcons from "@/components/HologramIcons";
import InstaCard from "@/components/InstaCard";
import ThreeD from "@/components/ThreeD/ThreeD";
import Banner1 from "@/section/Banner/Banner1";
import Banner2 from "@/section/Banner/Banner2";
import Banner3 from "@/section/Banner/Banner3";
import BottomBanner from "@/section/Banner/BottomBanner";
import DualBanner from "@/section/Banner/DualBanner";
import Footer from "@/section/Footer";
import HeroBottom from "@/section/HeroBottom";
import HeroSlider from "@/section/HeroTop";
import InstagramSection from "@/section/InstagramSection";
import LicenceRadiosSection from "@/section/LicenceRadiosSection";
import Navbar from "@/section/Navbar";
import NewArrivalsSection from "@/section/NewArrivalsSection";
import TrendingSearch from "@/section/TrendingSearch";
export const metadata = {
  title: "Baofeng2",
  description: "Home",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <HeroBottom />
      <Banner1 />
      <NewArrivalsSection />
      <Banner2 />
      <Banner3 />
      <LicenceRadiosSection />
      <DualBanner />
      <InstagramSection />
      <TrendingSearch />
      <BottomBanner />
      <Footer />
    </>
  );
}
