import React from "react";
import profile1 from "../../assets/profile1.jpeg";
import profile2 from "../../assets/profile2.jpeg";
import profileArw from "../../assets/arrow.svg";

import Button from "../button/button.component";
import {
  Profile,
  ProfileImg,
  ProfileLink,
  ProfilesContainer,
} from "./profiles-section.styles";

const ProfileSection = () => {
  const ProfileData = [
    {
      id: 1,
      name: "Bunny.design",
      category: "UI/UX Designer",
      imgUrl: profile1,
    },
    {
      id: 2,
      name: "Bhaskar Tiwari",
      category: "Graphic Designer",
      imgUrl: profile2,
    },
  ];
  return (
    <ProfilesContainer>
      <div className="section-heading">
        Checkout The Best <span className="styled">Portfolios</span> Here
      </div>
      <div className="profiles">
        {ProfileData.map((prof) => (
          <Profile key={prof.id}>
            <ProfileImg bgUrl={prof.imgUrl} />
            <div className="profile-btm">
              <div className="profile-details">
                <span className="name">{prof.name}</span>
                <span className="category-specilization">{prof.category}</span>
              </div>
              <ProfileLink src={profileArw} />
            </div>
          </Profile>
        ))}
      </div>
      <Button name="More Profile" />
    </ProfilesContainer>
  );
};

export default ProfileSection;
