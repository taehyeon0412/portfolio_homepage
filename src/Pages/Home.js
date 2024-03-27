import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";

//component
import Navigation from "../components/Navigation";
import IntroBody from "../components/IntroBody";

//Util
import { commonStyle } from "./../util/commonStyle";

//pdf
import Resume from "../assets/resume.pdf";

const Wrapper = styled.div`
  min-height: 90vh;
  grid-template-rows: 70px 500px auto;
  ${commonStyle}
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 1s ease;
`;

const Ani = keyframes`
from {
        stroke-dashoffset: 1260;
      }
      to {
        stroke-dashoffset: 2520;
      }
`;

const ResumeDiv = styled.div`
  @media (max-width: 700px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
  }
`;

const ResumeWrapper = styled.a`
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (hover: hover) {
    &:hover {
      & path {
        fill: rgba(255, 255, 255, 0.1);
      }
    }
  }

  & svg {
    position: absolute;
  }
  & path {
    stroke: white;
    fill: none;
    stroke-dasharray: 630;
  }
  @media (max-width: 700px) {
    width: 150px;
    height: 100px;
  }
`;

const Circle1 = styled.svg`
  width: 209px;
  & path {
    animation: ${Ani} 2s 0.2s infinite ease-in-out;
  }

  @media (max-width: 700px) {
    width: 150px;
  }
`;
const Circle2 = styled.svg`
  width: 221px;
  & path {
    animation: ${Ani} 3s infinite ease-in-out;
  }
  @media (max-width: 700px) {
    width: 170px;
  }
`;

const Text = styled.h3`
  position: absolute;
  font-size: 15px;
  font-weight: 600;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;

const LinkBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 30px;

  div {
    font-size: 15px;
    padding: 10px 15px 10px 15px;
    border: 2px solid white;
    border-radius: 20px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.5);
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
  }

  @media (max-width: 550px) {
    justify-content: center;
    div {
      font-size: 12px;
    }
  }
`;

function Home() {
  const [showWrapper, setShowWrapper] = useState("false");

  useEffect(() => {
    setShowWrapper("true");
  }, []);
  //로딩될 때, Wrapper의 opacity를 1로 변경

  return (
    <Wrapper show={showWrapper}>
      <Navigation menuName={"home"} />
      <IntroBody />

      <ResumeDiv>
        <ResumeWrapper href={Resume} target="_blank">
          <Circle1
            viewBox="0 0 209 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M206.788 21.8306C211.643 34.4174 204.851 50.3021 189.56 65.8809C174.304 81.4244 150.726 96.5067 122.436 107.418C94.1458 118.328 66.5461 122.984 44.8038 121.71C23.0121 120.434 7.31312 113.223 2.45866 100.636C-2.39579 88.0495 4.3958 72.1648 19.6867 56.5859C34.9428 41.0424 58.5214 25.9601 86.8113 15.0493C115.101 4.13846 142.701 -0.517619 164.443 0.756361C186.235 2.03324 201.934 9.24382 206.788 21.8306Z" />
          </Circle1>
          <Circle2
            viewBox="0 0 221 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M220.061 53.9253C219.606 67.4081 207.143 79.3714 186.978 87.7292C166.858 96.0681 139.259 100.728 108.955 99.7053C78.6508 98.683 51.4284 92.1741 31.9162 82.4983C12.3595 72.8004 0.73099 60.0244 1.18583 46.5416C1.64067 33.0588 14.1037 21.0955 34.2695 12.7377C54.3895 4.39882 81.9886 -0.260708 112.292 0.761583C142.596 1.78387 169.819 8.29279 189.331 17.9686C208.888 27.6664 220.516 40.4425 220.061 53.9253Z" />
          </Circle2>
          <Text>résumé</Text>
        </ResumeWrapper>
      </ResumeDiv>

      <LinkBtnWrapper>
        <a
          href="https://github.com/taehyeon0412"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>GITHUB</div>
        </a>
        <a
          href="https://taehyeon-smilestudy.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Blog</div>
        </a>
      </LinkBtnWrapper>
    </Wrapper>
  );
}

export default React.memo(Home);
