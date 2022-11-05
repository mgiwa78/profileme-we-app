import React from "react";
import {
  RecordBackground,
  RecordItem,
  RecordItems,
  RecordLeft,
  RecordRight,
  RecordSectionContainer,
} from "./record-secion.styles";

import bgImg from "../../assets/services.png";

const RecordSection = () => {
  return (
    <RecordSectionContainer className="container">
      <RecordRight>
        <RecordBackground src={bgImg} />
        <RecordItems>
          <RecordItem>
            <span className="title">500+ </span>
            <span className="sub">Freelancers</span>
          </RecordItem>
          <RecordItem>
            <span className="title">300+ </span>
            <span className="sub">Freelance work Posted</span>
          </RecordItem>
        </RecordItems>
      </RecordRight>
      <RecordLeft>
        <span className="title">
          {" "}
          Find The Best
          <span className="styledText"> Freelancers</span>
          Here
        </span>
        <span className="Pbody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
          bibendum ornare urna, cursus eget convallis. Feugiat imperdiet posuere
          justo, ultrices interdum sed orci nunc, mattis. Ipsum viverra viverra
          neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan,
          tincidunt massa. Dui cras magnis.
        </span>
      </RecordLeft>
    </RecordSectionContainer>
  );
};

export default RecordSection;
