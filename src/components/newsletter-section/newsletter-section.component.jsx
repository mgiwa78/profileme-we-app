import React from "react";
import Button from "../button/button.component";
import { FormInput } from "../form-elements/form-elements.component";
import { NewsLetterContainer } from "./newsletter-section.styles";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <div className="top">
        <div className="title">Newsletter Subscription</div>
        <div className="sub">
          Subscribe to our newsletter to get new freelance work and projects
        </div>
      </div>
      <FormInput placeholder="Enter your email" />
      <Button className="btn" name="Subscribe" />
    </NewsLetterContainer>
  );
};

export default NewsLetter;
