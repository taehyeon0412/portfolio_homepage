import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import { portfolioList } from "../util/portfolioList";
import { useMatch, useNavigate } from "react-router-dom";
import React from "react";

//component
import { GlobalStyle } from "./ContactModal";
import { LinkDiv, LinkGithubIcon, LinkWepIcon } from "./PortfolioItem";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(250, 250, 250, 0.1);
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
  overflow: hidden;
  z-index: 100;
  user-select: none;
  padding: 0px 15px 0px 15px;

  ::-webkit-scrollbar {
    display: none;
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
  overflow-y: scroll;
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
  word-break: keep-all;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
`;

//---------------------- styled

function ProjectModal({ Img_id, menuName }) {
  const navigate = useNavigate();

  const modalMatch = useMatch(`/home/${menuName}/:Img_id`);

  const overlayClicked = () => {
    navigate(`/home`, { replace: true });
  };
  //오버레이 클릭시 홈으로 이동

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
            <Desc>개인 프로젝트</Desc>
            <Title>포트폴리오 홈페이지</Title>

            <LinkDiv>
              <LinkGithubIcon />
              <LinkWepIcon />
            </LinkDiv>

            <Desc>
              진행했던 프로젝트와 이력들을 깔끔하게 보여줄 수 있도록 포트폴리오
              홈페이지를 만들었습니다.
            </Desc>
          </Header>
          {/* 헤더 */}
        </Container>
      </ModalBox>
    </>
  ) : null;
}

export default React.memo(ProjectModal);
