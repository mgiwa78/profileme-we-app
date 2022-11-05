import React from "react";
import Button from "../button/button.component";
import {
  HeroImg,
  HeroSectionBackground,
  HeroSectionBox,
  HeroSectionContainer,
  HeroSubText,
  HeroTextBig,
} from "./hero-section.styles";
import HroSvg from "../../assets/hero.png";
import { SearchInput } from "../form-elements/form-elements.component";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroSectionBackground />
      <HeroSectionBox>
        <HeroTextBig>Are you looking for Freelancers?</HeroTextBig>
        <HeroSubText>
          Hire Great Freelancers, Fast. Spacelance helps you hire elite
          freelancers at a moment's notice
        </HeroSubText>
        <Button name="Hire a freelancer" />
      </HeroSectionBox>
      <HeroImg src={HroSvg} />
      <SearchInput placeholder="Search freelance work" />
    </HeroSectionContainer>
  );
};

export default HeroSection;
