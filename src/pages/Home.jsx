import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Exceeding from "../components/Exceeding";
import CTA from "../components/CTA";
import Blog from "../components/Blog";
import FutureAccess from "../components/FutureAccess";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page">
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section exceeding_expectations">
        <Exceeding />
      </section>
      <section className="section cta_section">
        <CTA />
      </section>
      <section className="section blog_section">
        <Blog />
      </section>
      <section className="section future-access-section">
        <FutureAccess />
      </section>
      <footer className="section footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;