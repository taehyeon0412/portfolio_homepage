import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import { portfolioList } from "../util/portfolioList";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//IMG
import contact_img from "../assets/contact_img.webp";
import { ReactComponent as GithubIcon } from "../assets/contact_github.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as BlogIcon } from "../assets/blog.svg";

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

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1300px) {
    width: 336px;
    height: 420px;
  }

  @media (max-width: 700px) {
    width: 280px;
    height: 350px;
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
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  i {
    font-size: 20px;
  }
`;
//모달 끄기 버튼

const IntroduceDiv = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  gap: 5%;
`;

const IntroduceImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
`;

const IntroduceText = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.2;

  span {
    color: black;
    font-size: 33px;
    font-weight: 900;

    font-family: "Beeunhye";

    @media (max-width: 1300px) {
      font-size: 27px;
    }

    @media (max-width: 700px) {
      font-size: 22px;
    }
  }
`;
//모달 자기소개 부분

const ContactDiv = styled.div`
  background-color: rgba(236, 240, 241, 1);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  border-radius: 20px;
  padding-left: 5px;
  padding-top: 5px;
`;

const ContactImgDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    width: 45px;
    height: 45px;

    @media (max-width: 1300px) {
      width: 40px;
      height: 40px;
    }

    @media (max-width: 700px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const commonIconStyle = `
width: 100%;
height: 100%;

&:hover {
  cursor: pointer;
  scale: 1.1;
  }
`;

const ContactGithubIcon = styled(GithubIcon)`
  ${commonIconStyle}
  fill:black;
`;

const ContactEmailIcon = styled(EmailIcon)`
  ${commonIconStyle}
`;

const ContactBlogIcon = styled(BlogIcon)`
  ${commonIconStyle}
`;

const ContactSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: black;

  @media (max-width: 1300px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

//모달 연락처 부분

//---------------------- styled

function ContactModal({ menuName }) {
  const navigate = useNavigate();

  /* const modalMatch = useMatch(`/${menuName}/contact-me`);
  //클릭하고 있는 contact 모달 매치 */

  const overlayClicked = () => {
    navigate(`/`, { replace: true });
  };
  //오버레이 클릭시 홈으로 이동

  useEffect(() => {
    const goBackHome = () => {
      navigate(`/`, { replace: true });
      console.log("모달창 뒤로가기 => 홈");
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", goBackHome);

    return () => window.removeEventListener("popstate", goBackHome);
  }, [navigate]);

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
        <ModalCancelBtn onClick={overlayClicked}>
          <i className="fa-solid fa-circle-xmark"></i>
        </ModalCancelBtn>

        <IntroduceDiv>
          <IntroduceImg>
            <img src={contact_img} alt="Contact_img" />
          </IntroduceImg>
          <IntroduceText>
            <span>
              꾸준히 성장해 나가 <br /> 인정받는 개발자가 <br />
              되겠습니다!
            </span>
          </IntroduceText>
        </IntroduceDiv>

        <ContactDiv>
          <ContactImgDiv>
            <a
              href="https://github.com/taehyeon0412"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactGithubIcon />
            </a>
            <ContactSpan>github.com/taehyeon0412</ContactSpan>
          </ContactImgDiv>

          <ContactImgDiv>
            <a
              href="mailto:taehyeon202@naver.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactEmailIcon />
            </a>
            <ContactSpan>taehyeon202@naver.com</ContactSpan>
          </ContactImgDiv>

          <ContactImgDiv>
            <a
              href="https://taehyeon-smilestudy.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactBlogIcon />
            </a>

            <ContactSpan>
              taehyeon-
              <br />
              smilestudy.tistory.com
            </ContactSpan>
          </ContactImgDiv>
        </ContactDiv>
      </ModalBox>
    </>
  );
}

export default ContactModal;
