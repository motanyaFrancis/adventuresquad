import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PackageSection from '@/components/PackageSection';
import BlogSection from '@/components/BlogSection';
import TourPackages from '@/components/TourPackages';
import styles from '@/styles/PackageSection.module.css';
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import NewFeatures from "@/components/NewFeatures";
import Features2 from "@/components/Features2";
import BookingForm from "@/components/BookingForm";


function Home() {
  return (
    <div className={`bg-white ${styles.container}`}>

      <Navbar />
      <Hero />
      <BookingForm />
      <NewFeatures />
      <Header />
      <Features2 />
      <BlogSection />
      <PackageSection />
      {/* <TourPackages /> */}
      <Testimonials />
      <CTASection />
      <Footer />

    </div>
  );
}

export default Home;

