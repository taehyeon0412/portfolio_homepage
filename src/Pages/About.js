import styled from "styled-components";
import React, { useEffect, useState } from "react";

//component
import Navigation from "../components/Navigation";
import { commonStyle } from "./Home";

//img
import contact_img from "../assets/contact_img.webp";

//data
import profileData from "../data/profile.json";
import educationData from "../data/education.json";
import certificateData from "../data/certificate.json";

const Wrapper = styled.div`
  ${commonStyle}
  grid-template-rows: 70px 700px;
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 3s ease;

  @media (max-width: 850px) {
    grid-template-rows: 70px auto;
    margin-bottom: 100px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 350px auto;

  @media (max-width: 1600px) {
    grid-template-columns: 300px auto;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    align-items: center;
    margin-bottom: 100px;
  }
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

  @media (max-width: 850px) {
    width: 250px;
    height: 200px;

    img {
      border-radius: 50px;
    }
  }
`;

const ProfileDetail = styled.ul``;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  margin-bottom: 60px;

  h1 {
    font-size: 65px;
    font-weight: 900;
  }
  h4 {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 400;
  }

  @media (max-width: 850px) {
    margin-top: 50px;
    align-items: center;

    h1 {
      font-size: 50px;
    }

    h4 {
      font-size: 16px;
    }
  }
`;

const ProfileItem = styled.li`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 850px) {
    margin-bottom: 5px;
  }
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

  @media (max-width: 850px) {
    font-size: 14px;
    width: 80px;

    &::before {
      width: 2px;
      height: 12px;
    }
  }
`;

const ProfileContent = styled.p`
  font-weight: 700;

  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

//프로필

const DetailWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 20px;
  padding-left: 30px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 40px;

  @media (max-width: 1600px) {
    font-size: 25px;
  }

  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

const DetailDiv = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 850px) {
    gap: 30px;
    justify-content: baseline;
  }
`;

const CertificateDetail = styled(DetailDiv)`
  gap: 20px;

  @media (max-width: 1150px) {
    gap: 0px;
  }
`;

const DetailItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CertificateItem = styled(DetailItem)`
  margin-bottom: 50px;

  @media (max-width: 1400px) {
    margin-bottom: 30px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap; //줄바꿈 금지

  &::before {
    content: "";
    width: 3px;
    height: 16px;
    background-color: white;
    display: inline-block;
    margin-right: 10px;
  }

  @media (max-width: 850px) {
    font-size: 17px;

    &::before {
      width: 2px;
      height: 12px;
    }
  }
`;

const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: 17px;

  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

const Desc = styled.p`
  white-space: pre;
  font-size: 13px;
`;

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

        <DetailWrapper>
          <div>
            <Title>Education</Title>

            <DetailDiv>
              {educationData.map((item) => (
                <DetailItem key={item.id}>
                  <Label>{item.date}</Label>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Desc>{item.desc}</Desc>
                </DetailItem>
              ))}
            </DetailDiv>
          </div>
          {/*교육 섹터*/}

          <div>
            <Title>Certificate</Title>

            <CertificateDetail>
              {certificateData.map((item) => (
                <CertificateItem key={item.id}>
                  <Label>{item.title}</Label>
                  <Desc>{item.date}</Desc>
                  <Desc>{item.desc}</Desc>
                </CertificateItem>
              ))}
            </CertificateDetail>
          </div>
          {/*자격증 섹터*/}
        </DetailWrapper>
        {/* 이력 디테일 */}
      </Container>
    </Wrapper>
  );
}

export default About;
