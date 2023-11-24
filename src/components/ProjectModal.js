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
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 99;
`;
//모달창 오버레이

const ModalBox = styled(motion.div)`
  display: grid;
  grid-template-rows: 45% 50%;

  position: fixed;
  width: 420px;
  height: 525px;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  z-index: 100;
  user-select: none;
  padding: 0px 15px 0px 15px;

  color: black;

  ::-webkit-scrollbar {
    display: none;
  }
`;
//모달창

//---------------------- styled

function ProjectModal({ Img_id, menuName }) {
  const navigate = useNavigate();

  const modalMatch = useMatch(`/home/${menuName}/${Img_id}`);

  const overlayClicked = () => {
    navigate(`/home`, { replace: true });
  };
  //오버레이 클릭시 홈으로 이동

  return (
    <>
      <GlobalStyle />

      <Overlay
        onClick={overlayClicked}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      />

      <ModalBox layoutId={modalMatch?.params.Img_id}>{Img_id}</ModalBox>
    </>
  );
}

export default React.memo(ProjectModal);
