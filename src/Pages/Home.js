import styled from "styled-components";
import React from "react";

//component
import Navigation from "../components/Navigation";
import IntroBody from "../components/IntroBody";
import ProjectBody from "../components/ProjectBody";
import TopButton from "../components/TopButton";

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 65vw;

  display: grid;
  grid-template-rows: 70px 500px auto;

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

function Home() {
  return (
    <Wrapper>
      <Navigation menuName={"home"} />
      <IntroBody />
      <ProjectBody menuName={"home"} />
      <TopButton />
    </Wrapper>
  );
}

export default React.memo(Home);
