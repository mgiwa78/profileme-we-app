import styled from "styled-components/macro";

export const SetionItemContainer = styled.div`
  color: #000;
  width: 200px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const ItemTitle = styled.div`
  font-weight: var(--f_weight_medium);
  font-size: var(--f_size_s3);
`;
export const ItemIcon = styled.img`
  height: 60px;
`;
export const ItemIconCont = styled.div`
  border-radius: 50px;
  width: 111px;
  height: 111px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: var(--c_primary2);
`;
export const ItemDesc = styled.div`
  font-size: var(--f_size_s1);
`;
