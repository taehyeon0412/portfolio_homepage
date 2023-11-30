import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import { portfolioList } from "../util/portfolioList";
import { useMatch, useNavigate } from "react-router-dom";
import React from "react";

//component
import { GlobalStyle } from "./ContactModal";

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
    width: 100%;
    height: 90%;
  }
`;
//모달창

const Container = styled.div``;

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
        layoutId={modalMatch?.params.Img_id}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {Img_id}
      </ModalBox>
    </>
  ) : null;
}

export default React.memo(ProjectModal);
