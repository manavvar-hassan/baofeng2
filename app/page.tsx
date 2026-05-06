import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import LicenseRadios from "@/components/LicenseRadios";
import PromoSection from "@/components/PromoSection";
import Banner2 from "@/section/Banner/Banner2";
import DealSection from "@/section/DealSection";
import FeatureBar from "@/section/FeatureBar";
import FeaturedProducts from "@/section/FeaturedProducts";
import Footer from "@/section/Footer";
import InstagramScroll from "@/section/InstagramScroll";
import LicenceFreeSection from "@/section/LicenceFreeSection";
import LicenseFree from "@/section/LicenseFree2";
import Navbar from "@/section/Navbar";
import NewsSection from "@/section/NewsSection";
export const metadata = {
  title: "Baofeng3",
  description: "Home",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
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
    </>
  );
}
