import styled, { css } from "styled-components/macro";

export const CategoriesContainer = styled.div`
  .section-heading {
    font-size: 24px;
    font-weight: 500;
    color: #252525;
  }

  .styled {
    color: #1e88e5;
  }

  .categories {
    display: flex;
    gap: 25px;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
    justify-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Category = styled.div`
  ${({ bgUrl }) => css`
    background-image: url(${bgUrl});
    width: 250px;
    background-position: center;
    background-size: cover;

    height: 170px;
  `}
  border-radius:10px;

  .title {
    display: flex;
    border-radius: 10px;

    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
