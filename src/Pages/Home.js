import styled from "styled-components";

//component
import Navigation from "../components/Navigation";
import IntroBody from "../components/IntroBody";
import ProjectBody from "../components/ProjectBody";
import TopButton from "../components/TopButton";

const Wrapper = styled.div`
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
`;

function Home() {
  return (
    <Wrapper>
      <Navigation />
      <IntroBody />
      <ProjectBody />
      <TopButton />
    </Wrapper>
  );
}

export default Home;
