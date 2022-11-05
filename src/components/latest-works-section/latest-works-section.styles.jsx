import styled from "styled-components/macro";

export const LatestWorksContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 28px;
    line-height: 24px;
    text-align: center;
    font-weight: 600;

    color: #252525;
  }
  .sub {
    font-size: 13px;
    color: #9d9d9d;
  }
  .styled {
    font-size: 26px;
    font-weight: 600;

    color: #1e88e5;
  }
  .workArrows {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
  .works {
    display: flex;
    justify-content: center;
    padding: 30px;
    flex-direction: column;
    gap: 40px;
  }
`;

export const WorkArrow = styled.img`
  width: 40px;
  height: 40px;
`;
export const Work = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  gap: 20px;

  .work_top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .title {
    font-weight: 500;
    font-size: 23px;
    line-height: 28px;
  }
  .body {
    color: #9d9d9d;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
  }
  .bid-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
    font-size: 16px;
    color: #252525;

    width: 50%;
  }
  .bid-price {
    color: #2525258b;
  }
  .apply {
    color: #1e88e5;
    font-weight: 500;
  }
  .work_bottom {
    display: flex;

    justify-content: space-between;

    width: 100%;
  }
`;
