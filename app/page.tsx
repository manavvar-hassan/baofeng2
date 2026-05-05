import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import HologramIcons from "@/components/HologramIcons";
import InstaCard from "@/components/InstaCard";
import LicenseRadios from "@/components/LicenseRadios";
import Loader from "@/components/Loader/Loader";
import PromoSection from "@/components/PromoSection";
import ThreeD from "@/components/ThreeD/ThreeD";
import Viewer360 from "@/components/Viewer360";
import Banner1 from "@/section/Banner/Banner1";
import Banner2 from "@/section/Banner/Banner2";
import Banner3 from "@/section/Banner/Banner3";
import BottomBanner from "@/section/Banner/BottomBanner";
import DualBanner from "@/section/Banner/DualBanner";
import DealSection from "@/section/DealSection";
import FeatureBar from "@/section/FeatureBar";
import FeaturedProducts from "@/section/FeaturedProducts";
import Footer from "@/section/Footer";
import HeroBottom from "@/section/HeroBottom";
import HeroSlider from "@/section/HeroTop";
import InstagramScroll from "@/section/InstagramScroll";
import InstagramSection from "@/section/InstagramSection";
import LicenceFreeSection from "@/section/LicenceFreeSection";
import LicenceRadiosSection from "@/section/LicenceRadiosSection";
import LicenseFree from "@/section/LicenseFree2";
import Navbar from "@/section/Navbar";
import NewArrivalsSection from "@/section/NewArrivalsSection";
import NewsSection from "@/section/NewsSection";
import TrendingSearch from "@/section/TrendingSearch";
export const metadata = {
  title: "Baofeng3",
  description: "Home",
};

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      <Hero />
      <Navbar />
      <CategorySlider />
      <PromoSection />
      <DealSection />
      <LicenceFreeSection />
      <FeaturedProducts />
      <LicenseFree />
      <Banner2 />
      <LicenseRadios />
      <InstagramScroll />
      <NewsSection />
      <FeatureBar />
      <Footer />
      {/*<Navbar />
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
        <Footer /> */}
      {/* <Viewer360/> */}
    </>
  );
}
