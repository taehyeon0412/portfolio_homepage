import styled from "styled-components";
import "./css/App.css";

//component
import Navigation from "./components/Navigation";
import IntroBody from "./components/IntroBody";
import ProjectBody from "./components/ProjectBody";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 60vw;

  @media (max-width: 1300px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    width: 80vw;
  }

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

function App() {
  return (
    <Wrapper>
      <Navigation />
      <IntroBody />
      <ProjectBody />
    </Wrapper>
  );
}

export default App;
