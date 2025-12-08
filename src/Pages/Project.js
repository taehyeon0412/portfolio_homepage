import { useEffect, useState } from "react";
import ProjectBody from "../components/ProjectBody";
import { commonStyle } from "../util/commonStyle";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import TopButton from "./../components/TopButton";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  grid-template-rows: 70px 500px auto;
  ${commonStyle}
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 1s ease;
`;

function Project() {
  const [showWrapper, setShowWrapper] = useState("false");
  const { pathname } = useLocation();

  useEffect(() => {
    setShowWrapper("true");
  }, []);
  // 로딩될 때, Wrapper의 opacity를 1로 변경

  //모달창 열렸을 때 오른쪽 패딩 주기
  useEffect(() => {
    let timeoutId = null;

    if (pathname === "/project/contact-me") {
      // 모달 열려있을 때: 바로 패딩/스크롤 설정
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = "15px";
    } else {
      // 모달 닫힐 때: 1초 뒤에 패딩/스크롤 원복
      timeoutId = window.setTimeout(() => {
        document.documentElement.style.overflow = "";
        document.documentElement.style.paddingRight = "";
      }, 500);
    }

    return () => {
      // 언마운트되거나 pathname 다시 바뀔 때 타이머 정리
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname]);

  return (
    <Wrapper show={showWrapper}>
      <Navigation menuName={"project"} />
      <ProjectBody menuName={"pt"} />
      <TopButton />
    </Wrapper>
  );
}

export default Project;
