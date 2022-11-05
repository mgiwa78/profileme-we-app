import React from "react";
import HeroSection from "../../components/hero-section/hero-section.component";
import ProcessSection from "../../components/process-section/process-section.component";
import RecordSection from "../../components/record-secion/record-secion.component";
import { LandingPageContainer } from "./landing-page.styles";
import LatestWorks from "../../components/latest-works-section/latest-works-section.component";
import CategoriesSection from "../../components/categories-section/categories-section.component";
import ProfileSection from "../../components/profiles-section/profiles-section.component";
import NewsLetter from "../../components/newsletter-section/newsletter-section.component";
import Footer from "../../components/footer-section/footer-section.component";

const LandingPage = () => {
  return (
    <LandingPageContainer className="">
      <HeroSection />
      <ProcessSection />
      <RecordSection />
      <LatestWorks />
      <CategoriesSection />
      <ProfileSection />
      <NewsLetter />
      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;
