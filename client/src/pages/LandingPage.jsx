import React from "react";
import { FaShoppingCart, FaUser, FaSignInAlt } from "react-icons/fa";
import DefaultLayout from "../Layout/DefaultLayout";
import HeroSection from "../components/HeroSection";
import BestSelling from "../components/BestSelling";
import OurProducts from "../components/OurProducts";
import ExclusiveOffer from "../components/ExclusiveOffer";
import DesignerSection from "../components/DesignerSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BackToTopButton from "../components/BackToTopButton";
const LandingPage = () => {
  return (
    <DefaultLayout>
      <section>
        <HeroSection />
        <BestSelling />
        <OurProducts />
        <ExclusiveOffer />
        <DesignerSection />
        <TestimonialsSection />
        <BackToTopButton />
      </section>
    </DefaultLayout>
  );
};

export default LandingPage;
