import React from "react";
import { ButtonContainer } from "./button.styles";

const Button = ({ name, value }) => {
  return <ButtonContainer>{name}</ButtonContainer>;
};

export default Button;
