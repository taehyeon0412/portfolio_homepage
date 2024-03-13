import { useEffect, useState } from "react";
import ProjectBody from "../components/ProjectBody";
import { commonStyle } from "../util/commonStyle";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import TopButton from "./../components/TopButton";

const Wrapper = styled.div`
  min-height: 100vh;
  grid-template-rows: 70px 500px auto;
  ${commonStyle}
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 1s ease;
`;

function Project() {
  const [showWrapper, setShowWrapper] = useState("false");

  useEffect(() => {
    setShowWrapper("true");
  }, []);
  // 로딩될 때, Wrapper의 opacity를 1로 변경

  return (
    <Wrapper show={showWrapper}>
      <Navigation menuName={"project"} />
      <ProjectBody menuName={"pt"} />
      <TopButton />
    </Wrapper>
  );
}

export default Project;
