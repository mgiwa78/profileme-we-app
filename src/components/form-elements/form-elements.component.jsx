import React from "react";
import {
  FormInputContainer,
  FormInputElement,
  FormInputLabel,
  SearchElement,
  SearchIcon,
  SearchIconContainer,
} from "./form-elements.styles";
import serchIcon from "../../assets/search20.svg";

export const FormInput = ({ label, name, placeholder }) => {
  return (
    <FormInputContainer>
      {label ? <FormInputLabel htmlFor={name}>{label}</FormInputLabel> : ""}
      <FormInputElement name={name} placeholder={placeholder} />
    </FormInputContainer>
  );
};
export const SearchInput = ({ label, name, placeholder }) => {
  return (
    <FormInputContainer>
      <SearchElement name={name} placeholder={placeholder} />
      <SearchIconContainer>
        <SearchIcon src={serchIcon} />
      </SearchIconContainer>
    </FormInputContainer>
  );
};
