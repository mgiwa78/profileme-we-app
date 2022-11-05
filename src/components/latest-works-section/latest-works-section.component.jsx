import React from "react";
import {
  LatestWorksContiner,
  Work,
  WorkArrow,
} from "./latest-works-section.styles";
import leftArrow from "../../assets/arrowleft.svg";
import rightArrow from "../../assets/arrowright.svg";

const LatestWorks = () => {
  const works = [
    {
      title: "Logo Design",
      desc: "Need a professional logo with writing underneath for our jewellery company",
      pay: "24,500",
    },
    {
      title: "Graphic Design",
      desc: "We need a graphic designer with UI/UX skills for our Furniture company",
      pay: "34,500",
    },
    {
      title: "Need a SEO",
      desc: "Need a SEO for our company who will let our company to a higher level",
      pay: "94,500",
    },
  ];
  return (
    <LatestWorksContiner>
      <div className="heading">
        <span className="sub">The latest freelance work!</span>

        <span className="title">Recently Posted</span>
        <span className="styled">Works</span>
        <div className="workArrows">
          <WorkArrow src={leftArrow} />
          <WorkArrow src={rightArrow} />
        </div>
      </div>
      <div className="works">
        {works.map((work) => (
          <Work>
            <div className="work_top">
              <span className="title"> {work.title}</span>
              <p className="body">{work.desc}</p>
            </div>
            <div className="work_bottom">
              <div className="bid-box">
                Pay
                <span className="bid-price">₦{work.pay} </span>
              </div>
              <div className="apply"> Apply</div>
            </div>
          </Work>
        ))}
      </div>
    </LatestWorksContiner>
  );
};

export default LatestWorks;
