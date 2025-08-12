// import Footer from '@/component/Footer';
import HeroSection from '@/component/HeroSection';
import LaundryExperience from '@/component/LaundryExperience';
import LaundryService from '@/component/LaundryService';
<<<<<<< HEAD
// import Navbar from '@/component/NavBar';
// import NotFound from '@/component/NotFound';
// import ServiceCard from '@/component/ServiceCard';
=======
import HomepageService from '@/component/HomepageService';
import Navbar from '@/component/NavBar';
import NotFound from '@/component/NotFound';
import ServiceCard from '@/component/ServiceCard';
import HowWeWorkSection from '@/component/HowweWork';
import HomepagePricingCards from '@/component/HomePagePricingCard';
import HomepagePricePackages from '@/component/HomepagePricePackages';
import TestimonialsSection from '@/component/TestimonialsSection';

>>>>>>> 643e9f8 ( upadte home page)
export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <LaundryExperience/>
       <HowWeWorkSection/>
      <LaundryService/>
      <HomepagePricingCards/>
      <TestimonialsSection />
        <HomepagePricePackages />
     {/*<HomepageService/> */}
    
    </>
  );
}
