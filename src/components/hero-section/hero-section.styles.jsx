import styled from "styled-components/macro";
import { ReactComponent as HroSvg } from "../../assets/heroIcon.svg";

export const HeroSectionContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  height: max-content;
`;
export const HeroSectionBackground = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 0;
  top: 0;
  position: absolute;

  background: #f2fafa;
`;
export const HeroSectionBox = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
export const HeroTextBig = styled.span`
  font-size: var(--f_size_s4);
  font-weight: var(--f_weight_bold);
`;
export const HeroSubText = styled.span`
  font-size: var(--f_size_s2);
  width: 85%;
`;
export const HeroImg = styled.img`
  width: 100%;
  z-index: 2;
`;
