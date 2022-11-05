import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  .rights {
    color: #9d9d9d;
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 16px;
  }
`;
export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const FooterList = styled.ul`
  list-style: none;
  width: 275px;
  .section-title {
    font-weight: 500;
    text-align: right;
    font-size: 18px;
    margin-bottom: 15px;
  }
  li {
    margin: 5px 0;
    font-size: 13px;
  }
`;
export const FooterImg = styled.img`
  width: 90%;
`;
export const FooterLogo = styled.div`
  font-size: 26px;
  font-weight: 600;
  width: 90%;
  .styled {
    color: #1e88e5;
  }
`;
export const SocialLinks = styled.img``;
export const Details = styled.img`
  width: 70%;
`;
