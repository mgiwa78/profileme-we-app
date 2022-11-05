import styled, { css } from "styled-components/macro";

export const ProfilesContainer = styled.div`
  .section-heading {
    font-size: 24px;
    font-weight: 500;
    color: #252525;
    width: 300px;
    text-align: center;
  }

  .styled {
    color: #1e88e5;
  }

  .profiles {
    display: flex;
    gap: 25px;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
    justify-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Profile = styled.div`
  border-radius: 10px;
  width: 250px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  .title {
    display: flex;
    border-radius: 10px;

    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .profile-details {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .name {
      font-size: 18px;
      font-weight: 500;
    }
    .category-specilization {
      font-size: 13px;
      color: #9d9d9d;
    }
  }
  .profile-btm {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`;

export const ProfileImg = styled.div`
  ${({ bgUrl }) => css`
    background-image: url(${bgUrl});
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
  `}
`;
export const ProfileLink = styled.img`
  width: 25px;
`;
