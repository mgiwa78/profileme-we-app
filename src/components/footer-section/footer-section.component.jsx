import React from "react";
import {
  Details,
  FooterContainer,
  FooterImg,
  FooterList,
  FooterLogo,
  FooterSection,
  SocialLinks,
} from "./footer-section.styles";
import Logo from "../../assets/logo.jpeg";
import Socials from "../../assets/social-links.svg";
import details from "../../assets/details.svg";

const Footer = () => {
  const FooterItems = [{}];
  return (
    <FooterContainer className="container">
      <FooterSection>
        <FooterList>
          {/* <FooterImg src={Logo} /> */}
          <FooterLogo>
            profile<span className="styled">Me</span>
          </FooterLogo>
          <li>
            Powerful Freelance Marketplace System with ability to change the
            Users (Freelancers & Clients)
          </li>
          <SocialLinks src={Socials} />
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterList>
          <span className="section-title"> For Clients</span>
          <li>Find Freelancers</li>
          <li>Post Project</li>
          <li>Refund Policy</li>
          <li>Privacy Policy</li>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterList>
          <span className="section-title"> For Freelancers</span>
          <li>Find Work</li>
          <li>Create Account</li>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterList>
          <span className="section-title"> For Clients</span>
          <Details src={details} />
        </FooterList>
      </FooterSection>
      <div className="rights">2022 profileMe. All right reserved</div>
    </FooterContainer>
  );
};

export default Footer;
