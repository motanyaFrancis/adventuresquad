import BlogSection from '@/components/blog-section';
import SearchBar from "@/components/search-bar";
import CTASection from "@/components/cta-section";
import Features2 from "@/components/features-2";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewFeatures from "@/components/features";
import PackageSection from '@/components/package-section';
import Testimonials from "@/components/testimonials";
import styles from '@/styles/PackageSection.module.css';


function Home() {
  return (
    <div className={`bg-white ${styles.container}`}>

      <Navbar />
      <Hero />
      <SearchBar />
      <NewFeatures />
      <Header />
      <Features2 />
      <BlogSection />
      <PackageSection />
      <Testimonials />
      <CTASection />
      <Footer />

    </div>
  );
}

export default Home;

