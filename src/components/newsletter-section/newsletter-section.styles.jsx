import styled, { css } from "styled-components/macro";

export const NewsLetterContainer = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  display: flex;
  background: #f2fafa;
  height: 800px;
  gap: 15px;

  .title {
    font-weight: 500;
    font-size: 23px;
    line-height: 42px;
    text-align: center;
  }
  .sub {
    padding: 10px 0;
    width: 300px;
    font-size: 13px;
    line-height: 19px;
    text-align: center;

    color: #9d9d9d;
  }
  .btn {
    margin-top: 20px;
  }
`;
