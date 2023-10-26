import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import { portfolioList } from "../util/portfolioList";
import { useMatch, useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html{overflow: hidden;}
`;
//모달창이 켜졌을때 html 스크롤을 막음

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  z-index: 99;
`;
//모달창 오버레이

export const ModalBox = styled(motion.div)`
  position: fixed;
  width: 40rem;
  height: 40rem;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: gray;
  border-radius: 20px;
  overflow: auto;
  z-index: 100;
  user-select: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
    top: 0;
    height: 100%;
  }
`;
//모달창

export const ModalCancelBtn = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  right: 0;
  border: none;
  margin: 0 auto;
  z-index: 100;
  cursor: pointer;
  color: black;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  i {
    font-size: 20px;
  }
`;
//모달 끄기 버튼

//---------------------- styled

function ContactModal({ menuName }) {
  const navigate = useNavigate();
  const modalMatch = useMatch(`/${menuName}/contact`);
  //클릭하고 있는 contact 모달 매치

  const overlayClicked = () => {
    navigate("/");
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
      <ModalBox layoutId="contact">
        <ModalCancelBtn>x</ModalCancelBtn>
      </ModalBox>
    </>
  );
}

export default ContactModal;
