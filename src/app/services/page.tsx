import CouponCarousel from "@/component/CouponCarousel";
import FeaturesComponent from "@/component/FeaturesComponent";
import Footer from "@/component/Footer";
import LaundryService from "@/component/LaundryService";
import Navbar from "@/component/NavBar";
import ServiceBanner from "@/component/ServiceBanner";
import ServicesGrid from "@/component/ServicesGrid";

export default function Services() {
  return (
    <>
      <ServiceBanner />
      <ServicesGrid />
      <LaundryService />
      <FeaturesComponent />
      <CouponCarousel />
    </>
  );
}
