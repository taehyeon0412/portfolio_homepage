import styled from "styled-components";
import React, { useEffect, useState } from "react";

//component
import Navigation from "../components/Navigation";
import { commonStyle } from "./Home";

//img
import contact_img from "../assets/contact_img.webp";

//data
import profileData from "../data/profile.json";

const Wrapper = styled.div`
  ${commonStyle}
  grid-template-rows: 70px 700px;
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 3s ease;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 350px auto;

  @media (max-width: 1600px) {
    grid-template-columns: 300px auto;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.div`
  width: 300px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 100px;
  }

  @media (max-width: 1600px) {
    width: 280px;
    height: 300px;
  }
`;

const ProfileDetail = styled.ul``;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  margin-bottom: 60px;

  & h1 {
    font-size: 65px;
    font-weight: 900;
  }
  & h4 {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 400;
  }
`;

const ProfileItem = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

const ProfileLabel = styled.p`
  width: 100px;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-weight: 400;

  &::before {
    content: "";
    width: 3px;
    height: 16px;
    background-color: white;
    display: inline-block;
    margin-right: 10px;
  }
`;

const ProfileContent = styled.p`
  font-weight: 700;
`;

//프로필

const DetailWrapper = styled.div``;

//--------------------------------------styled

function About() {
  const [showWrapper, setShowWrapper] = useState("false");

  useEffect(() => {
    setShowWrapper("true");
  }, []);
  // 로딩될 때, Wrapper의 opacity를 1로 변경

  return (
    <Wrapper show={showWrapper}>
      <Navigation menuName={"about"} />

      <Container>
        <ProfileWrapper>
          <ProfileImg>
            <img src={contact_img} alt="Contact_img" />
          </ProfileImg>

          <ProfileDetail>
            <NameWrapper>
              <h1>곽태현</h1>
              <h4>Kwak Taehyeon</h4>
            </NameWrapper>

            {profileData.map((item) => (
              <ProfileItem key={item.id}>
                <ProfileLabel>{item.label}</ProfileLabel>
                <ProfileContent>{item.content}</ProfileContent>
              </ProfileItem>
            ))}
          </ProfileDetail>
        </ProfileWrapper>
        {/* 프로필 */}

        <DetailWrapper></DetailWrapper>
        {/* 이력 디테일 */}
      </Container>
    </Wrapper>
  );
}

export default About;
