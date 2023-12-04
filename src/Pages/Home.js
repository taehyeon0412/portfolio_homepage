import styled from "styled-components";
import React, { useEffect, useState } from "react";

//component
import Navigation from "../components/Navigation";
import IntroBody from "../components/IntroBody";
import ProjectBody from "../components/ProjectBody";
import TopButton from "../components/TopButton";

//Util
import { commonStyle } from "./../util/commonStyle";

const Wrapper = styled.div`
  grid-template-rows: 70px 500px auto;
  ${commonStyle}
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 1s ease;
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
      <ProjectBody menuName={"project"} />
      <TopButton />
    </Wrapper>
  );
}

export default React.memo(Home);
