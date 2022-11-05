import styled from "styled-components/macro";

export const FormInputContainer = styled.div`
  width: max-content;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const FormInputLabel = styled.label``;
export const FormInputElement = styled.input`
  width: 270px;
  height: 53px;
  left: 130.5px;
  top: 1535px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: var(--f_size_s1);
    line-height: 30px;
    padding: 0 59 px;

    color: #9d9d9d;
  }
`;
export const SearchElement = styled.input`
  width: 280px;
  height: 53px;
  left: 130.5px;
  top: 1535px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px 15px;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: var(--f_size_s1);
    line-height: 30px;

    color: #9d9d9d;
  }
`;
export const SearchIcon = styled.img``;
export const SearchIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--c_primary);
  border-radius: 18px;
  right: 8px;
  top: 25%;
`;
