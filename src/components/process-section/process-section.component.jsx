import React from "react";
import { ProcessSectionContainer } from "./process-section.styles";

import LockIcon from "../../assets/add_circle.svg";
import SearchPaper from "../../assets/policy48.svg";
import Secure from "../../assets/assured_workload40.svg";
import ProcessItem from "../process-item/process-item.component";

const ProcessSection = () => {
  const ProcessData = [
    {
      imgUrl: LockIcon,
      name: "Create Account",
      desc: "First you have to create a account  here",
    },
    {
      imgUrl: SearchPaper,
      name: "Search work ",
      desc: "Search the best freelance work here",
    },
    {
      imgUrl: Secure,
      name: "Save and apply",
      desc: "Apply or save and start your work",
    },
  ];
  return (
    <ProcessSectionContainer>
      {ProcessData.map((pro) => (
        <ProcessItem processData={pro} />
      ))}
    </ProcessSectionContainer>
  );
};

export default ProcessSection;
