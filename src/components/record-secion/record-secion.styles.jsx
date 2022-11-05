import styled from "styled-components/macro";

export const RecordSectionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  gap: 30px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const RecordItems = styled.div`
  display: flex;
  position: absolute;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 27px 13px;
  gap: 10px;

  width: max-content;
  right: 3%;
  top: 0px;
`;
export const RecordItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13px 7px;
  gap: 10px;

  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 12px;
    text-align: center;
    color: #1e88e5;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #9d9d9d;
  }
`;
export const RecordBackground = styled.img`
  width: 100%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
export const RecordRight = styled.div``;
export const RecordLeft = styled.div`
  text-align: left;
  display: flex;
  width: 90%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-weight: 500;
    font-size: 26px;
    line-height: 34px;

    color: #252525;
  }
  .styledText {
    color: #1e88e5;
  }
  .Pbody {
    margin-top: 20px;
    font-size: 12px;
    line-height: 19px;
    color: #9d9d9d;
  }
`;
