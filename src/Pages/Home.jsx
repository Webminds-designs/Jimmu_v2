import React from "react";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicePage from "../components/services.jsx";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import {Footer, ConnectWithUs, FooterBottom } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServicePage />
      </section>

      <section id="about-us">
      <AboutUs />
      </section>

      <section id="blogs">
      <Blogs />
      </section>

      <ConnectWithUs />
      <Footer />
      <FooterBottom />
    </div>
  );
}
