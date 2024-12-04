import BlogSection from '@/components/BlogSection';
import BookingForm from "@/components/BookingForm";
import CTASection from "@/components/CTASection";
import Features2 from "@/components/Features2";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewFeatures from "@/components/NewFeatures";
import PackageSection from '@/components/PackageSection';
import Testimonials from "@/components/Testimonials";
import styles from '@/styles/PackageSection.module.css';


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

