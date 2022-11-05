import React from "react";
import {
  ItemDesc,
  ItemIcon,
  ItemIconCont,
  ItemTitle,
  SetionItemContainer,
} from "./process-item.styles";

const ProcessItem = ({ processData: { name, desc, imgUrl } }) => {
  return (
    <SetionItemContainer>
      <ItemIconCont>
        {" "}
        <ItemIcon src={imgUrl} />
      </ItemIconCont>

      <ItemTitle>{name}</ItemTitle>
      <ItemDesc>{desc}</ItemDesc>
    </SetionItemContainer>
  );
};

export default ProcessItem;
