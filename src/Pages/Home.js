import styled from "styled-components";
import React, { useEffect, useState } from "react";

//component
import Navigation from "../components/Navigation";
import IntroBody from "../components/IntroBody";
import ProjectBody from "../components/ProjectBody";
import TopButton from "../components/TopButton";

export const commonStyle = `
  margin-top: 30px;
  width: 65vw;

  display: grid;

  @media (max-width: 1400px) {
    width: 80vw;
  }

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 800px) {
    width: 95vw;
  }

  @media (max-width: 700px) {
    grid-template-rows: 70px 450px auto;
  }

  @media (max-width: 550px) {
    grid-template-rows: 70px 400px auto;
  }

  @media (max-width: 430px) {
    grid-template-rows: 70px 370px auto;
  }
`;

const Wrapper = styled.div`
  grid-template-rows: 70px 500px auto;
  ${commonStyle}
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 3s ease;
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
