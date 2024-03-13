import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import { portfolioList } from "../util/portfolioList";
import { useMatch, useNavigate } from "react-router-dom";
import React from "react";

//component
import { GlobalStyle } from "./ContactModal";
import { LinkDiv, LinkGithubIcon, LinkWepIcon } from "./PortfolioItem";
import { Label } from "./../Pages/About";

//data
import modalData from "../data/modalData.json";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(250, 250, 250, 0.5);
  opacity: 0;
  z-index: 99;
`;
//모달창 오버레이

const ModalBox = styled(motion.div)`
  position: fixed;
  width: 80%;
  height: 90%;
  top: 5%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: rgba(35, 35, 35, 1);
  border-radius: 20px;
  z-index: 100;
  user-select: none;
  padding: 0px 15px 0px 15px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
    border: 1px solid rgba(86, 86, 85, 1);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(86, 86, 85, 1);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }

  @media (min-width: 1450px) {
    width: 1160px;
    height: 98%;
    top: 1%;
  }

  @media (max-width: 850px) {
    top: 0;
    width: 100%;
    height: 100vh;
  }
`;
//모달창 전체

const Container = styled.div`
  position: relative;
`;

//모달창에서 설명으로 사용할 부분

const CloseBtnDiv = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: none;
  margin-left: 0;
  margin-top: 10px;
  z-index: 100;
  cursor: pointer;
  color: white;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  i {
    font-size: 20px;
  }
`;

//CloseBtn을 모달창에서 고정시키기위해 position: sticky를 사용함

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;

  @media (max-width: 660px) {
    margin-bottom: 30px;
  }

  @media (max-width: 450px) {
    margin-bottom: 0px;
  }
`;

const Hr = styled.span`
  width: 170px;
  height: 1px;
  background-color: white;
  display: block;
  margin-bottom: 15px;
`;
//가로 선

const Desc = styled.p`
  display: flex;
  text-align: center;
  word-break: keep-all;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 25px;
  line-height: 1.3;
  white-space: pre-line;

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const MockupImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 50px;

  @media (min-width: 1450px) {
    height: 550px;
  }

  @media (max-width: 450px) {
    height: 380px;
    margin-bottom: 30px;
  }
`;

const MockupImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 100px;
  grid-gap: 30px;

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
  }
`;

const InfoItem = styled.li`
  font-size: 20px;
`;

const GoalUl = styled.ul`
  margin-top: 25px;
`;

const FeaturesWrapper = styled.ul``;

const Features = styled.h2`
  margin-top: 30px;
  margin-bottom: 100px;
  font-size: 14px;
`;

const FeatureItem = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 3rem;
  margin-bottom: 100px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

const FeatureImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const FeatureImg = styled.img`
  width: 100%;
  max-width: 800px;
  object-fit: contain;
`;

const FeatureTextWrapper = styled.ul``;

const FeatureTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 660px) {
    font-size: 20px;
  }
`;

const FeatureDesc = styled.li`
  list-style-type: "– ";
  word-break: keep-all;
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 16px;

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

//---------------------- styled

function ProjectModal({ Img_id, menuName, data }) {
  const navigate = useNavigate();

  const modalMatch = useMatch(`/project/${menuName}/${Img_id}`);

  const overlayClicked = () => {
    navigate(`/project`, { replace: true });
  };
  //오버레이 클릭시 홈으로 이동

  /* if (modalMatch) {
    console.log("모달매치됨");
  } else {
    console.log("모달매치안됨");
  } */

  const matchedData = modalData
    ? modalData.find((data) => data.Img_id === Img_id)
    : null;

  return modalMatch ? (
    <>
      <GlobalStyle />

      <Overlay
        onClick={overlayClicked}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      />

      <ModalBox
        layoutId={Img_id}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Container>
          <CloseBtnDiv>
            <CloseBtn onClick={overlayClicked}>
              <i className="fa-solid fa-circle-xmark"></i>
            </CloseBtn>
          </CloseBtnDiv>

          <Header>
            <Hr />
            <Desc>{matchedData?.data.scale}</Desc>
            <Title>{matchedData?.data.title}</Title>

            <LinkDiv>
              <a
                href={data.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkGithubIcon />
              </a>
              <a href={data.wepURL} target="_blank" rel="noopener noreferrer">
                <LinkWepIcon />
              </a>
            </LinkDiv>

            <Desc>{matchedData?.data.desc}</Desc>
          </Header>
          {/* 헤더 */}

          <MockupImgWrapper>
            <MockupImg
              src={`${process.env.PUBLIC_URL}/assets/features/${Img_id}/${matchedData?.data.mockupImg}`}
            />
          </MockupImgWrapper>
          {/* Mockup이미지 */}

          <InfoWrapper>
            <InfoItem>
              <Label>Duration</Label>
              <Desc> {matchedData?.data.duration}</Desc>
            </InfoItem>
            <InfoItem>
              <Label>Skill</Label>
              <Desc>{matchedData?.data.skill}</Desc>
            </InfoItem>
            <InfoItem>
              <Label>Goal</Label>
              <GoalUl>
                {matchedData?.data.goal.map((goal) => (
                  <FeatureDesc key={goal.id}>{goal.text}</FeatureDesc>
                ))}
              </GoalUl>
            </InfoItem>
          </InfoWrapper>
          {/* Info */}

          <FeaturesWrapper>
            <Label>Features</Label>
            <Features>{matchedData?.data.features}</Features>

            {matchedData?.features.map((feature) => (
              <FeatureItem key={feature.id}>
                <FeatureImgWrapper>
                  <FeatureImg
                    src={`${process.env.PUBLIC_URL}/assets/features/${Img_id}/${feature.img}`}
                  />
                </FeatureImgWrapper>

                <FeatureTextWrapper>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  {feature.desc?.map((desc, idx) => (
                    <FeatureDesc key={idx}>{desc.text}</FeatureDesc>
                  ))}
                </FeatureTextWrapper>
              </FeatureItem>
            ))}
          </FeaturesWrapper>
        </Container>
      </ModalBox>
    </>
  ) : null;
}

export default React.memo(ProjectModal);
