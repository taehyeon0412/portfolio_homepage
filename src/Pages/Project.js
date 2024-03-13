import { useEffect, useState } from "react";
import ProjectBody from "../components/ProjectBody";
import { commonStyle } from "../util/commonStyle";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import TopButton from "./../components/TopButton";

const Wrapper = styled.div`
  ${commonStyle}
  grid-template-rows: 70px 700px;
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 1s ease;

  @media (max-width: 850px) {
    grid-template-rows: 70px auto;
  }
`;

function Project() {
  const [showWrapper, setShowWrapper] = useState("false");

  useEffect(() => {
    setShowWrapper("true");
  }, []);
  // 로딩될 때, Wrapper의 opacity를 1로 변경

  return (
    <Wrapper show={showWrapper}>
      <Navigation menuName={"about"} />
      <ProjectBody menuName={"project"} />
      <TopButton />
    </Wrapper>
  );
}

export default Project;
